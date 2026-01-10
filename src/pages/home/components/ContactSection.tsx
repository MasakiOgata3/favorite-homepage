
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function ContactSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('company', formData.company);
      formBody.append('email', formData.email);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/public/form/submit/favorite-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-black text-navy mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg text-gray-600">
            導入相談、カリキュラム詳細のお問い合わせはこちら。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            id="favorite-contact-form"
            data-readdy-form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-[30px] p-10 lg:p-12"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-navy font-medium mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-navy font-medium mb-2">
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="株式会社〇〇"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-navy font-medium mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="example@company.co.jp"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-navy font-medium mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                  placeholder="お問い合わせ内容をご記入ください（500文字以内）"
                />
                <p className="text-sm text-gray-500 mt-2 text-right">
                  {formData.message.length} / 500
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-navy text-white px-8 py-5 rounded-full hover:bg-navy-light transition-all duration-300 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                <span>{isSubmitting ? '送信中...' : '送信する'}</span>
                {!isSubmitting && <i className="ri-arrow-right-line"></i>}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl text-center"
                >
                  お問い合わせありがとうございます。担当者より折り返しご連絡いたします。
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl text-center"
                >
                  送信に失敗しました。お手数ですが、もう一度お試しください。
                </motion.div>
              )}
            </div>
          </form>

          <p className="text-center text-gray-500 text-sm mt-8">
            または <a href="mailto:info@favorite.co.jp" className="text-accent hover:underline">info@favorite.co.jp</a> までメールでお問い合わせください
          </p>
        </motion.div>
      </div>
    </section>
  );
}
