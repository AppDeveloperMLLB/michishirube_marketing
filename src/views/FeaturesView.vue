<template>
  <div class="features-page">
    <v-container class="py-16">
      <div class="text-center mb-12">
        <h1 class="text-h2 font-weight-bold mb-4">機能詳細</h1>
        <p class="text-h6 text-grey-darken-1">
          ミチシルベの全ての機能をご紹介します
        </p>
      </div>
      
      <v-row>
        <v-col
          v-for="feature in detailedFeatures"
          :key="feature.id"
          cols="12"
          class="mb-8"
        >
          <v-card class="pa-8" elevation="2" rounded="lg">
            <v-row align="center">
              <v-col cols="12" md="8">
                <div class="d-flex align-center mb-4">
                  <v-avatar
                    size="60"
                    class="mr-4"
                    :style="{ backgroundColor: feature.color + '20' }"
                  >
                    <v-icon size="30" :color="feature.color">
                      {{ feature.icon }}
                    </v-icon>
                  </v-avatar>
                  <h2 class="text-h4 font-weight-bold">
                    {{ feature.title }}
                  </h2>
                </div>
                
                <p class="text-h6 mb-4">
                  {{ feature.description }}
                </p>
                
                <ul class="text-body-1">
                  <li
                    v-for="detail in feature.details"
                    :key="detail"
                    class="mb-2"
                  >
                    {{ detail }}
                  </li>
                </ul>
              </v-col>
              
              <v-col cols="12" md="4" class="text-center">
                <v-img
                  :src="feature.image"
                  alt="機能画面"
                  max-width="250"
                  class="mx-auto"
                />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      
      <div class="text-center mt-12">
        <v-btn
          size="large"
          color="primary"
          class="gradient-btn"
          :to="{ name: 'home' }"
        >
          ダウンロードページへ
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'FeaturesView',
  data() {
    return {
      detailedFeatures: [
        {
          id: 1,
          title: '記録機能',
          icon: 'mdi-pencil',
          color: '#667eea',
          description: '毎日の気分と出来事を簡単に記録できます。プライバシーは完全に保護されます。',
          details: [
            '8段階の気分選択で感情を正確に記録',
            '出来事や感情を自由にテキストで記録',
            '体調チェック機能で身体の状態も把握',
            'パートナーには見えない個人専用の記録',
            '過去の記録をカレンダーで簡単に確認'
          ],
          image: '/images/record-feature.png'
        },
        {
          id: 2,
          title: 'AIアドバイス機能',
          icon: 'mdi-robot',
          color: '#764ba2',
          description: 'あなたの記録を分析し、パーソナライズされたアドバイスを提供します。',
          details: [
            'MBTIタイプに基づいた個別アドバイス',
            'クロノタイプ（朝型・夜型）を考慮した提案',
            '心理学に基づいた科学的なアドバイス',
            'パートナーとの関係性改善のヒント',
            '継続的な学習で精度が向上'
          ],
          image: '/images/ai-advice-feature.png'
        },
        {
          id: 3,
          title: '週間レポート機能',
          icon: 'mdi-chart-line',
          color: '#f093fb',
          description: '感情の変化をグラフで可視化し、トレンドを分析します。',
          details: [
            '感情の推移を美しいグラフで表示',
            '週間・月間のトレンド分析',
            '重要なインサイトを自動抽出',
            'パートナーとの感情パターンの比較',
            'PDF形式でのレポート出力'
          ],
          image: '/images/report-feature.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.features-page {
  padding-top: 64px;
}

ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  position: relative;
  padding-left: 20px;
}

ul li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}
</style>