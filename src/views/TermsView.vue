<template>
  <div class="terms-page">
    <v-container class="py-16">
      <div class="text-center mb-12">
        <h1 class="text-h2 font-weight-bold mb-4">利用規約</h1>
        <p class="text-body-1 text-grey-darken-1">
          最終更新日：2024年1月1日
        </p>
      </div>
      
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-8" elevation="2" rounded="lg">
            <div class="terms-content">
              <p class="text-body-1 mb-6">
                本利用規約は、ミチシルベ（以下「当アプリ」）の利用条件を定めるものです。
              </p>
              
              <h2 class="text-h4 font-weight-bold mb-4">第1条（適用）</h2>
              <p class="text-body-1 mb-6">
                本規約は、ユーザーと当アプリとの間の当アプリの利用に関わる一切の関係に適用されるものとします。
              </p>
              
              <h2 class="text-h4 font-weight-bold mb-4">第2条（利用登録）</h2>
              <p class="text-body-1 mb-6">
                当アプリにおいては、登録希望者が本規約に同意の上、所定の方法によって利用登録を申請し、当アプリがこれを承認することによって、利用登録が完了するものとします。
              </p>
              
              <h2 class="text-h4 font-weight-bold mb-4">第3条（禁止事項）</h2>
              <p class="text-body-1 mb-4">ユーザーは、当アプリの利用にあたり、以下の行為をしてはなりません。</p>
              <ul class="text-body-1 mb-6">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当アプリのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当アプリによって得られた情報を商業的に利用する行為</li>
                <li>その他、当アプリが不適切と判断する行為</li>
              </ul>
              
              <h2 class="text-h4 font-weight-bold mb-4">第4条（本サービスの提供の停止等）</h2>
              <p class="text-body-1 mb-6">
                当アプリは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              
              <h2 class="text-h4 font-weight-bold mb-4">第5条（著作権）</h2>
              <p class="text-body-1 mb-6">
                ユーザーは、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た文章、画像や映像等の情報に関してのみ、当アプリにアップロードまたは送信することができるものとします。
              </p>
              
              <h2 class="text-h4 font-weight-bold mb-4">第6条（規約の変更）</h2>
              <p class="text-body-1 mb-6">
                当アプリは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
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
  name: 'TermsView'
}
</script>

<style scoped>
.terms-page {
  padding-top: 64px;
}

.terms-content ul {
  list-style: none;
  padding-left: 0;
}

.terms-content ul li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
}

.terms-content ul li:before {
  content: '•';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}
</style>