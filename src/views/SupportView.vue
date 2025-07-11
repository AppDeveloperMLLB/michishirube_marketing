<template>
  <div class="support-page">
    <v-container class="py-16">
      <div class="text-center mb-12">
        <h1 class="text-h2 font-weight-bold mb-4">サポート・お問い合わせ</h1>
        <p class="text-h6 text-grey-darken-1">
          ご質問やご要望がございましたら、お気軽にお問い合わせください
        </p>
      </div>
      
      <v-row>
        <v-col cols="12" md="6" class="mb-8">
          <v-card class="pa-6 h-100" elevation="2" rounded="lg">
            <div class="text-center mb-4">
              <v-icon size="48" color="primary" class="mb-2">
                mdi-help-circle
              </v-icon>
              <h3 class="text-h5 font-weight-bold">よくある質問</h3>
            </div>
            
            <v-expansion-panels variant="accordion">
              <v-expansion-panel
                v-for="faq in faqs"
                :key="faq.id"
                :title="faq.question"
                :text="faq.answer"
              />
            </v-expansion-panels>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card class="pa-6 h-100" elevation="2" rounded="lg">
            <div class="text-center mb-4">
              <v-icon size="48" color="primary" class="mb-2">
                mdi-email
              </v-icon>
              <h3 class="text-h5 font-weight-bold">お問い合わせフォーム</h3>
            </div>
            
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="form.name"
                :rules="nameRules"
                label="お名前"
                required
                outlined
                class="mb-4"
              />
              
              <v-text-field
                v-model="form.email"
                :rules="emailRules"
                label="メールアドレス"
                required
                outlined
                class="mb-4"
              />
              
              <v-select
                v-model="form.category"
                :items="categories"
                label="お問い合わせ種別"
                required
                outlined
                class="mb-4"
              />
              
              <v-textarea
                v-model="form.message"
                :rules="messageRules"
                label="お問い合わせ内容"
                required
                outlined
                rows="6"
                class="mb-4"
              />
              
              <div class="text-center">
                <v-btn
                  color="primary"
                  class="gradient-btn"
                  size="large"
                  :disabled="!valid"
                  @click="submitForm"
                >
                  送信する
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'SupportView',
  data() {
    return {
      valid: true,
      form: {
        name: '',
        email: '',
        category: '',
        message: ''
      },
      nameRules: [
        v => !!v || 'お名前は必須です'
      ],
      emailRules: [
        v => !!v || 'メールアドレスは必須です',
        v => /.+@.+\..+/.test(v) || 'メールアドレスの形式が正しくありません'
      ],
      messageRules: [
        v => !!v || 'お問い合わせ内容は必須です',
        v => (v && v.length >= 10) || 'お問い合わせ内容は10文字以上で入力してください'
      ],
      categories: [
        'アプリの使い方について',
        '不具合の報告',
        '新機能の要望',
        'その他'
      ],
      faqs: [
        {
          id: 1,
          question: 'アプリは無料で使えますか？',
          answer: '7日間の無料トライアルをご用意しています。その後は月額プランでご利用いただけます。'
        },
        {
          id: 2,
          question: 'パートナーに記録内容は見られますか？',
          answer: 'いいえ、個人の記録内容は完全にプライベートで、パートナーには見えません。'
        },
        {
          id: 3,
          question: 'データのバックアップはどうなりますか？',
          answer: 'すべてのデータはクラウドに安全に保存され、自動的にバックアップされます。'
        },
        {
          id: 4,
          question: 'アプリを削除するとデータは消えますか？',
          answer: 'アプリを削除しても、アカウントが残っている限りデータは保持されます。'
        },
        {
          id: 5,
          question: 'AIアドバイスの精度はどの程度ですか？',
          answer: '継続的に学習するAIにより、使用するほど精度が向上します。'
        }
      ]
    }
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // 実際のフォーム送信処理をここに実装
        alert('お問い合わせを送信しました。ありがとうございます！')
        this.resetForm()
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        category: '',
        message: ''
      }
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
.support-page {
  padding-top: 64px;
}
</style>