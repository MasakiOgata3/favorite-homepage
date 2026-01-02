
interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://readdy.ai/api/search-image?query=modern%20professional%20business%20meeting%20with%20confident%20consultants%20discussing%20strategy%20in%20bright%20contemporary%20office%20space%20with%20clean%20minimalist%20design%20soft%20natural%20lighting%20and%20subtle%20green%20accents%20representing%20growth%20and%20success%20professional%20atmosphere&width=1920&height=1080&seq=hero001&orientation=landscape" 
          alt="ヒーロー背景" 
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = '/placeholder-hero.jpg'; // Fallback image
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-8">
          <span className="inline-block px-8 py-3 bg-emerald-500/90 text-white text-lg md:text-xl font-bold rounded-full mb-6">
            社会保険労務士の先生方へ
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          いつもの「キャリアアップ助成金申請」、<br />
          <span className="text-amber-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">今のままでは大損です。</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
          AI研修をセットにするだけで、申請報酬が<span className="text-amber-400 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">4倍（32万円）</span>に。<br />
          さらに顧問先企業の手残り利益も<span className="text-amber-400 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">『＋30万円』</span>増える、魔法のようなご提案。
        </p>

        <button
          onClick={onCTAClick}
          className="inline-flex items-center px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-base sm:text-lg font-bold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 cursor-pointer"
          aria-label="パートナー登録して制度詳細を見る（無料）"
        >
          <span className="hidden sm:inline">パートナー登録して制度詳細を見る（無料）</span>
          <span className="sm:hidden">無料で詳細を見る</span>
          <svg className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <p className="text-white/80 text-sm mt-6">
          ※ 登録後、詳細な申請スキームをご説明いたします
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce">
          <svg className="text-white text-3xl w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
