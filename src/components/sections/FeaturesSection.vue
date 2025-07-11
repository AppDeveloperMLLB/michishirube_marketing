<template>
  <section id="features-section" class="py-16">
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">主な機能</h2>
        <p class="text-h6 text-grey-darken-1">
          ミチシルベがお二人の関係性向上をサポートします
        </p>
      </div>
      
      <v-row>
        <v-col
          v-for="feature in features"
          :key="feature.id"
          cols="12"
          md="4"
          class="mb-6"
        >
          <v-card
            class="feature-card pa-6 h-100"
            elevation="2"
            rounded="lg"
          >
            <div class="text-center mb-4">
              <v-avatar
                size="80"
                class="mb-4"
                :style="{ backgroundColor: feature.color + '20' }"
              >
                <v-icon size="40" :color="feature.color">
                  {{ feature.icon }}
                </v-icon>
              </v-avatar>
            </div>
            
            <h3 class="text-h5 font-weight-bold mb-3 text-center">
              {{ feature.title }}
            </h3>
            
            <p class="text-body-1 text-center mb-4">
              {{ feature.description }}
            </p>
            
            <ul class="text-body-2 text-grey-darken-1">
              <li 
                v-for="detail in feature.details" 
                :key="detail"
                class="mb-1"
              >
                {{ detail }}
              </li>
            </ul>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      features: [
        {
          id: 1,
          title: '記録機能',
          icon: 'mdi-pencil',
          color: '#667eea',
          description: '気分と出来事を簡単に記録',
          details: [
            '8段階の気分選択',
            '出来事・感情の記録',
            '体調チェック機能',
            'プライバシー完全保護'
          ]
        },
        {
          id: 2,
          title: 'AIアドバイス',
          icon: 'mdi-robot',
          color: '#764ba2',
          description: '記録からAIが個別アドバイス',
          details: [
            'MBTIタイプ対応',
            'クロノタイプ分析',
            'パーソナライズされた提案',
            '科学的根拠に基づくアドバイス'
          ]
        },
        {
          id: 3,
          title: '週間レポート',
          icon: 'mdi-chart-line',
          color: '#f093fb',
          description: '感情の変化をグラフで分析',
          details: [
            '感情の推移グラフ',
            'トレンド分析',
            'インサイト表示',
            'パートナーとの比較'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.feature-card {
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
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