import { useState } from 'react';
import Hero from './components/Hero';
import ThreeWins from './components/ThreeWins';
import ClientBenefits from './components/ClientBenefits';
import RevenueSimulation from './components/RevenueSimulation';
import Support from './components/Support';
import ClosingCTA from './components/ClosingCTA';

export default function RecruitmentPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const scrollToRegister = () => {
    const element = document.getElementById('register-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="https://static.readdy.ai/image/d6cb1f8c632ccff226df483466d8b26e/500a62f7521f04e00190488f7fdd6633.png"
                  alt="Favorite ロゴ"
                  className="h-12 w-auto cursor-pointer"
                />
              </a>
            </div>
            <button
              onClick={scrollToRegister}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              無料パートナー登録
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Hero onCTAClick={scrollToRegister} />
      <ThreeWins />
      <ClientBenefits />
      <RevenueSimulation />
      <Support />
      <ClosingCTA />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="https://static.readdy.ai/image/d6cb1f8c632ccff226df483466d8b26e/500a62f7521f04e00190488f7fdd6633.png"
                alt="Favorite ロゴ"
                className="h-10 w-auto mb-4"
              />
              <p className="text-slate-300 text-sm">
                社労士の先生方と顧問先企業の成長を支援する、AI研修×助成金活用スキーム
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#three-wins" className="hover:text-emerald-400 transition-colors cursor-pointer">三方よしの仕組み</a></li>
                <li><a href="#client-benefits" className="hover:text-emerald-400 transition-colors cursor-pointer">顧問先メリット</a></li>
                <li><a href="#revenue" className="hover:text-emerald-400 transition-colors cursor-pointer">収益シミュレーション</a></li>
                <li><a href="#support" className="hover:text-emerald-400 transition-colors cursor-pointer">サポート体制</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">会社情報</h4>
              <div className="text-sm text-slate-300 space-y-2">
                <p className="font-semibold">株式会社フェイバリット</p>
                <p>〒160-0023<br />東京都新宿区西新宿3-3-13<br />西新宿水間ビル6階</p>
                <p>
                  <a href="mailto:ogata@favorite.co.jp" className="hover:text-emerald-400 transition-colors cursor-pointer">
                    ogata@favorite.co.jp
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2025 株式会社フェイバリット. All rights reserved. | <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors cursor-pointer">Powered by Readdy</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
