export default function RevenueSimulation() {
  const revenues = [
    {
      icon: 'ri-file-text-line',
      title: 'キャリアアップ助成金申請報酬',
      amount: '16万円',
      description: '通常の2倍の報酬',
      calculation: '（申請額80万円の20%）',
      color: 'emerald'
    },
    {
      icon: 'ri-file-list-line',
      title: '人材開発支援助成金申請報酬',
      amount: '6万円',
      description: '追加の申請報酬',
      calculation: '（申請額30万円の20%）',
      color: 'teal'
    },
    {
      icon: 'ri-hand-coin-line',
      title: '研修販売手数料',
      amount: '10万円',
      description: 'AI研修紹介による手数料',
      calculation: '',
      color: 'cyan'
    }
  ];

  return (
    <section id="revenue" className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full mb-4">
            収益シミュレーション
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            顧問先を喜ばせながら、<br />
            <span className="text-emerald-600">先生の報酬も最大化。</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            1社あたりの収益が、通常の4倍に。複数社に提案すれば、さらに大きな収益に。
          </p>
        </div>

        {/* Note about calculation */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-12 max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i className="ri-information-line text-xl text-amber-600"></i>
            </div>
            <div>
              <p className="text-slate-700 font-medium">
                <span className="font-bold text-amber-700">※ 申請手数料について：</span>助成金の申請手数料は20%で計算しています
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {revenues.map((revenue, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 flex items-center justify-center bg-${revenue.color}-100 rounded-xl mb-6`}>
                <i className={`${revenue.icon} text-3xl text-${revenue.color}-600`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {revenue.title}
              </h3>
              <div className={`text-4xl font-bold text-${revenue.color}-600 mb-2`}>
                {revenue.amount}
              </div>
              {revenue.calculation && (
                <p className="text-slate-500 text-sm mb-2">
                  {revenue.calculation}
                </p>
              )}
              <p className="text-slate-600 text-sm">
                {revenue.description}
              </p>
            </div>
          ))}
        </div>

        {/* Total Revenue */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-12 text-white text-center shadow-2xl mb-12">
          <div className="mb-6">
            <i className="ri-trophy-line text-6xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-4">1社あたりの合計報酬</h3>
          <div className="text-7xl font-bold mb-4">32万円</div>
          <div className="inline-block bg-white/20 rounded-full px-8 py-3 backdrop-blur-sm">
            <span className="text-xl font-bold">通常はキャリアアップ助成金40万円の20%で8万円のところ、その4倍の報酬！</span>
          </div>
        </div>

        {/* Multiple Clients Simulation */}
        <div className="bg-white rounded-2xl p-10 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            キャリアアップ助成金（正社員化コース）を複数人申請した場合のシミュレーション
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-lg text-slate-600 mb-2">3人申請した場合</div>
              <div className="text-4xl font-bold text-emerald-600 mb-1">96万円</div>
              <div className="text-sm text-slate-500">32万円 × 3人</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl border-4 border-emerald-500">
              <div className="text-lg text-slate-600 mb-2">5人申請した場合</div>
              <div className="text-4xl font-bold text-emerald-600 mb-1">160万円</div>
              <div className="text-sm text-slate-500">32万円 × 5人</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-lg text-slate-600 mb-2">10人申請した場合</div>
              <div className="text-4xl font-bold text-emerald-600 mb-1">320万円</div>
              <div className="text-sm text-slate-500">32万円 × 10人</div>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full flex-shrink-0">
              <i className="ri-check-line text-2xl text-emerald-600"></i>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">顧問先に喜ばれる</h4>
              <p className="text-slate-600 text-sm">企業の利益が増えるため、感謝されながら報酬を得られます</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full flex-shrink-0">
              <i className="ri-check-line text-2xl text-teal-600"></i>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">継続的な収益</h4>
              <p className="text-slate-600 text-sm">毎年複数社に提案できる、持続可能なビジネスモデル</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}