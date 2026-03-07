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
      summary: '生成AIによる業務改革の第一歩とGeminiの基本',
      details: '生成AIがもたらすDXの基礎知識から、Geminiの基本操作、そして実務で役立つ効果的な質問の組み立て方までを体系的に学びます。',
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
      summary: '効果的なプロンプト作成の基本と実践テクニック',
      details: 'プロンプト設計の5要素や制約条件の書き方、出力品質を高めるテクニック、業務別テンプレートの活用方法までを習得します。',
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
      summary: 'AIを活用した高度な市場調査と情報分析',
      details: '目的・仮説に基づいた調査の型から、競合比較の自動化、顧客課題の抽出、調査結果の資料化までを学習します。',
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
      summary: 'ビジネス文書作成の自動化と最新機能の活用',
      details: 'メールや提案書のドラフト作成、Canvas・Gemsによる効率化に加え、音声入力を活用したスピーディーなアウトプット手法を学びます。',
      items: [
        { title: 'ビジネス文書の型', duration: '10:16' },
        { title: 'メール作成：依頼・お礼・お断り', duration: '12:28' },
        { title: '社内通知文：ルール変更・周知', duration: '12:11' },
        { title: '議事録：メモから正式文書へ', duration: '11:05' },
        { title: '提案書ドラフト：構成→本文', duration: '11:18' },
        { title: '手順書・マニュアル', duration: '12:48' },
        { title: '校正・言い換え', duration: '12:36' },
        { title: '要約：長文→1分で読める', duration: '9:54' },
        { title: 'ライティング', duration: '11:51' },
        { title: '文書の品質チェック', duration: '10:19' },
        { title: 'Canvas機能の解説', duration: '11:59' },
        { title: 'Gemsの基本的な使い方', duration: '14:43' },
        { title: 'プロンプト生成用のGemsを作ろう', duration: '13:17' },
        { title: 'スマホで音声入力を活用', duration: '10:01' },
        { title: '外出先でメモを記録', duration: '7:26' },
        { title: '音声入力でライティング', duration: '11:04' },
        { title: '人に説明する前の練習をしよう', duration: '13:20' },
      ],
    },
    {
      number: 5,
      title: 'NotebookLMの使い方と活用方法',
      summary: 'NotebookLMによるナレッジ共有と資料生成',
      details: 'NotebookLMを使って膨大な社内資料を効率的に要約・検索し、音声コンテンツや研修動画などの新しい形式へ変換する方法を習得します。',
      items: [
        { title: 'NotebookLMの基本的な使い方', duration: '13:09' },
        { title: '社内資料を検索して答える仕組み（RAG）', duration: '8:00' },
        { title: '社内データ整理', duration: '7:07' },
        { title: 'PDF/規程から必要情報を抜き出す', duration: '7:34' },
        { title: 'ナレッジ運用フローの確認', duration: '8:39' },
        { title: 'FAQ化：問い合わせ対応を速くする', duration: '7:41' },
        { title: 'NotebookLMで音声コンテンツを作ろう', duration: '10:38' },
        { title: 'NotebookLMでスライド資料化', duration: '11:33' },
        { title: 'NotebookLMで研修動画を作ろう', duration: '10:51' },
      ],
    },
    {
      number: 6,
      title: 'Google Workspace連携の実践',
      summary: 'Google Workspace各アプリとの高度な連携',
      details: 'Gmail、ドキュメント、スプレッドシートなどの各ツールとGeminiを連携させ、日常業務をシームレスに自動化する実践手法を学びます。',
      items: [
        { title: '各Googleアプリの開き方', duration: '0:46' },
        { title: 'Gmail：メール下書きと要点抽出', duration: '11:49' },
        { title: 'Gmail：返信方針의提案', duration: '13:18' },
        { title: 'Googleドキュメント：下書き→推敲→整形', duration: '12:13' },
        { title: 'Googleスプレッドシート：表作成・分類・要約', duration: '13:43' },
        { title: 'GoogleスライドとGemini', duration: '13:23' },
        { title: 'Googleドライブ：ファイル探しと整理', duration: '12:38' },
        { title: 'Googleカレンダー：予定とToDoの言語化', duration: '10:53' },
      ],
    },
    {
      number: 7,
      title: 'ガバナンス・リスク管理と今後の展望',
      summary: 'AI利用の安全性を高めるルールと運用管理',
      details: '情報漏洩対策や著作権、ハルシネーションへの対処法を学び、安全かつ効果的にAIを使いこなすためのガバナンスとマインドセットを習得します。',
      items: [
        { title: '社内ルール（ガバナンス）の全体像', duration: '7:03' },
        { title: 'AIに入力してはいけない情報', duration: '5:37' },
        { title: '情報の伏せ字・置き換え（マスキング）／匿名化', duration: '6:35' },
        { title: '著作権・引用・転載の基礎知識', duration: '4:16' },
        { title: 'ハルシネーション対策：事実確認の手順', duration: '7:21' },
        { title: '人が最終確認する運用の徹底', duration: '6:04' },
        { title: 'AIと長く付き合うコツ', duration: '6:40' },
        { title: '最終まとめ：実務をDX化するコツ', duration: '6:47' },
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
