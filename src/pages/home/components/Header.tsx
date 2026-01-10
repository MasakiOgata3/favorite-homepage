
import { motion } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
      animate={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
        boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.05)' : '0 0 0 rgba(0, 0, 0, 0)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-[1600px] mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <img
              src="https://static.readdy.ai/image/d6cb1f8c632ccff226df483466d8b26e/3bd55c226eb410b1b23141c71acf30d2.png"
              alt="株式会社フェイバリット"
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('mission')}
              className="text-navy hover:text-accent transition-colors duration-300 font-medium whitespace-nowrap cursor-pointer"
            >
              ミッション
            </button>
            <button
              onClick={() => scrollToSection('service')}
              className="text-navy hover:text-accent transition-colors duration-300 font-medium whitespace-nowrap cursor-pointer"
            >
              研修プログラム
            </button>
            <button
              onClick={() => scrollToSection('environment')}
              className="text-navy hover:text-accent transition-colors duration-300 font-medium whitespace-nowrap cursor-pointer"
            >
              導入支援
            </button>
            <button
              onClick={() => scrollToSection('company')}
              className="text-navy hover:text-accent transition-colors duration-300 font-medium whitespace-nowrap cursor-pointer"
            >
              会社概要
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-navy hover:text-accent transition-colors duration-300 font-medium whitespace-nowrap cursor-pointer"
            >
              お問い合わせ
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden lg:flex items-center space-x-2 bg-navy text-white px-6 py-3 rounded-full hover:bg-navy-light transition-all duration-300 font-medium whitespace-nowrap cursor-pointer"
          >
            <span>資料請求</span>
            <i className="ri-arrow-right-line"></i>
          </button>

          <button className="lg:hidden text-navy text-2xl cursor-pointer">
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
