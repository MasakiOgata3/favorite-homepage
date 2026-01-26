import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

interface Chapter {
  number: number;
  title: string;
  summary: string;
  details: string;
  items: string[];
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
        '業務改革（DX）と生成AI',
        'GoogleWorkspace基本画面の操作ガイド',
        'Geminiへの最初の問いかけ',
        '伝わる質問の作り方（初心者の型）',
        '会話の管理（スレッドの固定・共有）',
      ],
    },
    {
      number: 2,
      title: 'LLMへの指示設計技術（プロンプトエンジニアリング）',
      summary: 'プロンプトの4要素とハルシネーション対策',
      details: '効果的なプロンプト設計の技術を習得します。ハルシネーション（誤情報生成）を防ぎ、正確で有用な回答を引き出すための実践的なテクニックを学びます。',
      items: [
        'プロンプトの基本：AIは「指示」で変わる',
        'プロンプトの「4要素」',
        '制約条件の書き方',
        '出力形式の指定',
        '例を見せる指示（お手本付き）',
        'ステップ分解の指示',
        '追加質問の技術',
        '画像・PDF・ファイル入力の基本',
        '「ハルシネーション」を減らす質問の仕方',
        'プロンプトテンプレ集（業務別）',
      ],
    },
    {
      number: 3,
      title: 'AIを活用した市場調査・情報収集（ディープリサーチ）',
      summary: '調査の型と競合比較の自動化',
      details: 'AIを活用した高度な市場調査手法を学習します。競合分析や業界トレンドの把握を効率化し、戦略的な意思決定を支援するスキルを身につけます。',
      items: [
        '調査の型：目的→仮説→調べる順番',
        '検索ワード設計（広く→狭く→深く）',
        '情報源の見極め',
        '競合比較の自動化',
        '顧客課題の抽出',
        '長文の要点化と論点整理',
        '数字の扱い（推計と事実を分ける）',
        '調査結果をスライド化',
        '調査の限界と注意点',
      ],
    },
    {
      number: 4,
      title: 'ビジネス文書作成プロセスの変革',
      summary: 'メール・議事録・提案書のドラフト生成',
      details: '日常業務で頻繁に発生する文書作成を効率化します。メール、報告書、提案書などのドラフトを迅速に生成し、業務時間を大幅に削減する方法を習得します。',
      items: [
        'ビジネス文書の型',
        'メール作成：依頼・お礼・お断り',
        '社内通知文：ルール変更・周知',
        '議事録：メモから正式文書へ',
        '提案書ドラフト：構成→本文',
        '手順書・マニュアル',
        '校正・言い換え',
        '要約：長文→1分で読める',
        'ライティング',
        '文書の品質チェック',
      ],
    },
    {
      number: 5,
      title: 'データ構造化とナレッジマネジメント（RAG）',
      summary: 'Canvas・Gems・NotebookLMの活用',
      details: 'Canvas、Gems、NotebookLMなどの機能を活用し、社内ナレッジを効率的に管理・活用する方法を学びます。',
      items: [
        'Canvas機能の解説',
        'Gemsの基本的な使い方',
        'プロンプト生成用のGemsを作ろう',
        'スマホで音声入力を活用',
        '外出先でメモを記録',
        '音声入力でライティング',
        '人に説明する前の練習をしよう',
        'NotebookLMの基本的な使い方',
        '社内資料を検索して答える仕組み（RAG）',
        '社内データ整理',
        'PDF/規程から必要情報を抜き出す',
        'ナレッジ運用フローの確認',
        'FAQ化：問い合わせ対応を速くする',
        'NotebookLMで音声コンテンツを作ろう',
        'NotebookLMでスライド資料化',
        'NotebookLMで研修動画を作ろう',
      ],
    },
    {
      number: 6,
      title: 'Google Workspace連携の実践',
      summary: 'Gmail・Doc・Sheet・スライド・Drive・Calendar連携',
      details: 'Google WorkspaceとGeminiを連携させ、シームレスなワークフローを実現します。メール管理、文書作成、スケジュール調整などを効率化します。',
      items: [
        'Gmail：メール下書きと要点抽出',
        'Gmail：返信方針の提案',
        'Doc：下書き→推敲→整形',
        'Sheet：表作成・分類・要約',
        'Googleスライド：資料の骨子作成',
        'Drive：ファイル探しと整理',
        'Calendar/Tasks：予定とToDoの言語化',
      ],
    },
    {
      number: 7,
      title: 'ガバナンス・リスク管理と今後の展望',
      summary: '情報漏洩対策、著作権、人による最終確認',
      details: 'AI活用における倫理的配慮とリスク管理を学びます。情報セキュリティ、著作権保護、人間による最終確認の重要性など、企業として守るべき原則を理解します。',
      items: [
        '社内ルール（ガバナンス）の全体像：AIを安全に使う決めごと',
        'AIに入力してはいけない情報',
        '情報の伏せ字・置き換え（マスキング）／個人が特定できない形（匿名化）',
        '著作権・引用・転載の基礎',
        '誤情報対策：事実確認の手順',
        '人が最終確認する運用の徹底',
        'AIと長く付き合うコツ',
        '最終まとめ：実務をDX化するコツ',
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
                            {chapter.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-center space-x-3 bg-gray-50 rounded-lg px-4 py-3"
                              >
                                <span className="flex-shrink-0 w-6 h-6 bg-accent/20 text-accent rounded-full flex items-center justify-center text-sm font-bold">
                                  {itemIndex + 1}
                                </span>
                                <span className="text-gray-700 text-sm">{item}</span>
                              </div>
                            ))}
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
