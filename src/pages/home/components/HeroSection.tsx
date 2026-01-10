import { motion } from 'framer-motion';

export default function HeroSection() {
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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Japanese%20business%20professionals%20in%20modern%20Tokyo%20office%20attending%20AI%20technology%20training%20session%2C%20diverse%20Japanese%20team%20members%20focused%20on%20learning%20with%20laptops%2C%20bright%20natural%20lighting%20through%20large%20windows%2C%20clean%20minimalist%20Japanese%20corporate%20workspace%2C%20collaborative%20atmosphere%2C%20professional%20business%20education%20environment%20in%20Japan%2C%20high%20quality%20corporate%20photography&width=1920&height=1080&seq=hero-japanese-office-training&orientation=landscape"
          alt="AI研修風景"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              AI人材育成のリーディングカンパニー
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-7xl xl:text-8xl font-black text-navy leading-tight mb-6 font-serif"
          >
            <span className="block lg:inline">
              AIを入れるな<span className="hidden lg:inline">。</span>
            </span>
            <br className="lg:hidden" />
            <span className="block lg:inline lg:mt-0" style={{ marginTop: '-0.3em' }}>AIを使える</span>
            <br className="lg:hidden" />
            <span className="block lg:inline lg:mt-0" style={{ marginTop: '-0.8em' }}>
              <span className="text-accent">「人」</span>を育てよ<span className="hidden lg:inline">。</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl"
          >
            ツール導入はゴールではありません。<br />
            実践型AI研修とGoogle Workspaceで、全社員を「自ら考え、動くDX人材」へ変革します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection('service')}
              className="flex items-center space-x-2 bg-navy text-white px-8 py-4 rounded-full hover:bg-navy-light transition-all duration-300 font-medium text-lg whitespace-nowrap cursor-pointer"
            >
              <span>研修プログラムを見る</span>
              <i className="ri-arrow-right-line"></i>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 bg-white text-navy px-8 py-4 rounded-full border-2 border-navy hover:bg-navy hover:text-white transition-all duration-300 font-medium text-lg whitespace-nowrap cursor-pointer"
            >
              <span>無料相談を予約</span>
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-navy/50 text-3xl cursor-pointer"
          onClick={() => scrollToSection('mission')}
        >
          <i className="ri-arrow-down-line"></i>
        </motion.div>
      </motion.div>
    </section>
  );
}
