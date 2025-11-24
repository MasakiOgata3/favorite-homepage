export function Mission() {
  const values = [
    {
      icon: 'ri-user-star-line',
      title: 'Ownership',
      subtitle: 'オーナーシップ',
      description: '自分の人生と仕事のオーナーであれ。誰かのせいにするのではなく、自分の意志でハンドルを握ろう。',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: 'ri-heart-line',
      title: "Giver's Mind",
      subtitle: 'ギバーズ・マインド',
      description: '相手の人生にプラスの影響を与えよう。自分自身の自由と同じくらい、他者の喜びを大切にしよう。',
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Respect Freedom',
      subtitle: 'リスペクト・フリーダム',
      description: '互いの自由と個性を尊重しよう。多様な「お気に入り」を認め合うことから、新しい価値は生まれる。',
      color: 'from-orange-600 to-orange-800'
    }
  ];

  return (
    <section id="mission" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Mission・Vision・Values</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-4">
            私たちの想い
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <i className="ri-flag-line text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mission（使命）</h3>
              </div>
              <p className="text-3xl font-bold text-orange-500 leading-relaxed">
                Make Work Your "Favorite".
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                仕事をあなたの「お気に入り」に。
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <i className="ri-eye-line text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vision（目指す未来）</h3>
              </div>
              <p className="text-3xl font-bold text-orange-500 leading-relaxed">
                The Best Work Platform.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                「お気に入り」の仕事を創るための、<br />
                最高のパートナーになる。
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-12 shadow-xl">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <i className="ri-star-fill text-orange-500 text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">ブランド・ステートメント</h4>
                    <p className="text-gray-700 leading-relaxed">
                      株式会社フェイバリットという社名には、私たちの揺るぎない願いが込められています。それは、お客様、従業員、そして私たちに関わるすべての人々が、何にも縛られることなく、自由に人生を謳歌してほしいという想いです。
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed pl-20">
                  ただ毎日を過ごすのではなく、心から「自分の人生がお気に入りだ」と言える生き方を。私たちは、そのための自由と選択肢を提供する、最高のライフ・プラットフォームであり続けます。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Values</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-4">
            行動指針
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            私たちが大切にする3つの価値観
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`${value.icon} text-white text-4xl`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              
              <p className="text-orange-500 font-bold text-lg mb-4">
                {value.subtitle}
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}