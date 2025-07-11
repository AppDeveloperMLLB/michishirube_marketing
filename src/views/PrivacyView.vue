<template>
  <div class="privacy-page">
    <v-container class="py-16">
      <div class="text-center mb-12">
        <h1 class="text-h2 font-weight-bold mb-4">プライバシーポリシー</h1>
        <p class="text-body-1 text-grey-darken-1">
          最終更新日：2024年1月1日
        </p>
      </div>
      
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-8" elevation="2" rounded="lg">
            <div class="privacy-content">
              <h2 class="text-h4 font-weight-bold mb-4">はじめに</h2>
              <p class="text-body-1 mb-6">
                ミチシルベ（以下「当アプリ」）は、ユーザーの皆様のプライバシーを最重要視しております。本プライバシーポリシーでは、当アプリにおける個人情報の取扱いについて説明いたします。
              </p>
              
              <h2 class="text-h4 font-weight-bold mb-4">収集する情報</h2>
              <p class="text-body-1 mb-4">当アプリでは、以下の情報を収集いたします：</p>
              <ul class="text-body-1 mb-6">
                <li>アカウント情報（メールアドレス、ユーザー名）</li>
                <li>プロフィール情報（年齢、性別、MBTIタイプなど）</li>
                <li>記録データ（気分、出来事、体調など）</li>
                <li>利用状況データ（アプリの使用状況、エラーログなど）</li>
              </ul>
              
              <h2 class="text-h4 font-weight-bold mb-4">情報の利用目的</h2>
              <p class="text-body-1 mb-4">収集した情報は、以下の目的で利用いたします：</p>
              <ul class="text-body-1 mb-6">
                <li>アプリの基本機能の提供</li>
                <li>AIアドバイスの生成</li>
                <li>レポート機能の提供</li>
                <li>サービスの改善と最適化</li>
                <li>カスタマーサポートの提供</li>
              </ul>
              
              <h2 class="text-h4 font-weight-bold mb-4">情報の共有</h2>
              <p class="text-body-1 mb-6">
                当アプリでは、ユーザーの個人情報を第三者と共有することはありません。ただし、法的義務がある場合や、ユーザーの同意がある場合を除きます。
              </p>
              
              <h2 class="text-h4 font-weight-bold mb-4">セキュリティ</h2>
              <p class="text-body-1 mb-6">
                当アプリでは、ユーザーの個人情報を保護するため、適切な技術的・組織的セキュリティ対策を実施しております。
              </p>
              
              <h2 class="text-h4 font-weight-bold mb-4">お問い合わせ</h2>
              <p class="text-body-1 mb-6">
                本プライバシーポリシーに関するご質問がございましたら、サポートページよりお問い合わせください。
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'PrivacyView'
}
</script>

<style scoped>
.privacy-page {
  padding-top: 64px;
}

.privacy-content ul {
  list-style: none;
  padding-left: 0;
}

.privacy-content ul li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
}

.privacy-content ul li:before {
  content: '•';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}
</style>