import { useState, FormEvent } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4i1anmusuhg53kqajs0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          company: '',
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-4">
            お問い合わせ
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Google WorkspaceやAI活用についてのご相談は、お気軽にお問い合わせください
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">まずは無料相談から</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <i className="ri-chat-smile-3-line text-orange-500 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">お気軽にご相談ください</h4>
                  <p className="text-gray-600 text-sm">現在の課題やご要望をお聞かせください。最適なソリューションをご提案いたします。</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <i className="ri-time-line text-orange-500 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">迅速な対応</h4>
                  <p className="text-gray-600 text-sm">お問い合わせいただいた内容には、1営業日以内にご返信いたします。</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <i className="ri-shield-check-line text-orange-500 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">安心のサポート</h4>
                  <p className="text-gray-600 text-sm">導入から運用まで、専門スタッフが丁寧にサポートいたします。</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border-2 border-gray-100">
            <form id="contact-form" onSubmit={handleSubmit} data-readdy-form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2">
                    会社名 <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-sm"
                    placeholder="株式会社〇〇"
                  />
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    お名前 <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-sm"
                    placeholder="山田 太郎"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    メールアドレス <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-sm"
                    placeholder="example@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-sm"
                    placeholder="03-1234-5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-900 mb-2">
                    ご興味のあるサービス <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 pr-8 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors appearance-none cursor-pointer text-sm"
                    >
                      <option value="">選択してください</option>
                      <option value="Google Workspace導入支援">Google Workspace導入支援</option>
                      <option value="AI活用・定着化研修">AI活用・定着化研修</option>
                      <option value="DX・業務改善コンサルティング">DX・業務改善コンサルティング</option>
                      <option value="その他">その他</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                    お問い合わせ内容 <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors resize-none text-sm"
                    placeholder="ご相談内容をご記入ください（500文字以内）"
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500文字</p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white py-4 rounded-xl hover:bg-orange-600 transition-colors font-bold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3">
                    <i className="ri-check-line text-green-500 text-2xl"></i>
                    <p className="text-green-700 font-medium">お問い合わせを受け付けました。ご連絡をお待ちください。</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3">
                    <i className="ri-error-warning-line text-red-500 text-2xl"></i>
                    <p className="text-red-700 font-medium">送信に失敗しました。もう一度お試しください。</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
