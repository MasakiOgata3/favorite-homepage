import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

interface Chapter {
  number: number;
  title: string;
  summary: string;
  details: string;
}

export default function CurriculumSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const chapters: Chapter[] = [
    {
      number: 1,
      title: 'DX推進の基礎と環境構築',
      summary: 'Geminiのセキュリティ仕様、安全なセットアップ',
      details: '生成AIの基本概念から、企業での安全な導入方法まで学習します。Geminiのセキュリティ機能を理解し、組織に適した環境構築の手法を習得します。',
    },
    {
      number: 2,
      title: '生成AIへの指示設計技術',
      summary: 'ハルシネーション対策、プロンプトエンジニアリング',
      details: '効果的なプロンプト設計の技術を習得します。ハルシネーション（誤情報生成）を防ぎ、正確で有用な回答を引き出すための実践的なテクニックを学びます。',
    },
    {
      number: 3,
      title: '市場調査・情報収集の高度化',
      summary: 'ディープリサーチによる競合分析の自動化',
      details: 'AIを活用した高度な市場調査手法を学習します。競合分析や業界トレンドの把握を効率化し、戦略的な意思決定を支援するスキルを身につけます。',
    },
    {
      number: 4,
      title: 'ビジネス文書作成の自動化',
      summary: 'メール・報告書のドラフト生成',
      details: '日常業務で頻繁に発生する文書作成を効率化します。メール、報告書、提案書などのドラフトを迅速に生成し、業務時間を大幅に削減する方法を習得します。',
    },
    {
      number: 5,
      title: '社内ナレッジ活用',
      summary: 'RAG技術によるマニュアルデータベース化',
      details: 'RAG（Retrieval-Augmented Generation）技術を用いて、社内の膨大なナレッジを効率的に活用する方法を学びます。マニュアルや過去資料を即座に検索・活用できる環境を構築します。',
    },
    {
      number: 6,
      title: 'クラウドツール連携',
      summary: 'Gmail/Drive連携によるワークフロー統合',
      details: 'Google WorkspaceとAIを連携させ、シームレスなワークフローを実現します。メール管理、ファイル整理、スケジュール調整などを自動化し、生産性を最大化します。',
    },
    {
      number: 7,
      title: 'AI倫理・リスクマネジメント',
      summary: '情報漏洩対策、著作権、Human-in-the-loop',
      details: 'AI活用における倫理的配慮とリスク管理を学びます。情報セキュリティ、著作権保護、人間による最終確認の重要性など、企業として守るべき原則を理解します。',
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="curriculum" ref={ref} className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-accent text-sm font-medium tracking-wider mb-6">
            SYLLABUS
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-navy">
            7章構成の体系的カリキュラム
          </h2>
        </motion.div>

        <div className="space-y-5">
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-accent/30 hover:bg-accent/5 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="p-8 flex items-center justify-between">
                  <div className="flex items-center space-x-6 flex-1">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-black text-xl">
                        第{chapter.number}章
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-navy mb-2">
                        {chapter.title}
                      </h3>
                      <p className="text-gray-600">{chapter.summary}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-navy text-2xl ml-4"
                  >
                    <i className={expandedIndex === index ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0">
                        <div className="pl-22 border-l-4 border-accent/20 pl-6">
                          <p className="text-gray-700 leading-relaxed">
                            {chapter.details}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
