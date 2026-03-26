import { useEffect } from 'react';

export default function ClosingCTA() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'timerex_embed';
    script.src = 'https://asset.timerex.net/js/embed.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).TimerexCalendar) {
        (window as any).TimerexCalendar();
      }
    };
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById('timerex_embed');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <section id="register-section" className="py-24 bg-gradient-to-br from-emerald-500 to-teal-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-6">
            <i className="ri-rocket-line text-7xl text-white"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            まずは無料のオンライン個別相談<br />
            （約30分）にお申し込みください。
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            個別相談では、先生の顧問先の状況に合わせて、具体的な導入ステップや収益シミュレーションを直接ご案内します。<br />
            無理な売り込みは一切ありませんので、お気軽にご予約ください。
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <p className="text-center font-bold text-slate-800 mb-6">以下のカレンダーからご希望の日時を選択してご予約ください。</p>
          <div
            id="timerex_calendar"
            data-url="https://timerex.net/s/ogata_3a16_c8e2/a254b42b"
          />
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
            <i className="ri-shield-check-line text-4xl mb-3"></i>
            <h4 className="font-bold mb-2">完全無料</h4>
            <p className="text-sm text-white/80">費用は一切かかりません</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
            <i className="ri-time-line text-4xl mb-3"></i>
            <h4 className="font-bold mb-2">迅速対応</h4>
            <p className="text-sm text-white/80">個別相談後すぐに実践可能</p>
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
