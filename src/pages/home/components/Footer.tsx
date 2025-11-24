
export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img 
              src="https://static.readdy.ai/image/d6cb1f8c632ccff226df483466d8b26e/500a62f7521f04e00190488f7fdd6633.png" 
              alt="株式会社フェイバリット" 
              className="h-20 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              Make Work Your "Favorite".<br />
              あなたの仕事を「お気に入り」に。
            </p>
            <p className="text-gray-500 text-sm">
              Google WorkspaceとAIの力で、<br />
              あなたのビジネスを次のステージへ。
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('mission')} className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                  私たちの想い
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                  サービス
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                  会社概要
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                  お問い合わせ
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">サービス</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Google Workspace導入支援</li>
              <li className="text-gray-400 text-sm">AI活用・定着化研修</li>
              <li className="text-gray-400 text-sm">DX・業務改善コンサルティング</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 株式会社フェイバリット. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            target="_blank" 
            rel="nofollow noopener noreferrer" 
            className="text-gray-500 hover:text-orange-500 transition-colors text-sm cursor-pointer"
          >
            Powered by Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}
