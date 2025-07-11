<template>
  <v-app-bar 
    app 
    color="white" 
    elevation="1"
    height="64"
  >
    <v-container class="d-flex align-center">
      <v-row align="center">
        <v-col cols="auto">
          <router-link to="/" class="text-decoration-none">
            <div class="d-flex align-center">
              <v-icon size="32" color="primary" class="mr-2">
                mdi-compass
              </v-icon>
              <span class="text-h6 font-weight-bold primary--text">
                ミチシルベ
              </span>
            </div>
          </router-link>
        </v-col>
        
        <v-spacer></v-spacer>
        
        <v-col cols="auto" class="d-none d-md-block">
          <nav class="d-flex align-center">
            <v-btn 
              text 
              color="primary" 
              class="mx-2"
              :to="{ name: 'features' }"
            >
              機能
            </v-btn>
            <v-btn 
              text 
              color="primary" 
              class="mx-2"
              :to="{ name: 'how-it-works' }"
            >
              使い方
            </v-btn>
            <v-btn 
              variant="elevated"
              color="primary"
              class="gradient-btn ml-4"
              @click="scrollToDownload"
            >
              ダウンロード
            </v-btn>
          </nav>
        </v-col>
        
        <!-- モバイルメニュー -->
        <v-col cols="auto" class="d-md-none">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  
  <!-- モバイルナビゲーションドロワー -->
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
    location="right"
  >
    <v-list>
      <v-list-item
        :to="{ name: 'home' }"
        @click="drawer = false"
      >
        <v-list-item-title>ホーム</v-list-item-title>
      </v-list-item>
      <v-list-item
        :to="{ name: 'features' }"
        @click="drawer = false"
      >
        <v-list-item-title>機能</v-list-item-title>
      </v-list-item>
      <v-list-item
        :to="{ name: 'how-it-works' }"
        @click="drawer = false"
      >
        <v-list-item-title>使い方</v-list-item-title>
      </v-list-item>
      <v-divider class="my-2"></v-divider>
      <v-list-item @click="scrollToDownload">
        <v-list-item-title class="primary--text font-weight-bold">
          ダウンロード
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    scrollToDownload() {
      this.drawer = false
      if (this.$route.name === 'home') {
        this.$nextTick(() => {
          const element = document.getElementById('download-section')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        })
      } else {
        this.$router.push({ name: 'home' }).then(() => {
          this.$nextTick(() => {
            const element = document.getElementById('download-section')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          })
        })
      }
    }
  }
}
</script>

<style scoped>
.primary--text {
  color: #667eea !important;
}
</style>