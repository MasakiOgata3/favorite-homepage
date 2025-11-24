export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-4">
            会社概要
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-building-line text-orange-500 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-gray-500 mb-1">社名</h3>
                  <p className="text-xl font-bold text-gray-900">株式会社フェイバリット</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-line text-orange-500 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-gray-500 mb-1">代表者氏名</h3>
                  <p className="text-xl font-bold text-gray-900">尾形 雅基</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-orange-500 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-gray-500 mb-1">所在地</h3>
                  <p className="text-gray-900 leading-relaxed">
                    東京都新宿区西新宿3-3-13　西新宿水間ビル6階
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-orange-500 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-gray-500 mb-1">Mail</h3>
                  <p className="text-gray-900">
                    <a href="mailto:info@favorite.co.jp" className="hover:text-orange-500 transition-colors cursor-pointer">
                      info@favorite.co.jp
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-briefcase-line text-orange-500 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-gray-500 mb-1">事業内容</h3>
                  <p className="text-gray-900 leading-relaxed">
                    Google Workspace導入支援<br />
                    AI活用・定着化研修<br />
                    DX・業務改善コンサルティング
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">ブランド・パーソナリティ</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <i className="ri-check-line text-2xl"></i>
                <p className="text-lg"><strong>Professional & Free</strong> - プロフェッショナルでありながら、堅苦しくなく自由な発想を持つ</p>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-check-line text-2xl"></i>
                <p className="text-lg"><strong>Positive & Energetic</strong> - 常に前向きで、関わる人に活力を与える</p>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-check-line text-2xl"></i>
                <p className="text-lg"><strong>Sincere</strong> - 「お気に入り」の人生に対して真摯に向き合う</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
