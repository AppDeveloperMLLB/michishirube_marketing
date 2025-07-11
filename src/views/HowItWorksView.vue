<template>
  <div class="how-it-works-page">
    <v-container class="py-16">
      <div class="text-center mb-12">
        <h1 class="text-h2 font-weight-bold mb-4">使い方ガイド</h1>
        <p class="text-h6 text-grey-darken-1">
          ミチシルベの使い方を詳しく説明します
        </p>
      </div>
      
      <v-row>
        <v-col
          v-for="(step, index) in steps"
          :key="step.id"
          cols="12"
          class="mb-6"
        >
          <v-card class="pa-6" elevation="2" rounded="lg">
            <div class="d-flex align-center mb-4">
              <div class="step-number mr-4">
                {{ index + 1 }}
              </div>
              <h2 class="text-h4 font-weight-bold">
                {{ step.title }}
              </h2>
            </div>
            
            <p class="text-h6 mb-4">
              {{ step.description }}
            </p>
            
            <ul class="text-body-1">
              <li
                v-for="detail in step.details"
                :key="detail"
                class="mb-2"
              >
                {{ detail }}
              </li>
            </ul>
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
          今すぐ始める
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HowItWorksView',
  data() {
    return {
      steps: [
        {
          id: 1,
          title: 'アカウント作成',
          description: 'アプリをダウンロードして、アカウントを作成します。',
          details: [
            'App Storeからミチシルベをダウンロード',
            'メールアドレスでアカウント作成',
            '基本的なプロフィール情報を入力',
            'プライバシー設定を確認'
          ]
        },
        {
          id: 2,
          title: 'プロフィール設定',
          description: 'より精度の高いアドバイスのため、詳細なプロフィールを設定します。',
          details: [
            'MBTIタイプを選択（分からない場合は診断可能）',
            'クロノタイプ（朝型・夜型）を選択',
            '関係性の期間や目標を設定',
            'アドバイスの頻度を選択'
          ]
        },
        {
          id: 3,
          title: '初回記録',
          description: '最初の記録を作成し、アプリの使い方に慣れましょう。',
          details: [
            '今日の気分を8段階で選択',
            '印象的な出来事を記録',
            '体調や睡眠状態をチェック',
            'パートナーとの関係性についてメモ'
          ]
        },
        {
          id: 4,
          title: 'パートナー招待',
          description: 'パートナーをアプリに招待し、お互いの理解を深めましょう。',
          details: [
            '招待コードを生成してパートナーに共有',
            'パートナーがアプリをダウンロード',
            'お互いのプロフィールを確認',
            'プライバシー設定について話し合い'
          ]
        },
        {
          id: 5,
          title: '継続のコツ',
          description: '毎日の記録を習慣化し、関係性を向上させるコツをご紹介します。',
          details: [
            '決まった時間に記録する習慣をつける',
            'リマインダー機能を活用',
            '週間レポートを一緒に確認',
            'AIアドバイスを実際に試してみる'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.how-it-works-page {
  padding-top: 64px;
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
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