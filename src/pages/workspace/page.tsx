import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Implementation from './components/Implementation';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';

export default function Home() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    // ページ読み込み時に一番上にスクロール
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img
              src="https://static.readdy.ai/image/d6cb1f8c632ccff226df483466d8b26e/3bd55c226eb410b1b23141c71acf30d2.png"
              alt="株式会社フェイバリット"
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer">メリット</a>
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer">機能紹介</a>
            <a href="#usecases" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer">活用例</a>
            <a href="#implementation" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer">導入フロー</a>
            <button
              onClick={() => setShowContactForm(true)}
              className="px-6 py-2.5 bg-accent text-white text-sm font-bold rounded-md hover:bg-accent-dark transition-colors whitespace-nowrap cursor-pointer"
            >
              お問い合わせ
            </button>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション */}
      <Hero onContactClick={() => setShowContactForm(true)} />

      {/* メリットセクション */}
      <Benefits />

      {/* 機能紹介セクション */}
      <Features />

      {/* 活用例セクション */}
      <UseCases />

      {/* 導入フローセクション */}
      <Implementation />

      {/* CTAセクション */}
      <CTA onContactClick={() => setShowContactForm(true)} />

      {/* フッター */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <img
                src="https://static.readdy.ai/image/d6cb1f8c632ccff226df483466d8b26e/3bd55c226eb410b1b23141c71acf30d2.png"
                alt="株式会社フェイバリット"
                className="h-8 w-auto"
              />
            </div>
            <div className="text-sm text-center md:text-right">
              <p>&copy; 2025 株式会社フェイバリット. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* お問い合わせフォームモーダル */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
}