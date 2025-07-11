<template>
  <v-app>
    <AppHeader />
    
    <v-main>
      <router-view />
    </v-main>
    
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
/* グローバルスタイル */
.v-application {
  font-family: 'Noto Sans JP', sans-serif !important;
}

html {
  scroll-behavior: smooth;
}

/* ルートでのスムーズスクロール */
* {
  scroll-behavior: smooth;
}
</style>