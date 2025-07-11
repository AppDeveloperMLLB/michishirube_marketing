<template>
  <section class="py-16" style="background-color: #f8f9fa;">
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">使い方</h2>
        <p class="text-h6 text-grey-darken-1">
          3つの簡単なステップで関係性を向上させましょう
        </p>
      </div>
      
      <v-row align="center" justify="center">
        <v-col
          v-for="(step, index) in steps"
          :key="step.id"
          cols="12"
          md="4"
          class="mb-8"
        >
          <div class="text-center">
            <div class="step-number mb-4">
              {{ index + 1 }}
            </div>
            
            <v-avatar
              size="100"
              class="mb-4"
              :style="{ backgroundColor: step.color + '20' }"
            >
              <v-icon size="50" :color="step.color">
                {{ step.icon }}
              </v-icon>
            </v-avatar>
            
            <h3 class="text-h5 font-weight-bold mb-3">
              {{ step.title }}
            </h3>
            
            <p class="text-body-1 text-grey-darken-1">
              {{ step.description }}
            </p>
          </div>
          
          <!-- 矢印（最後のステップ以外） -->
          <div v-if="index < steps.length - 1" class="text-center mt-4 d-none d-md-block">
            <v-icon size="32" color="primary" class="step-arrow">
              mdi-arrow-right
            </v-icon>
          </div>
        </v-col>
      </v-row>
      
      <div class="text-center mt-12">
        <v-btn
          size="large"
          color="primary"
          class="gradient-btn"
          @click="scrollToDownload"
        >
          今すぐ始める
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'HowItWorksSection',
  data() {
    return {
      steps: [
        {
          id: 1,
          title: '記録',
          icon: 'mdi-pencil-outline',
          color: '#667eea',
          description: '毎日の気分と出来事を記録します。プライバシーは完全に保護されます。'
        },
        {
          id: 2,
          title: 'AI分析',
          icon: 'mdi-brain',
          color: '#764ba2',
          description: 'AIがあなたの記録を分析し、最適なアドバイスを生成します。'
        },
        {
          id: 3,
          title: '改善',
          icon: 'mdi-heart-multiple',
          color: '#f093fb',
          description: 'アドバイスを実践してコミュニケーションが向上します。'
        }
      ]
    }
  },
  methods: {
    scrollToDownload() {
      const element = document.getElementById('download-section')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
}

.step-arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(10px);
  }
  60% {
    transform: translateX(5px);
  }
}

@media (max-width: 960px) {
  .step-arrow {
    transform: rotate(90deg);
  }
}
</style>