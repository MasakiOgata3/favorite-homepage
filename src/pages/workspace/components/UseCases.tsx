export default function UseCases() {
  const useCases = [
    {
      title: 'リモートワークの最適化',
      image: 'https://readdy.ai/api/search-image?query=Professional%20remote%20worker%20using%20laptop%20at%20modern%20home%20office%20setup%2C%20video%20conference%20call%20on%20screen%2C%20comfortable%20workspace%20with%20plants%20and%20natural%20lighting%2C%20productive%20atmosphere%2C%20clean%20minimalist%20design%2C%20bright%20and%20airy%20environment&width=800&height=600&seq=usecase-remote-001&orientation=landscape',
      description: '在宅勤務でも、オフィスと同じ生産性を実現。ビデオ会議、ファイル共有、チャットがシームレスに連携し、チームの一体感を維持します。',
      benefits: ['場所を選ばない働き方', 'コミュニケーション円滑化', 'ワークライフバランス向上']
    },
    {
      title: 'プロジェクト管理の効率化',
      image: 'https://readdy.ai/api/search-image?query=Young%20Japanese%20business%20professionals%20collaborating%20in%20stylish%20modern%20office%20with%20natural%20wood%20and%20minimalist%20design%2C%20team%20of%20Japanese%20men%20and%20women%20working%20together%20on%20project%20with%20laptops%20and%20documents%20on%20large%20table%2C%20bright%20contemporary%20workspace%20with%20large%20windows%20and%20natural%20lighting%2C%20clean%20organized%20professional%20environment%2C%20full%20body%20shots%20visible%2C%20warm%20inviting%20atmosphere%20with%20plants%20and%20modern%20furniture&width=800&height=600&seq=usecase-project-japanese-stylish-003&orientation=landscape',
      description: 'タスク管理、進捗共有、ドキュメント作成を一元化。プロジェクトメンバー全員が最新情報にアクセスでき、スムーズな進行を実現します。',
      benefits: ['リアルタイム進捗管理', 'タスクの可視化', 'チーム連携強化']
    },
    {
      title: '営業活動の加速',
      image: 'https://readdy.ai/api/search-image?query=Japanese%20sales%20professional%20presenting%20business%20proposal%20to%20client%20in%20modern%20meeting%20room%2C%20young%20Japanese%20businessperson%20showing%20presentation%20on%20tablet%20or%20laptop%2C%20professional%20business%20meeting%20setting%20in%20contemporary%20Japanese%20office%2C%20confident%20atmosphere%20with%20natural%20lighting%2C%20clean%20minimalist%20interior%20design%2C%20full%20body%20visible%20in%20professional%20attire&width=800&height=600&seq=usecase-sales-japanese-002&orientation=landscape',
      description: '顧客情報の共有、提案資料の共同作成、商談スケジュール管理を効率化。営業チーム全体のパフォーマンスを向上させます。',
      benefits: ['顧客情報の一元管理', '提案資料の迅速作成', 'スケジュール最適化']
    },
    {
      title: 'データ分析とレポート作成',
      image: 'https://readdy.ai/api/search-image?query=Young%20Japanese%20business%20professional%20woman%20analyzing%20data%20charts%20and%20graphs%20on%20large%20computer%20monitors%20in%20modern%20bright%20office%2C%20full%20body%20visible%20in%20frame%2C%20professional%20attire%2C%20focused%20expression%2C%20contemporary%20workspace%20with%20natural%20lighting%2C%20clean%20organized%20desk%20setup%2C%20data%20visualization%20displays%2C%20business%20analytics%20environment&width=800&height=600&seq=usecase-data-japanese-002&orientation=landscape',
      description: 'スプレッドシートの高度な分析機能で、ビジネスデータから価値あるインサイトを抽出。レポート作成も自動化できます。',
      benefits: ['高度なデータ分析', '自動レポート生成', '意思決定の迅速化']
    }
  ];

  return (
    <section id="usecases" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <strong>あらゆる業務シーン</strong>で<span className="text-orange-600">活躍</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            業種や規模を問わず、多様なビジネスシーンでGoogle Workspaceが力を発揮します
          </p>
        </div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{useCase.title}</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{useCase.description}</p>
                <div className="space-y-4">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 flex-shrink-0 mt-1">
                        <i className="ri-check-line text-orange-600 text-sm"></i>
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 導入企業の声 */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            <strong>導入企業</strong>の声
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: '製造業A社',
                comment: '工場と本社間のコミュニケーションが劇的に改善。リアルタイムでの情報共有により、生産効率が30%向上しました。',
                person: '生産管理部長'
              },
              {
                company: 'IT企業B社',
                comment: 'リモートワーク導入がスムーズに実現。全国のエンジニアが協力して開発できる環境が整いました。',
                person: '開発マネージャー'
              },
              {
                company: 'コンサルC社',
                comment: 'クライアントとの資料共有が簡単になり、提案のスピードが格段に上がりました。セキュリティも安心です。',
                person: 'パートナー'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.company}</p>
                  <p className="text-sm text-gray-600">{testimonial.person}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}