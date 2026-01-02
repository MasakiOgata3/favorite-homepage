import { useState } from 'react';

export default function ClosingCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    office: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mdakgzdw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', office: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="register-section" className="py-24 bg-gradient-to-br from-emerald-500 to-teal-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-6">
            <i className="ri-rocket-line text-7xl text-white"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            まずはパートナー登録をして、<br />
            詳しい説明会にご参加ください。
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            登録後に開催される説明会で、具体的な申請スキームを全て解説します。<br />
            今すぐ無料登録して、新しい収益の柱を手に入れましょう。
          </p>
        </div>

        <div className="bg-white rounded-2xl p-10 shadow-2xl">
          <form onSubmit={handleSubmit} data-readdy-form id="partner-registration">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                  placeholder="090-1234-5678"
                />
              </div>
              <div>
                <label htmlFor="office" className="block text-sm font-bold text-slate-900 mb-2">
                  事務所名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="office"
                  name="office"
                  value={formData.office}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                  placeholder="○○社会保険労務士事務所"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                ご質問・ご要望（任意）
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={500}
                rows={4}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none text-sm"
                placeholder="ご質問やご要望がありましたらご記入ください（500文字以内）"
              />
              <div className="text-right text-xs text-slate-500 mt-1">
                {formData.message.length}/500文字
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-emerald-50 border-2 border-emerald-500 rounded-lg flex items-center gap-3">
                <i className="ri-check-line text-2xl text-emerald-600"></i>
                <p className="text-emerald-700 font-medium">
                  登録ありがとうございます！ご入力いただいたメールアドレスに詳細をお送りいたします。
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-center gap-3">
                <i className="ri-error-warning-line text-2xl text-red-600"></i>
                <p className="text-red-700 font-medium">
                  送信に失敗しました。もう一度お試しください。
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg font-bold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <i className="ri-loader-4-line text-2xl animate-spin"></i>
                  <span>送信中...</span>
                </>
              ) : (
                <>
                  <span>無料でパートナー登録する</span>
                  <i className="ri-arrow-right-line text-2xl"></i>
                </>
              )}
            </button>

            <p className="text-center text-sm text-slate-600 mt-4">
              ※ 登録後、説明会のご案内をお送りいたします
            </p>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
            <i className="ri-shield-check-line text-4xl mb-3"></i>
            <h4 className="font-bold mb-2">完全無料</h4>
            <p className="text-sm text-white/80">登録費用は一切かかりません</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
            <i className="ri-time-line text-4xl mb-3"></i>
            <h4 className="font-bold mb-2">迅速対応</h4>
            <p className="text-sm text-white/80">登録後すぐに説明会をご案内</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
            <i className="ri-customer-service-line text-4xl mb-3"></i>
            <h4 className="font-bold mb-2">手厚いサポート</h4>
            <p className="text-sm text-white/80">未経験でも安心、直接フォロー</p>
          </div>
        </div>
      </div>
    </section>
  );
}