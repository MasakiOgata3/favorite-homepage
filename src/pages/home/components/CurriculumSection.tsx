import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

interface Item {
  title: string;
  duration: string;
}

interface Chapter {
  number: number;
  title: string;
  summary: string;
  details: string;
  items: Item[];
}

export default function CurriculumSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const chapters: Chapter[] = [
    {
      number: 1,
      title: '生成AI導入によるDX推進の基礎と環境構築',
      summary: 'Geminiの基本操作と質問の仕方を習得',
      details: '生成AIの基本概念から、Google Workspaceの操作、Geminiへの効果的な質問方法まで学習します。',
      items: [
        { title: '業務改革（DX）と生成AI', duration: '3:41' },
        { title: '基本画面の操作ガイド', duration: '12:42' },
        { title: 'Geminiへの最初の問いかけ', duration: '6:44' },
        { title: '伝わる質問の作り方（初心者の型）', duration: '11:16' },
        { title: '会話の管理（スレッドの固定・共有）', duration: '8:28' },
      ],
    },
    {
      number: 2,
      title: 'LLMへの指示設計技術（プロンプトエンジニアリング）',
      summary: 'プロンプトに必要な要素とハルシネーション対策',
      details: '効果的なプロンプト設計の技術を習得します。ハルシネーション（誤情報生成）を防ぎ、正確で有用な回答を引き出すための実践的なテクニックを学びます。',
      items: [
        { title: 'プロンプトの基本：AIは「指示」で変わる', duration: '9:11' },
        { title: 'プロンプトに「必要な要素」', duration: '10:59' },
        { title: '制約条件の書き方', duration: '10:26' },
        { title: '出力形式の指定', duration: '11:11' },
        { title: '例を見せる指示（お手本付き）', duration: '11:43' },
        { title: 'ステップ分解の指示', duration: '10:50' },
        { title: '追加質問の技術', duration: '12:04' },
        { title: '画像・PDF・ファイル入力の基本', duration: '11:45' },
        { title: '出力の質を上げる工夫', duration: '12:26' },
        { title: 'プロンプトテンプレ集（業務別）', duration: '12:36' },
      ],
    },
    {
      number: 3,
      title: 'AIを活用した市場調査・情報収集（ディープリサーチ）',
      summary: '調査の型と競合比較の自動化',
      details: 'AIを活用した高度な市場調査手法を学習します。競合分析や業界トレンドの把握を効率化し、戦略的な意思決定を支援するスキルを身につけます。',
      items: [
        { title: '調査の型：目的→仮説→調べる順番', duration: '10:13' },
        { title: '検索ワード設計（広く→狭く→深く）', duration: '10:16' },
        { title: '情報源の見極め', duration: '7:36' },
        { title: '競合比較の自動化', duration: '8:51' },
        { title: '顧客課題の抽出', duration: '9:03' },
        { title: '長文の要点化と論点整理', duration: '12:04' },
        { title: '数字の扱い（推計と事実を分ける）', duration: '7:34' },
        { title: '調査結果をスライド化', duration: '11:22' },
        { title: '調査の限界と注意点', duration: '9:40' },
      ],
    },
    {
      number: 4,
      title: 'ビジネス文書作成プロセスの変革',
      summary: 'メール・議事録・提案書のドラフト生成、Canvas・Gems活用',
      details: '日常業務で頻繁に発生する文書作成を効率化します。メール、報告書、提案書などのドラフトを迅速に生成し、Canvas・Gemsなどの機能も活用して業務時間を大幅に削減する方法を習得します。',
      items: [
        { title: 'ビジネス文書の型', duration: '12:15' },
        { title: 'メール作成：依頼・お礼・お断り', duration: '13:30' },
        { title: '社内通知文：ルール変更・周知', duration: '12:12' },
        { title: '議事録：メモから正式文書へ', duration: '12:43' },
        { title: '提案書ドラフト：構成→本文', duration: '12:28' },
        { title: '手順書・マニュアル', duration: '12:49' },
        { title: '校正・言い換え', duration: '12:15' },
        { title: '要約：長文→1分で読める', duration: '13:32' },
        { title: 'ライティング', duration: '11:12' },
        { title: '文書の品質チェック', duration: '12:12' },
        { title: 'Canvas機能の解説', duration: '13:00' },
        { title: 'Gemsの基本的な使い方', duration: '11:43' },
        { title: 'プロンプト生成用のGemsを作ろう', duration: '15:10' },
        { title: 'スマホで音声入力を活用', duration: '12:42' },
        { title: '外出先でメモを記録', duration: '12:28' },
        { title: '音声入力でライティング', duration: '11:44' },
        { title: '人に説明する前の練習をしよう', duration: '13:30' },
      ],
    },
    {
      number: 5,
      title: 'NotebookLMの使い方と活用方法',
      summary: '大量の社内資料の要約 and 効率的な情報共有',
      details: 'NotebookLMを活用し、社内の膨大なナレッジを効率的に管理・活用する方法を学びます。',
      items: [
        { title: 'NotebookLMの基本的な使い方', duration: '12:42' },
        { title: '社内資料を検索して答える仕組み（RAG）', duration: '13:40' },
        { title: '社内データ整理', duration: '12:42' },
        { title: 'PDF/規程から必要情報を抜き出す', duration: '13:34' },
        { title: 'ナレッジ運用フローの確認', duration: '15:00' },
        { title: 'FAQ化：問い合わせ対応を速くする', duration: '12:12' },
        { title: 'NotebookLMで音声コンテンツを作ろう', duration: '13:35' },
        { title: 'NotebookLMでスライド資料化', duration: '11:15' },
        { title: 'NotebookLMで研修動画を作ろう', duration: '13:12' },
      ],
    },
    {
      number: 6,
      title: 'Google Workspace連携の実践',
      summary: 'Gmail・Doc・Sheet・スライド・Drive・Calendar連携',
      details: 'Google WorkspaceとGeminiを連携させ、シームレスなワークフローを実現します。メール管理、文書作成、スケジュール調整などを効率化します。',
      items: [
        { title: '各Googleアプリの開き方', duration: '11:44' },
        { title: 'Gmail：メール下書きと要点抽出', duration: '11:45' },
        { title: 'Gmail：返信方針の提案', duration: '11:13' },
        { title: 'Googleドキュメント：下書き→推敲→整形', duration: '12:12' },
        { title: 'Googleスプレッドシート：表作成・分類・要約', duration: '11:45' },
        { title: 'GoogleスライドとGemini', duration: '13:33' },
        { title: 'Googleドライブ：ファイル探しと整理', duration: '11:55' },
        { title: 'Googleカレンダー：予定とToDoの言語化', duration: '12:12' },
      ],
    },
    {
      number: 7,
      title: 'ガバナンス・リスク管理と今後の展望',
      summary: '情報漏洩対策、著作権、人による最終確認、AIとの付き合い方',
      details: 'AI活用における倫理的配慮とリスク管理を学びます。情報セキュリティ、著作権保護、人間による最終確認の重要性など、企業として守るべき原則を理解します。',
      items: [
        { title: '社内ルール（ガバナンス）の全体像', duration: '12:42' },
        { title: 'AIに入力してはいけない情報', duration: '13:12' },
        { title: '情報の伏せ字・置き換え（マスキング）／匿名化', duration: '12:12' },
        { title: '著作権・引用・転載の基礎知識', duration: '13:12' },
        { title: 'ハルシネーション対策：事実確認の手順', duration: '12:22' },
        { title: '人が最終確認する運用の徹底', duration: '11:44' },
        { title: 'AIと長く付き合うコツ', duration: '11:42' },
        { title: '最終まとめ：実務をDX化するコツ', duration: '12:12' },
      ],
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
                        <div className="border-l-4 border-accent/20 pl-6 ml-16">
                          <p className="text-gray-700 leading-relaxed mb-6">
                            {chapter.details}
                          </p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {chapter.items.map((item, itemIndex) => {
                              const globalIndex = chapters
                                .slice(0, index)
                                .reduce((sum, ch) => sum + ch.items.length, 0) + itemIndex + 1;
                              return (
                                <div
                                  key={itemIndex}
                                  className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3"
                                >
                                  <div className="flex items-center space-x-3">
                                    <span className="flex-shrink-0 w-7 h-7 bg-accent/20 text-accent rounded-full flex items-center justify-center text-sm font-bold">
                                      {globalIndex}
                                    </span>
                                    <span className="text-gray-700 text-sm font-medium">{item.title}</span>
                                  </div>
                                  <span className="text-gray-400 text-xs font-mono ml-4">
                                    {item.duration}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
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
