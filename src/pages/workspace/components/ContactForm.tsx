import { useState, FormEvent } from 'react';

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://readdy.ai/api/form/d5hgql3ihlvellpk52kg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => {
          onClose();
        }, 2000);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-t-3xl flex justify-between items-center">
          <h3 className="text-2xl font-bold">お問い合わせ</h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                会社名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="株式会社〇〇"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="03-1234-5678"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="example@company.com"
              />
            </div>

            <div>
              <label htmlFor="users" className="block text-sm font-bold text-gray-700 mb-2">
                想定ユーザー数 <span className="text-red-500">*</span>
              </label>
              <select
                id="users"
                name="users"
                required
                className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors cursor-pointer"
              >
                <option value="">選択してください</option>
                <option value="1-10">1-10名</option>
                <option value="11-50">11-50名</option>
                <option value="51-100">51-100名</option>
                <option value="101-300">101-300名</option>
                <option value="301+">301名以上</option>
              </select>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-bold text-gray-700 mb-2">
                興味のある機能（複数選択可）
              </label>
              <div className="space-y-2">
                {['Gmail', 'Google Drive', 'Google Meet', 'Google カレンダー', 'Google ドキュメント', 'その他'].map((item) => (
                  <label key={item} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="interest"
                      value={item}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={500}
                rows={5}
                className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors resize-none"
                placeholder="ご質問やご要望をお聞かせください（500文字以内）"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">※500文字以内でご入力ください</p>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
              <p className="text-green-800 font-medium text-center">
                <i className="ri-check-line mr-2"></i>
                送信が完了しました。担当者より折り返しご連絡いたします。
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <p className="text-red-800 font-medium text-center">
                <i className="ri-error-warning-line mr-2"></i>
                送信に失敗しました。もう一度お試しください。
              </p>
            </div>
          )}

          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-4 bg-gray-200 text-gray-700 text-sm font-bold rounded-lg hover:bg-gray-300 transition-colors whitespace-nowrap cursor-pointer"
            >
              キャンセル
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}