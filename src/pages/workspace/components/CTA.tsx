interface CTAProps {
  onContactClick: () => void;
}

export default function CTA({ onContactClick }: CTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          今すぐ始めよう、<br />
          <span className="text-yellow-400">クラウドで働く新時代</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Google Workspace で、チームの生産性を最大化しませんか？<br />
          まずは無料相談で、貴社に最適なプランをご提案いたします。
        </p>

        <div className="flex justify-center mb-12">
          <button
            onClick={onContactClick}
            className="px-20 py-6 bg-yellow-400 text-gray-900 text-xl font-bold rounded-xl hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer"
          >
            無料で相談する
          </button>
        </div>

        {/* 特典情報 */}
        <div className="flex justify-center mt-16">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-md">
            <i className="ri-time-line text-5xl text-yellow-400 mb-4"></i>
            <h4 className="text-2xl font-bold text-white mb-3">最短3営業日で開始</h4>
            <p className="text-base text-gray-300">スピーディーな導入をお約束</p>
          </div>
        </div>

        {/* よくある質問へのリンク */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h4 className="text-2xl font-bold text-white mb-6">よくあるご質問</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h5 className="font-bold text-white mb-2">Q. 既存のメールアドレスは使えますか？</h5>
              <p className="text-sm text-gray-300">A. はい、独自ドメインのメールアドレスをそのままご利用いただけます。</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2">Q. データ移行は難しいですか？</h5>
              <p className="text-sm text-gray-300">A. 専門スタッフが移行作業を代行いたしますので、ご安心ください。</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2">Q. ユーザー数の変更は可能ですか？</h5>
              <p className="text-sm text-gray-300">A. はい、いつでも柔軟にユーザー数を増減できます。</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2">Q. セキュリティは大丈夫ですか？</h5>
              <p className="text-sm text-gray-300">A. Googleの企業レベルのセキュリティで、データを安全に保護します。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}