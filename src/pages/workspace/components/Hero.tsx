interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://readdy.ai/api/search-image?query=Japanese%20business%20professionals%20working%20together%20in%20stylish%20modern%20office%20space%2C%20diverse%20team%20of%20young%20Japanese%20men%20and%20women%20collaborating%2C%20contemporary%20minimalist%20interior%20design%20with%20natural%20wood%20elements%2C%20bright%20natural%20lighting%20from%20large%20windows%2C%20clean%20aesthetic%20workspace%2C%20professional%20atmosphere%2C%20high-tech%20environment%2C%20warm%20and%20inviting%20ambiance&width=1920&height=1080&seq=hero-bg-japanese-002&orientation=landscape"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block bg-gray-900/80 text-white px-8 py-4 rounded-full text-3xl md:text-4xl font-bold mb-8 backdrop-blur-sm">
          全ての業務にAIを。
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Google Workspace で<br />
          <span className="text-yellow-400">ビジネスを加速</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto">
          クラウドベースの統合ツールで、チームの生産性を最大化。<br />
          どこからでも、どのデバイスからでも、シームレスに業務を遂行できます。
        </p>

        {/* スクロールインジケーター */}
        <div className="flex justify-center mb-8 animate-bounce">
          <i className="ri-arrow-down-line text-white text-3xl"></i>
        </div>

        <div className="flex justify-center">
          <button
            onClick={onContactClick}
            className="px-16 py-5 bg-yellow-400 text-gray-900 text-xl font-bold rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer"
          >
            無料で相談する
          </button>
        </div>
      </div>
    </section>
  );
}