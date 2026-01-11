export default function Features() {
  const features = [
    {
      name: 'Gmail',
      icon: 'https://readdy.ai/api/search-image?query=Gmail%20logo%20icon%20in%20vibrant%20red%20and%20white%20colors%2C%20clean%20modern%20design%2C%20professional%20email%20application%20symbol%2C%20simple%20minimalist%20style%20with%20solid%20background%2C%20high%20quality%20digital%20illustration&width=200&height=200&seq=gmail-icon-001&orientation=squarish',
      description: 'ビジネス用メールアドレスで信頼性向上。強力なスパムフィルターとAI検索で、重要なメールを見逃しません。',
      highlights: ['独自ドメイン対応', 'AI搭載検索', '99.9%稼働率']
    },
    {
      name: 'Google Drive',
      icon: 'https://readdy.ai/api/search-image?query=Google%20Drive%20logo%20icon%20with%20colorful%20triangle%20design%20in%20blue%20yellow%20green%20colors%2C%20cloud%20storage%20symbol%2C%20modern%20clean%20style%2C%20professional%20digital%20illustration%20with%20solid%20background&width=200&height=200&seq=drive-icon-001&orientation=squarish',
      description: '安全なクラウドストレージで、あらゆるファイルを一元管理。どこからでもアクセスでき、共有も簡単です。',
      highlights: ['大容量ストレージ', 'リアルタイム同期', '高度な検索機能']
    },
    {
      name: 'Google Meet',
      icon: 'https://readdy.ai/api/search-image?query=Google%20Meet%20logo%20icon%20with%20camera%20symbol%20in%20vibrant%20colors%2C%20video%20conferencing%20application%20design%2C%20modern%20professional%20style%2C%20clean%20digital%20illustration%20with%20solid%20background&width=200&height=200&seq=meet-icon-001&orientation=squarish',
      description: '高品質なビデオ会議で、リモートワークも快適に。最大500名まで参加可能で、大規模なウェビナーにも対応。',
      highlights: ['HD画質対応', 'ノイズキャンセリング', '録画機能']
    },
    {
      name: 'Google カレンダー',
      icon: 'https://readdy.ai/api/search-image?query=Google%20Calendar%20logo%20icon%20with%20date%20number%20design%20in%20blue%20and%20white%20colors%2C%20schedule%20management%20symbol%2C%20clean%20modern%20professional%20style%2C%20digital%20illustration%20with%20solid%20background&width=200&height=200&seq=calendar-icon-001&orientation=squarish',
      description: 'チームのスケジュールを一元管理。会議室予約やリマインダー機能で、時間を有効活用できます。',
      highlights: ['スマート提案', '会議室管理', 'タイムゾーン対応']
    },
    {
      name: 'Google ドキュメント',
      icon: 'https://readdy.ai/api/search-image?query=Google%20Docs%20logo%20icon%20with%20document%20paper%20design%20in%20blue%20colors%2C%20word%20processing%20application%20symbol%2C%20modern%20clean%20professional%20style%2C%20digital%20illustration%20with%20solid%20background&width=200&height=200&seq=docs-icon-001&orientation=squarish',
      description: 'リアルタイム共同編集で、チームでの文書作成が劇的に効率化。バージョン管理も自動で安心です。',
      highlights: ['同時編集', '音声入力', 'テンプレート豊富']
    },
    {
      name: 'Google スプレッドシート',
      icon: 'https://readdy.ai/api/search-image?query=Google%20Sheets%20logo%20icon%20with%20spreadsheet%20grid%20design%20in%20green%20colors%2C%20data%20analysis%20application%20symbol%2C%20modern%20professional%20style%2C%20digital%20illustration%20with%20solid%20background&width=200&height=200&seq=sheets-icon-001&orientation=squarish',
      description: '強力なデータ分析ツールで、ビジネスインサイトを獲得。関数やピボットテーブルで複雑な分析も簡単に。',
      highlights: ['高度な関数', 'データ可視化', 'API連携']
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <strong>充実の機能</strong>で業務を<span className="text-orange-600">完全サポート</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            日常業務に必要なすべてのツールが、シームレスに統合されています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <img 
                  src={feature.icon} 
                  alt={feature.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{feature.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <div className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600 text-lg"></i>
                    <span className="text-sm text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Google Workspace アプリ一覧 */}
        <div className="mt-20 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            その他にも<strong>多彩なアプリ</strong>をご利用いただけます
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md mb-2 mx-auto">
                <i className="ri-slideshow-line text-3xl text-yellow-600"></i>
              </div>
              <p className="text-sm font-medium text-gray-700">スライド</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md mb-2 mx-auto">
                <i className="ri-file-list-3-line text-3xl text-purple-600"></i>
              </div>
              <p className="text-sm font-medium text-gray-700">フォーム</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md mb-2 mx-auto">
                <i className="ri-chat-3-line text-3xl text-green-600"></i>
              </div>
              <p className="text-sm font-medium text-gray-700">Chat</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md mb-2 mx-auto">
                <i className="ri-pages-line text-3xl text-blue-600"></i>
              </div>
              <p className="text-sm font-medium text-gray-700">Sites</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md mb-2 mx-auto">
                <i className="ri-group-line text-3xl text-red-600"></i>
              </div>
              <p className="text-sm font-medium text-gray-700">Groups</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md mb-2 mx-auto">
                <i className="ri-admin-line text-3xl text-gray-700"></i>
              </div>
              <p className="text-sm font-medium text-gray-700">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}