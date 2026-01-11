export default function Implementation() {
  const steps = [
    {
      number: '01',
      title: 'お問い合わせ・ヒアリング',
      description: '現在の課題や導入目的をお聞かせください。貴社に最適なプランをご提案いたします。',
      icon: 'ri-questionnaire-line',
      duration: '1-2日'
    },
    {
      number: '02',
      title: 'プラン選定・お見積り',
      description: 'ユーザー数や必要な機能に応じて、最適なプランを選定。詳細なお見積りをご提示します。',
      icon: 'ri-file-list-3-line',
      duration: '2-3日'
    },
    {
      number: '03',
      title: 'アカウント設定・初期設定',
      description: 'ドメイン設定、ユーザーアカウント作成、セキュリティ設定など、初期設定を代行いたします。',
      icon: 'ri-settings-3-line',
      duration: '3-5日'
    },
    {
      number: '04',
      title: 'データ移行サポート',
      description: '既存のメールやファイルを安全に移行。業務への影響を最小限に抑えます。',
      icon: 'ri-database-2-line',
      duration: '5-10日'
    },
    {
      number: '05',
      title: '操作研修・トレーニング',
      description: '管理者向け、ユーザー向けの研修を実施。スムーズな運用開始をサポートします。',
      icon: 'ri-presentation-line',
      duration: '1-2日'
    },
    {
      number: '06',
      title: '運用開始・継続サポート',
      description: '運用開始後も、技術サポートやアップデート情報の提供など、継続的にサポートいたします。',
      icon: 'ri-customer-service-2-line',
      duration: '継続'
    }
  ];

  return (
    <section id="implementation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <strong>導入フロー</strong>は<span className="text-orange-600">シンプル</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            お問い合わせから運用開始まで、専門スタッフが丁寧にサポートいたします
          </p>
        </div>

        <div className="relative">
          {/* タイムライン */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                        <i className={`${step.icon} text-2xl text-white`}></i>
                      </div>
                      <div className={index % 2 === 0 ? 'lg:order-1 lg:text-right flex-1' : 'flex-1'}>
                        <div className="text-sm font-bold text-orange-600 mb-1">{step.duration}</div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* ステップ番号 */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl border-4 border-white">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* サポート体制 */}
        <div className="mt-24 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            <strong>充実のサポート体制</strong>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-md mb-4 mx-auto">
                <i className="ri-presentation-line text-3xl text-orange-600"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">オプション研修対応</h4>
              <p className="text-sm text-gray-600">必要に応じて追加研修が可能</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-md mb-4 mx-auto">
                <i className="ri-user-star-line text-3xl text-orange-600"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">専任担当者制</h4>
              <p className="text-sm text-gray-600">貴社専任の担当者が対応</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-md mb-4 mx-auto">
                <i className="ri-book-open-line text-3xl text-orange-600"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">充実のマニュアル</h4>
              <p className="text-sm text-gray-600">わかりやすい操作ガイド完備</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}