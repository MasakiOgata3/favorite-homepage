
export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white py-20">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="https://static.readdy.ai/image/d6cb1f8c632ccff226df483466d8b26e/3bd55c226eb410b1b23141c71acf30d2.png"
              alt="株式会社フェイバリット"
              className="h-10 w-auto mb-6"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-white/70 text-sm leading-relaxed">
              株式会社フェイバリット<br />
              〒160-0023<br />
              東京都新宿区西新宿3-3-13<br />
              西新宿水間ビル6階
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">サービス</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('service')}
                  className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  AI研修プログラム
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('curriculum')}
                  className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  カリキュラム詳細
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('environment')}
                  className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Google Workspace導入支援
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  お問い合わせ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">会社情報</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <button
                  onClick={() => scrollToSection('mission')}
                  className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  ミッション
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('company')}
                  className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  会社概要
                </button>
              </li>
              <li>
                <a
                  href="mailto:info@favorite.co.jp"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300 cursor-pointer"
                aria-label="Twitter"
              >
                <i className="ri-twitter-x-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2025 Favorite Co., Ltd. All rights reserved.
            </p>
            <a
              href="https://readdy.ai/?ref=logo"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-white/50 text-sm hover:text-white transition-colors duration-300"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
