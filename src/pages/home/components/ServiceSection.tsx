
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function ServiceSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    '合計12.5時間以上の充実した学習量',
    '動画講義＋理解度確認テストによる定着管理',
    '基礎から応用、リスク管理まで網羅した実務直結型',
  ];

  return (
    <section id="service" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20e-learning%20platform%20interface%20on%20laptop%20screen%20showing%20AI%20training%20course%20dashboard%20with%20progress%20indicators%20and%20video%20lessons%2C%20clean%20UI%20design%2C%20professional%20corporate%20learning%20management%20system%2C%20bright%20workspace%20setting%2C%20high%20quality%20digital%20education%20technology&width=800&height=900&seq=elearning-platform-ui&orientation=portrait"
                alt="e-learningプラットフォーム"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              MAIN SERVICE
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-navy mb-6 leading-tight">
              実践型AI活用・<br />定着化研修プログラム
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              全社員が生成AIを安全かつ効果的に業務活用するための、体系化された教育カリキュラムを提供します。
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-lg"></i>
                  </div>
                  <p className="text-navy font-medium text-lg pt-1">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
