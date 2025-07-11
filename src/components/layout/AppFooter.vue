<template>
  <v-footer color="grey-darken-4" class="text-white">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="d-flex align-center mb-4">
            <v-icon size="24" color="white" class="mr-2">
              mdi-compass
            </v-icon>
            <span class="text-h6 font-weight-bold">ミチシルベ</span>
          </div>
          <p class="text-body-2 mb-0">
            カップルのためのコミュニケーションアプリ<br>
            毎日の記録で、お互いをもっと理解し合おう
          </p>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="6">
              <h4 class="text-subtitle-1 font-weight-bold mb-3">サービス</h4>
              <ul class="text-body-2" style="list-style: none; padding-left: 0;">
                <li class="mb-1">
                  <router-link 
                    to="/features" 
                    class="text-white text-decoration-none"
                    style="opacity: 0.8;"
                  >
                    機能紹介
                  </router-link>
                </li>
                <li class="mb-1">
                  <router-link 
                    to="/how-it-works" 
                    class="text-white text-decoration-none"
                    style="opacity: 0.8;"
                  >
                    使い方
                  </router-link>
                </li>
              </ul>
            </v-col>
            
            <v-col cols="6">
              <h4 class="text-subtitle-1 font-weight-bold mb-3">サポート</h4>
              <ul class="text-body-2" style="list-style: none; padding-left: 0;">
                <li class="mb-1">
                  <router-link 
                    to="/privacy" 
                    class="text-white text-decoration-none"
                    style="opacity: 0.8;"
                  >
                    プライバシーポリシー
                  </router-link>
                </li>
                <li class="mb-1">
                  <router-link 
                    to="/terms" 
                    class="text-white text-decoration-none"
                    style="opacity: 0.8;"
                  >
                    利用規約
                  </router-link>
                </li>
                <li class="mb-1">
                  <router-link 
                    to="/support" 
                    class="text-white text-decoration-none"
                    style="opacity: 0.8;"
                  >
                    お問い合わせ
                  </router-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      
      <v-divider class="my-4" color="white" style="opacity: 0.2;"></v-divider>
      
      <v-row align="center">
        <v-col cols="12" md="6">
          <p class="text-body-2 mb-0" style="opacity: 0.6;">
            © 2024 ミチシルベ. All rights reserved.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="text-md-right">
          <div class="d-flex justify-center justify-md-end">
            <v-btn
              icon
              variant="text"
              size="small"
              color="white"
              class="mx-1"
              style="opacity: 0.6;"
            >
              <v-icon size="20">mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="text"
              size="small"
              color="white"
              class="mx-1"
              style="opacity: 0.6;"
            >
              <v-icon size="20">mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="text"
              size="small"
              color="white"
              class="mx-1"
              style="opacity: 0.6;"
            >
              <v-icon size="20">mdi-facebook</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>