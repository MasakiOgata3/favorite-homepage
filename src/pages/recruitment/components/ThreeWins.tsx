export default function ThreeWins() {
  const wins = [
    {
      icon: 'ri-user-star-line',
      title: '社労士の先生',
      benefit: '報酬の最大化',
      description: '申請1名あたりの報酬が3倍（約24万円）にアップし、顧問先満足度も向上。',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: 'ri-building-line',
      title: '顧問先企業',
      benefit: '手残り24万円増',
      description: '研修費を払っても受給額が跳ねるため、手残りが拡大。実質無料以上でAI人材を育成。',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: 'ri-team-line',
      title: '従業員',
      benefit: 'AIスキルの習得',
      description: '業務に直結するAI活用術を学び、市場価値が向上。キャリアアップの機会を提供。',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="three-wins" className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full mb-4">
            三方よしの仕組み
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            全員が得をする、<br />
            <span className="text-emerald-600">Win-Win-Winの提案</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            社労士、顧問先、従業員。関わる全ての人にメリットがある、理想的なスキームです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wins.map((win, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${win.color} rounded-2xl mb-6 mx-auto`}>
                <i className={`${win.icon} text-4xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                {win.title}
              </h3>
              <div className={`text-3xl font-bold bg-gradient-to-r ${win.color} bg-clip-text text-transparent mb-4 text-center`}>
                {win.benefit}
              </div>
              <p className="text-slate-600 leading-relaxed text-center">
                {win.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <i className="ri-check-double-line text-3xl text-emerald-500"></i>
                <span className="text-lg font-bold text-slate-900">誰も損をしない</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-check-double-line text-3xl text-emerald-500"></i>
                <span className="text-lg font-bold text-slate-900">全員が喜ぶ</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-check-double-line text-3xl text-emerald-500"></i>
                <span className="text-lg font-bold text-slate-900">持続可能</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}