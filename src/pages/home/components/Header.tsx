import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/d6cb1f8c632ccff226df483466d8b26e/500a62f7521f04e00190488f7fdd6633.png" 
              alt="株式会社フェイバリット" 
              className="h-14 w-auto"
            />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-500 font-medium transition-colors whitespace-nowrap cursor-pointer">
              サービス
            </button>
            <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-orange-500 font-medium transition-colors whitespace-nowrap cursor-pointer">
              私たちの想い
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-500 font-medium transition-colors whitespace-nowrap cursor-pointer">
              会社概要
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-orange-500 text-white px-6 py-2.5 rounded-full hover:bg-orange-600 transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
