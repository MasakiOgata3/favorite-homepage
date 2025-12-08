export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20Japanese%20office%20workspace%20with%20natural%20wood%20elements%20and%20clean%20white%20walls%2C%20bright%20natural%20lighting%20from%20large%20windows%2C%20contemporary%20business%20environment%20in%20Tokyo%20with%20subtle%20orange%20accent%20colors%2C%20professional%20corporate%20interior%20design%20with%20plants%20and%20open%20collaborative%20space%2C%20realistic%20photography%20of%20Japanese%20workplace%2C%20clean%20aesthetic%20with%20technology%20integration%2C%20warm%20and%20inviting%20atmosphere&width=1920&height=1080&seq=hero-bg-002&orientation=landscape"
          alt="Hero Background"
          className="w-full h-full object-cover object-top opacity-20"
        />
      </div>
      
      <div className="relative z-10 w-full px-6 lg:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-8 max-w-4xl">
              <div className="inline-block">
                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                  AI Transformation Support
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mt-8">
                仕事をあなたの<span className="text-orange-500">「お気に入り」</span>に。
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-normal">
                Make Work Your "Favorite".
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Google WorkspaceとAIの力で、<br />
                あなたのビジネスを次のステージへ。<br />
                ツールを入れるだけでなく、<br />
                「使いこなして成果を出す」まで伴走します。
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4 justify-center">
                <button 
                  onClick={scrollToContact}
                  className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all font-bold text-lg shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  無料相談を申し込む
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition-all font-bold text-lg border-2 border-gray-200 whitespace-nowrap cursor-pointer"
                >
                  サービスを見る
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-orange-500"></i>
      </div>
    </section>
  );
}
