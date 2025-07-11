<template>
  <section class="hero-section">
    <v-container class="fill-height">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <h1 class="display-1 font-weight-bold mb-4">
            ミチシルベ
          </h1>
          <h2 class="headline mb-4">
            カップルのためのコミュニケーションアプリ
          </h2>
          <p class="text-h6 mb-6" style="opacity: 0.9;">
            毎日の記録で、お互いをもっと理解し合おう
          </p>
          
          <div class="d-flex flex-column flex-sm-row justify-center justify-md-start">
            <v-btn
              size="large"
              color="white"
              class="mb-3 mb-sm-0 mr-sm-4"
              style="color: #667eea !important;"
              @click="scrollToDownload"
            >
              <v-icon left class="mr-2">mdi-apple</v-icon>
              App Storeからダウンロード
            </v-btn>
            <v-btn
              size="large"
              variant="outlined"
              color="white"
              @click="scrollToFeatures"
            >
              機能を見る
            </v-btn>
          </div>
        </v-col>
        
        <v-col cols="12" md="6" class="text-center">
          <div class="hero-image-container">
            <v-img
              :src="heroImage"
              alt="ミチシルベアプリ画面"
              max-width="400"
              class="mx-auto hero-image"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      heroImage: '/images/hero-app-mockup.png' // 実際の画像パスに置き換える
    }
  },
  methods: {
    scrollToDownload() {
      const element = document.getElementById('download-section')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    scrollToFeatures() {
      const element = document.getElementById('features-section')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding-top: 64px; /* ヘッダーの高さ分 */
}

.hero-image-container {
  position: relative;
  animation: float 6s ease-in-out infinite;
}

.hero-image {
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3));
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 960px) {
  .hero-section {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  
  .display-1 {
    font-size: 2.5rem !important;
  }
  
  .headline {
    font-size: 1.8rem !important;
  }
}

@media (max-width: 600px) {
  .display-1 {
    font-size: 2rem !important;
  }
  
  .headline {
    font-size: 1.5rem !important;
  }
}
</style>