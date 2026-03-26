export default function TrainingContent() {
  const chapters = [
    {
      num: 1,
      range: '第1章〜第2章',
      title: '基礎とプロンプト技術',
      description: '生成AIの基本から、欲しい回答を的確に引き出す指示設計（プロンプトエンジニアリング）を習得します。',
      chapters: ['生成AI導入によるDX推進の基礎と環境構築', 'LLMへの指示設計技術（プロンプトエンジニアリング）']
    },
    {
      num: 2,
      range: '第3章〜第4章',
      title: '日常業務の自動化・効率化',
      description: 'AIを活用した高度な市場調査（ディープリサーチ）や、ビジネス文書作成の自動化など、日々の事務作業時間を劇的に削減します。',
      chapters: ['AIを活用した市場調査・情報収集（ディープリサーチ）', 'ビジネス文書作成プロセスの変革']
    },
    {
      num: 3,
      range: '第5章〜第6章',
      title: 'Google Workspace連携の実践',
      description: '話題のNotebookLMによるナレッジ共有や、Google Workspace各アプリとの高度な連携を実践。',
      chapters: ['NotebookLMの使い方と活用方法', 'Google Workspace連携の実践']
    },
    {
      num: 4,
      range: '第7章',
      title: 'ガバナンス・リスク管理',
      description: 'AI利用の安全性を高めるルール策定と運用管理を学びます。情報漏洩リスクを気にする経営者も、この章があることで安心して導入を決断できます。',
      chapters: ['ガバナンス・リスク管理と今後の展望'],
      highlight: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 見出し */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full mb-4">
            AI・DX推進研修
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            顧問先の社長が「ぜひやりたい！」と<br />
            <span className="text-emerald-600">即決する。</span>実務直結型の研修
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            本スキームでご提供する研修は、助成金受給のための単なるダミーではありません。<br className="hidden md:block" />
            Google Workspace（Gemini）を活用し、全社員が安全かつ効果的にAIを業務活用できるようになる、<br className="hidden md:block" />
            <span className="font-bold text-slate-800">合計11時間以上の本格的な教育カリキュラム</span>です。
          </p>
        </div>

        {/* ポイント2つ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* eラーニング */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-xl">
                <i className="ri-computer-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900">eラーニング形式で導入ハードルゼロ</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <div>
                  <span className="font-bold text-slate-800">受講方法：</span>
                  <span className="text-slate-600">eラーニング（LMS学習管理システムを活用）</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <div>
                  <span className="font-bold text-slate-800">標準学習期間：</span>
                  <span className="text-slate-600">1ヶ月（合計11時間03分）</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <div>
                  <span className="font-bold text-slate-800">メリット：</span>
                  <span className="text-slate-600">社員を会議室に集める必要なし。業務のスキマ時間に各自のPCやスマホで受講できるため、企業側の導入ハードルが極めて低く、先生も日程調整の手間が一切かかりません。</span>
                </div>
              </li>
            </ul>
          </div>

          {/* 受講対象 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-xl">
                <i className="ri-group-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900">社長が「即決」する3つの理由</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-teal-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span className="text-slate-600">社員の生産性が上がる<span className="font-bold text-slate-800">本物のAI研修</span>である</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-teal-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span className="text-slate-600">会議室・講師不要の<span className="font-bold text-slate-800">eラーニング</span>で手間がかからない</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-teal-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span className="text-slate-600">助成金で<span className="font-bold text-slate-800">研修費用がカバー</span>されるため、社長の決裁が驚くほどスムーズ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* カリキュラム */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-10">
            7章構成の<span className="text-emerald-600">体系的カリキュラム</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapters.map((block, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-md ${block.highlight ? 'bg-amber-50 border-2 border-amber-400' : 'bg-white border-2 border-slate-100'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 text-sm font-bold rounded-full ${block.highlight ? 'bg-amber-400 text-white' : 'bg-emerald-500 text-white'}`}>
                    {block.range}
                  </span>
                  {block.highlight && <span className="text-amber-600 text-sm font-bold">★ 経営者が最も安心するポイント</span>}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{block.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{block.description}</p>
                <ul className="space-y-2">
                  {block.chapters.map((ch, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <i className="ri-book-line text-emerald-500 flex-shrink-0"></i>
                      {ch}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 労働局対策アピール */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-10 text-white text-center shadow-2xl">
          <div className="mb-4">
            <i className="ri-shield-check-line text-6xl"></i>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">労働局の審査にも強い、安心のカリキュラム</h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            本研修は<span className="font-bold text-white">「11時間03分」</span>の体系立てられたプログラムであり、助成金の訓練要件（実体のある研修であること）を完全にクリアしています。<br className="hidden md:block" />
            自信を持ってキャリアアップ計画・訓練計画に組み込んでいただけます。
          </p>
        </div>

      </div>
    </section>
  );
}
