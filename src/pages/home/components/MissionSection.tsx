
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function MissionSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="mission" ref={ref} className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-accent text-sm font-medium tracking-wider mb-6">
            CORPORATE PHILOSOPHY
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl lg:text-7xl font-black text-navy mb-12 font-serif leading-tight"
        >
          Make Work Your<br />
          <span className="text-accent">"Favorite"</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg lg:text-xl text-gray-600 leading-loose max-w-3xl mx-auto"
        >
          日本企業の競争力低下が叫ばれる今、必要なのはツールの導入ではなく<strong className="text-navy font-bold">「人のアップデート」</strong>です。私たちは企業向けのAI研修とGoogle Workspaceを活用し、働く人が創造的な業務に集中できる社会を実現します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="w-3/5 h-px bg-gray-200 mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
}
