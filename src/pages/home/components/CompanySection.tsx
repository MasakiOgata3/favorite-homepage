import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function CompanySection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const companyInfo = [
    { label: '社名', value: '株式会社フェイバリット' },
    { label: '代表取締役', value: '尾形 雅基' },
    { label: '所在地', value: '〒160-0023 東京都新宿区西新宿3-3-13 西新宿水間ビル6階' },
    { label: '連絡先', value: 'info@favorite.co.jp' },
    { label: '事業内容', value: ['企業向けAI人材育成研修事業', 'クラウド導入支援事業', 'DX・業務改善コンサルティング'] },
  ];

  return (
    <section id="company" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-accent text-sm font-medium tracking-wider mb-6">
            COMPANY PROFILE
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-navy">
            会社情報
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-lg p-12"
        >
          <div className="space-y-8">
            {companyInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/3">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                      {info.label}
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    {Array.isArray(info.value) ? (
                      <ul className="space-y-2">
                        {info.value.map((item, idx) => (
                          <li key={idx} className="text-lg text-navy font-medium">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg text-navy font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <img
            src="https://static.readdy.ai/image/d6cb1f8c632ccff226df483466d8b26e/3bd55c226eb410b1b23141c71acf30d2.png"
            alt="株式会社フェイバリット"
            className="h-12 w-auto mx-auto opacity-30 grayscale"
          />
        </motion.div>
      </div>
    </section>
  );
}
