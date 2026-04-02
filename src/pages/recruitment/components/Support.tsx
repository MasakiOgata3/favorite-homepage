export default function Support() {
  const supports = [
    {
      icon: 'ri-file-paper-line',
      title: '顧問先向け 提案用チラシ',
      description: '社長に見せるだけで提案できるAI研修の内容が載った営業チラシ（PDF）をプレゼント。',
      color: 'emerald'
    },
    {
      icon: 'ri-calendar-check-line',
      title: '助成金申請レクチャー',
      description: '人材開発支援助成金の計画届～支給申請までをサポートします。',
      color: 'teal'
    },
    {
      icon: 'ri-file-download-line',
      title: 'すぐに使える申請ひな形プレゼント',
      description: '実績のある申請書類のテンプレートを提供。書類作成の時間を大幅に短縮',
      color: 'cyan'
    }
  ];

  return (
    <section id="support" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full mb-4">
            充実のサポート体制
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            未経験でも安心。<br />
            <span className="text-emerald-600">直接フォローします。</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            個別相談にご参加いただいた先生には、すぐに実践できるよう以下の特典をご用意しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supports.map((support, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-100"
            >
              <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br from-${support.color}-500 to-${support.color}-600 rounded-2xl mb-6 shadow-lg`}>
                <i className={`${support.icon} text-4xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {support.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {support.description}
              </p>
            </div>
          ))}
        </div>

        {/* Instructor Profile */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 text-white shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-xl">
                <i className="ri-user-line text-6xl text-white"></i>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-3">講師：尾形（社会保険労務士）</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                助成金申請のプロフェッショナルとして、多くの企業の申請をサポート。AI研修と助成金を組み合わせた独自のスキームで、社労士と顧問先企業の成功を支援してきました。
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">助成金申請実績豊富</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">社労士サポート経験豊富</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">AI研修スキーム開発者</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Push */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-10 border-4 border-amber-400 text-center">
          <div className="mb-6">
            <i className="ri-lightbulb-flash-line text-6xl text-amber-500"></i>
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            顧問先に「AI研修を導入し、<br />
            業務効率化を進めましょう」と提案するだけです。
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            難しい説明は不要。シンプルで分かりやすいメリットを伝えるだけで、顧問先は喜んで導入を決めてくれます。
          </p>
        </div>
      </div>
    </section>
  );
}