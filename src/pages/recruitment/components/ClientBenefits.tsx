export default function ClientBenefits() {
  return (
    <section id="client-benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full mb-4">
            最重要ポイント
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            なぜ、研修費40万円を払っても、<br />
            <span className="text-emerald-600">会社の手残りが増えるのか？</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            「社長、お金を出してAI研修を行うと、逆にお金が増えて戻ってきます。<br />
            そのカラクリをご説明します。」
          </p>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Pattern A */}
          <div className="bg-slate-100 rounded-2xl p-8 border-4 border-slate-300">
            <div className="text-center mb-6">
              <span className="inline-block px-6 py-2 bg-slate-600 text-white text-sm font-bold rounded-full mb-4">
                パターンA
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                通常のキャリアアップ申請
              </h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-slate-700">受給額</span>
                <div className="text-right">
                  <div className="text-4xl font-bold text-slate-900">40万円</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-600 text-white rounded-xl p-6 text-center">
              <div className="text-sm mb-2">会社の手残り</div>
              <div className="text-5xl font-bold">40万円</div>
            </div>
          </div>

          {/* Pattern B */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-4 border-emerald-500 relative">
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
              おすすめ！
            </div>
            
            <div className="text-center mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold rounded-full mb-4">
                パターンB
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                当社のAI研修スキーム活用
              </h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-emerald-500 text-white rounded-full font-bold">1</div>
                    <span className="text-base font-medium text-slate-700">キャリアアップ助成金</span>
                  </div>
                  <div className="text-3xl font-bold text-emerald-600">80万円</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-teal-500 text-white rounded-full font-bold">2</div>
                    <span className="text-base font-medium text-slate-700">人材開発支援助成金</span>
                  </div>
                  <div className="text-3xl font-bold text-teal-600">30万円</div>
                </div>
              </div>

              <div className="bg-emerald-500 text-white rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold">助成金受給総額</span>
                  <div className="text-4xl font-bold">110万円</div>
                </div>
              </div>

              <div className="flex items-center justify-center py-2">
                <i className="ri-subtract-line text-3xl text-slate-400"></i>
              </div>

              <div className="bg-white rounded-xl p-4 border-2 border-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-slate-700">研修費用</span>
                  <div className="text-2xl font-bold text-slate-900">40万円</div>
                </div>
              </div>

              <div className="flex items-center justify-center py-2">
                <i className="ri-arrow-down-line text-3xl text-emerald-500"></i>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl p-6 text-center shadow-xl">
              <div className="text-sm mb-2">会社の手残り</div>
              <div className="text-6xl font-bold mb-2">70万円</div>
              <div className="text-sm opacity-90">110万円 - 40万円</div>
            </div>
          </div>
        </div>

        {/* Impact Comparison */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12 border-4 border-amber-400 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">結論</h3>
            <div className="flex items-center justify-center gap-8 flex-wrap mb-8">
              <div className="text-center">
                <div className="text-lg text-slate-600 mb-2">通常申請</div>
                <div className="text-5xl font-bold text-slate-700">40万円</div>
              </div>
              <div className="text-5xl font-bold text-amber-500">VS</div>
              <div className="text-center">
                <div className="text-lg text-slate-600 mb-2">本スキーム</div>
                <div className="text-5xl font-bold text-emerald-600">70万円</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 inline-block shadow-lg">
              <div className="text-2xl font-bold text-slate-900 mb-2">
                AI研修を導入した方が、会社に残るお金が
              </div>
              <div className="text-6xl font-bold text-emerald-600">
                30万円も多い！
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-4">
              <i className="ri-money-dollar-circle-line text-3xl text-emerald-600"></i>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">利益アップ</h4>
            <p className="text-emerald-600 font-bold text-2xl mb-2">+30万円</p>
            <p className="text-slate-600 text-sm">通常申請より手残りが増える</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mx-auto mb-4">
              <i className="ri-robot-line text-3xl text-teal-600"></i>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">AI人材育成</h4>
            <p className="text-teal-600 font-bold text-2xl mb-2">実質無料以下</p>
            <p className="text-slate-600 text-sm">最新技術を社員に習得させられる</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cyan-100 rounded-full mx-auto mb-4">
              <i className="ri-user-add-line text-3xl text-cyan-600"></i>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">採用力強化</h4>
            <p className="text-cyan-600 font-bold text-2xl mb-2">教育制度充実</p>
            <p className="text-slate-600 text-sm">優秀な人材を惹きつける</p>
          </div>
        </div>
      </div>
    </section>
  );
}