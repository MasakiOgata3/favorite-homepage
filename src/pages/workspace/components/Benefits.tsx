export default function Benefits() {
  const benefits = [
    {
      icon: 'ri-ai-generate',
      color: 'from-pink-500 to-pink-600',
      title: 'AI搭載で生産性向上',
      description: 'Gemini AIがメール作成、文書編集、データ分析をサポート。ルーティンワークを自動化し、創造的な業務に集中できます。'
    },
    {
      icon: 'ri-team-line',
      color: 'from-blue-500 to-blue-600',
      title: 'チーム協働の革新',
      description: 'リアルタイムでの共同編集により、チームメンバー全員が同時に作業可能。距離や時間の制約を超えて、スムーズなコラボレーションを実現します。'
    },
    {
      icon: 'ri-shield-check-line',
      color: 'from-green-500 to-green-600',
      title: '企業レベルのセキュリティ',
      description: '多層防御とAIによる脅威検出で、大切なデータを24時間365日保護。コンプライアンス要件にも完全対応し、安心してビジネスに集中できます。'
    },
    {
      icon: 'ri-cloud-line',
      color: 'from-purple-500 to-purple-600',
      title: 'どこでも働ける自由',
      description: 'オフィス、自宅、外出先、どこからでもアクセス可能。すべてのデバイスで同期され、場所を選ばず最高のパフォーマンスを発揮できます。'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      color: 'from-orange-500 to-orange-600',
      title: 'コスト削減と効率化',
      description: 'サーバー管理やソフトウェア更新が不要。IT運用コストを大幅に削減しながら、常に最新の機能を利用できます。'
    },
    {
      icon: 'ri-line-chart-line',
      color: 'from-teal-500 to-teal-600',
      title: 'スケーラブルな成長',
      description: 'ビジネスの成長に合わせて柔軟に拡張可能。ユーザー数の増減も簡単に対応でき、常に最適な環境を維持できます。'
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Google Workspace を選ぶ<span className="text-orange-600">6つの理由</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            世界中の企業が信頼するクラウドプラットフォームで、ビジネスの可能性を最大限に引き出します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${benefit.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* 統計情報 */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">90億+</div>
            <div className="text-sm text-gray-600">世界中のユーザー</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">稼働率保証</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">サポート体制</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">30GB+</div>
            <div className="text-sm text-gray-600">ストレージ容量</div>
          </div>
        </div>
      </div>
    </section>
  );
}