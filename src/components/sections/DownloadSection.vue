<template>
  <section id="download-section" class="py-16 gradient-bg">
    <v-container>
      <div class="text-center text-white">
        <h2 class="text-h3 font-weight-bold mb-4">
          今すぐ始めよう
        </h2>
        <p class="text-h6 mb-8" style="opacity: 0.9;">
          7日間無料でお試しいただけます
        </p>
        
        <div class="d-flex flex-column flex-sm-row justify-center align-center">
          <v-btn
            size="x-large"
            color="white"
            class="mb-4 mb-sm-0 mr-sm-4"
            style="color: #667eea !important;"
            @click="downloadApp"
          >
            <v-icon left class="mr-2">mdi-apple</v-icon>
            App Store からダウンロード
          </v-btn>
          
          <p class="text-body-1 mb-0" style="opacity: 0.8;">
            iOS 14.0以降対応
          </p>
        </div>
        
        <div class="mt-8">
          <v-divider class="mb-6" style="opacity: 0.3;"></v-divider>
          
          <div class="d-flex flex-column flex-md-row justify-center align-center">
            <div class="text-center mb-4 mb-md-0 mr-md-8">
              <v-icon size="32" class="mb-2">mdi-shield-check</v-icon>
              <p class="text-body-2 mb-0">プライバシー保護</p>
            </div>
            
            <div class="text-center mb-4 mb-md-0 mr-md-8">
              <v-icon size="32" class="mb-2">mdi-robot</v-icon>
              <p class="text-body-2 mb-0">AI搭載</p>
            </div>
            
            <div class="text-center mb-4 mb-md-0 mr-md-8">
              <v-icon size="32" class="mb-2">mdi-heart-multiple</v-icon>
              <p class="text-body-2 mb-0">関係性向上</p>
            </div>
            
            <div class="text-center">
              <v-icon size="32" class="mb-2">mdi-chart-line</v-icon>
              <p class="text-body-2 mb-0">詳細な分析</p>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'DownloadSection',
  methods: {
    downloadApp() {
      // 実際のApp Store URLに置き換える
      const appStoreUrl = 'https://apps.apple.com/jp/app/michishirube/id123456789'
      window.open(appStoreUrl, '_blank')
    }
  }
}
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>