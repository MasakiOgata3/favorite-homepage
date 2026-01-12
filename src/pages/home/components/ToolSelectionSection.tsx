
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function ToolSelectionSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const reasons = [
    {
      number: '01',
      icon: 'ri-shield-check-line',
      title: 'セキュリティ',
      subtitle: '学習されない安心感',
      description: '「入力した情報がAIに学習され、社外に漏れるのでは？」という経営者の不安を払拭します。Google Workspaceの有料版環境なら、入力データはAIの学習に一切利用されません。情報を守るための強固な「檻」の中で、社員に安心してAIを使わせることができます。',
      color: 'from-green-500 to-green-600'
    },
    {
      number: '02',
      icon: 'ri-mail-line',
      title: 'ワークフロー統合',
      subtitle: 'コピペ不要の業務革新',
      description: 'ChatGPTなどの別ツールを開き、コピペしてメールに貼り付ける...この「一手間」が定着を阻みます。Google Workspaceなら、いつものGmailやドキュメントの中に「AIボタン」があります。アプリを切り替えることなく、息をするようにAIを使う。これが定着への最短ルートです。',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '03',
      icon: 'ri-folder-line',
      title: '自社データ活用',
      subtitle: 'RAGの民主化',
      description: '「ウチの就業規則ではどうなってる？」といった質問に答えさせるには、自社データの参照が必須です。Google Geminiなら、Googleドライブ内のマニュアルや過去の提案書を「@メンション」一つで呼び出し、AIに参照させることができます。面倒な設定なしで、自社専用AIのような使い勝手が実現します。',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="tool-selection" ref={ref} className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            TOOL SELECTION
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-6 leading-tight lg:leading-relaxed">
            中小企業のAI活用、<br />
            なぜ<span className="text-accent">「Google Workspace」</span>が最適解なのか。
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            世の中には多くのAIツールが存在しますが、<br className="hidden md:block" />
            中小企業の現場に最も速く浸透し、「社員全員」が成果を出せるプラットフォーム。<br />
            それが、Google Workspace（Gemini）であると私たちは確信しています。<br />
            当社の研修プログラムが、あえてGoogle Geminiを教材に選定しているのには、<br className="hidden md:block" />
            明確な<strong className="text-navy">「3つの理由」</strong>があります。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${reason.color} shadow-lg`}>
                  <i className={`${reason.icon} text-3xl text-white`}></i>
                </div>
                <div className="text-5xl font-black text-gray-200">
                  {reason.number}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-2">
                {reason.title}
              </h3>

              <p className="text-accent font-medium text-sm mb-4">
                {reason.subtitle}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-navy to-navy-light rounded-3xl p-10 text-center text-white"
        >
          <p className="text-xl lg:text-2xl leading-relaxed">
            だからこそ、当社の動画研修は<strong className="text-accent">「Google Workspace × Gemini」</strong>に特化しています。<br />
            単なるツールの操作説明ではなく、中小企業が最も安全かつ効率的に成果を出せる<br className="hidden md:block" />
            <strong>「環境」と「スキル」をセットで提供</strong>します。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
