import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useNavigate } from 'react-router-dom';

export default function EnvironmentSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const navigate = useNavigate();

  const features = [
    { icon: 'ri-sparkling-2-fill', label: 'Gemini標準搭載' },
    { icon: 'ri-shield-check-line', label: 'セキュア環境' },
    { icon: 'ri-links-line', label: '統合ワークフロー' },
  ];

  return (
    <section id="environment" ref={ref} className="py-24 bg-gradient-to-br from-navy via-navy-dark to-navy-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              ENVIRONMENT SUPPORT
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Google Workspace<br />導入支援
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-10">
              研修の効果を最大化するためには、セキュアで統合された環境が不可欠です。AI（Gemini）が標準搭載され、中小企業でも導入しやすいGoogle Workspaceの環境構築をセットで提供します。
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <i className={`${feature.icon} text-white text-4xl`}></i>
                  </div>
                  <p className="text-white text-sm font-medium">{feature.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => navigate('/workspace')}
              className="flex items-center space-x-2 bg-white text-navy px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium whitespace-nowrap cursor-pointer"
            >
              <span>詳細はこちら</span>
              <i className="ri-arrow-right-line"></i>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=Google%20Workspace%20interface%20collage%20showing%20Gmail%2C%20Google%20Drive%2C%20Calendar%20and%20Gemini%20AI%20integration%20on%20modern%20laptop%20screen%2C%20clean%20professional%20workspace%2C%20bright%20minimalist%20office%20environment%2C%20collaborative%20cloud%20tools%20dashboard%2C%20high%20quality%20corporate%20technology%20photography&width=800&height=900&seq=google-workspace-interface&orientation=portrait"
                alt="Google Workspace"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
