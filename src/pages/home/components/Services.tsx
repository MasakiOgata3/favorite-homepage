export function Services() {
  const services = [
    {
      icon: 'ri-google-fill',
      title: 'Google Workspace 導入支援',
      description: 'ライセンス選定から初期設定、セキュリティ構築まで。企業の規模や課題に合わせた最適なプランニングと販売を行います。',
      features: ['ライセンス選定', '初期設定・移行', 'セキュリティ構築', '運用サポート'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20consultant%20presenting%20Google%20Workspace%20setup%20on%20large%20screen%20in%20modern%20conference%20room%2C%20clean%20minimalist%20office%20with%20natural%20lighting%2C%20laptop%20displaying%20Google%20apps%20interface%2C%20professional%20team%20meeting%20discussing%20cloud%20solutions%2C%20bright%20contemporary%20workspace%20with%20orange%20accent%20colors%2C%20technology%20consultation%20scene%20with%20collaborative%20atmosphere%2C%20high-end%20corporate%20training%20environment&width=600&height=400&seq=service-001&orientation=landscape'
    },
    {
      icon: 'ri-robot-2-line',
      title: 'AI活用・定着化研修',
      description: 'Gemini for Google Workspace等の生成AI活用研修を実施。現場社員が「明日から使える」実践的なスキルを定着させます。',
      features: ['Gemini活用研修', '実践ワークショップ', '定着化サポート', 'カスタム研修'],
      image: 'https://readdy.ai/api/search-image?query=Business%20professionals%20learning%20AI%20technology%20in%20modern%20training%20room%2C%20instructor%20demonstrating%20Gemini%20AI%20on%20interactive%20display%2C%20diverse%20team%20engaged%20in%20hands-on%20workshop%20with%20laptops%20and%20tablets%2C%20bright%20contemporary%20learning%20environment%20with%20orange%20lighting%20accents%2C%20collaborative%20AI%20training%20session%20with%20futuristic%20holographic%20interfaces%2C%20professional%20development%20scene%20in%20high-tech%20classroom%20setting&width=600&height=400&seq=service-002&orientation=landscape'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'DX・業務改善コンサルティング',
      description: 'AIとクラウドツールを組み合わせた業務フローの再設計。単なる導入支援に留まらず、組織の生産性を最大化します。',
      features: ['業務フロー分析', 'DX戦略立案', 'ツール統合', '効果測定'],
      image: 'https://readdy.ai/api/search-image?query=Business%20transformation%20consultant%20analyzing%20workflow%20diagrams%20on%20digital%20whiteboard%2C%20modern%20office%20with%20data%20visualization%20charts%20and%20graphs%2C%20professional%20team%20reviewing%20business%20process%20optimization%2C%20bright%20workspace%20with%20orange%20accent%20lighting%2C%20digital%20transformation%20strategy%20meeting%20with%20interactive%20displays%2C%20contemporary%20corporate%20consulting%20environment%20with%20technology%20integration&width=600&height=400&seq=service-003&orientation=landscape'
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-4">
            サービス内容
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Google WorkspaceとAIを活用した、包括的な業務変革支援サービスを提供します
          </p>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              <div className="lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top min-h-[300px]"
                />
              </div>

              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-white text-3xl`}></i>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <i className="ri-check-line text-orange-500 text-xl"></i>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-orange-500 text-white px-10 py-4 rounded-full hover:bg-orange-600 transition-all font-bold text-lg shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
          >
            サービスについて相談する
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
