# ミチシルベ - マーケティングWebサイト設計書

## 1. 概要

### 1.1 目的
- iOS App Store申請時のマーケティングURL用Webサイト
- アプリの魅力と機能を効果的に伝える
- ユーザーの興味を引き、ダウンロードを促進する

### 1.2 ターゲットユーザー
- **プライマリ**: カップル・夫婦（20代後半〜40代）
- **セカンダリ**: 個人でジャーナリングに興味がある方
- **ペルソナ**: コミュニケーション改善に関心があり、デジタルツールを活用する意識の高いカップル

### 1.3 技術要件
- **フレームワーク**: Vue 3 + Composition API
- **UIライブラリ**: Vuetify 3
- **ビルドツール**: Vite
- **ホスティング**: GitHub Pages
- **リポジトリ**: GitHub（パブリック）
- **ドメイン**: michishirube.app または GitHub Pages URL
- **レスポンシブ対応**: 必須（Vuetifyのブレークポイント活用）

## 2. サイト構成

### 2.1 ページ構成
```
/                    # トップページ
├── /features        # 機能詳細ページ
├── /how-it-works    # 使い方ガイド
├── /privacy         # プライバシーポリシー
├── /terms           # 利用規約
└── /support         # サポート・お問い合わせ
```

### 2.2 ナビゲーション
- ヘッダー: ロゴ、機能、使い方、ダウンロード
- フッター: プライバシーポリシー、利用規約、サポート、会社情報

## 3. トップページ設計

### 3.1 ヒーローセクション
```
┌─────────────────────────────────────┐
│ [ロゴ] ナビゲーション    [ダウンロード] │
├─────────────────────────────────────┤
│                                     │
│   ミチシルベ                          │
│   カップルのための                     │
│   コミュニケーションアプリ                │
│                                     │
│   [App Storeからダウンロード]           │
│   [機能を見る]                        │
│                                     │
│            [アプリ画面]                │
└─────────────────────────────────────┘
```

**コピー例**:
- **メインタイトル**: 「ミチシルベ」
- **サブタイトル**: 「カップルのためのコミュニケーションアプリ」
- **キャッチコピー**: 「毎日の記録で、お互いをもっと理解し合おう」

### 3.2 主要機能セクション
```
┌─────────────────────────────────────┐
│           主な機能                    │
├─────────────────────────────────────┤
│  📝      🤖      📊                 │
│ 記録    AIアドバイス  週間レポート        │
│                                     │
│ 気分と出来事を  記録からAIが   感情の変化を │
│ 簡単に記録    個別アドバイス  グラフで分析  │
└─────────────────────────────────────┘
```

### 3.3 使い方セクション
```
┌─────────────────────────────────────┐
│            使い方                     │
├─────────────────────────────────────┤
│  1️⃣ → 2️⃣ → 3️⃣                    │
│ 記録    AI分析   改善                 │
│                                     │
│ 毎日の気分と → AIがあなたに → コミュニケーション │
│ 出来事を記録    最適なアドバイス   が向上します    │
└─────────────────────────────────────┘
```

### 3.4 特徴・メリットセクション
- **プライバシー重視**: パートナーに見られない個人記録
- **AI活用**: 性格タイプとクロノタイプに基づくパーソナライズ
- **科学的アプローチ**: 心理学に基づいたアドバイス
- **継続しやすい**: シンプルで直感的なUI/UX

### 3.5 スクリーンショットセクション
```
┌─────────────────────────────────────┐
│         アプリの画面                   │
├─────────────────────────────────────┤
│ [ホーム画面] [記録画面] [レポート画面]    │
│                                     │
│     実際のアプリ操作感を               │
│     視覚的に訴求                      │
└─────────────────────────────────────┘
```

### 3.6 ダウンロードCTA
```
┌─────────────────────────────────────┐
│      今すぐ始めよう                    │
├─────────────────────────────────────┤
│   [App Store からダウンロード]          │
│                                     │
│   7日間無料でお試しいただけます           │
└─────────────────────────────────────┘
```

## 4. 詳細ページ設計

### 4.1 機能詳細ページ (/features)
1. **記録機能**
   - 気分選択（8段階）
   - 出来事・感情記録
   - 体調記録
   - スクリーンショット付き説明

2. **AIアドバイス機能**
   - パーソナライズされたアドバイス
   - MBTI・クロノタイプ対応
   - 実際のアドバイス例

3. **週間レポート機能**
   - 感情の推移グラフ
   - トレンド分析
   - インサイト表示

4. **パートナー連携機能**
   - 招待・接続方法
   - プライバシー保護
   - パートナー向けアドバイス

### 4.2 使い方ガイド (/how-it-works)
1. **アカウント作成**
2. **プロフィール設定**
3. **初回記録**
4. **パートナー招待**
5. **継続のコツ**

## 5. デザインシステム

### 5.1 カラーパレット
```css
/* プライマリカラー */
--primary-purple: #667eea;
--primary-blue: #764ba2;

/* セカンダリカラー */
--secondary-pink: #f093fb;
--secondary-orange: #f5576c;

/* ニュートラル */
--neutral-900: #1a202c;
--neutral-600: #718096;
--neutral-100: #f7fafc;
--white: #ffffff;

/* アクセント */
--success: #48bb78;
--warning: #ed8936;
--error: #f56565;
```

### 5.2 タイポグラフィ（Vuetifyカスタム）
```scss
// vuetify設定での上書き
$headings: (
  'h1': (
    'font-family': 'Noto Sans JP',
    'font-weight': 700,
    'font-size': 2.5rem
  ),
  'h2': (
    'font-family': 'Noto Sans JP', 
    'font-weight': 600,
    'font-size': 2rem
  ),
  'h3': (
    'font-family': 'Noto Sans JP',
    'font-weight': 600, 
    'font-size': 1.5rem
  )
);

$body-font-family: 'Noto Sans JP';
```

### 5.3 Vuetifyコンポーネント活用
- **v-btn**: グラデーション、elevation、rounded
- **v-card**: outlined、elevation、rounded
- **v-icon**: Material Design Icons（mdi）
- **v-container/v-row/v-col**: レスポンシブレイアウト
- **v-app-bar**: 固定ヘッダー
- **v-footer**: サイトフッター

## 6. コンテンツ戦略

### 6.1 メッセージング
- **メインメッセージ**: 「お互いをもっと理解し合う」
- **サブメッセージ**: 「毎日の記録で関係性向上」
- **差別化ポイント**: AIパーソナライズ、プライバシー重視

### 6.2 コピーライティング指針
- **トーン**: 温かい、寄り添う、信頼できる
- **スタイル**: 分かりやすい、専門用語は避ける
- **長さ**: 簡潔で読みやすい（1文40文字以内）

### 6.3 SEO対策
- **タイトル**: 「ミチシルベ | カップルのためのコミュニケーションアプリ」
- **メタディスクリプション**: 「毎日の記録でお互いを理解し合うカップル向けアプリ。AIが個別アドバイスを提供し、関係性の改善をサポートします。」
- **キーワード**: カップル アプリ, コミュニケーション, 関係性改善, AI アドバイス

## 7. 技術実装

### 7.1 Vue3プロジェクト構造
```
src/
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   └── AppLayout.vue
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── FeaturesSection.vue
│   │   ├── HowItWorksSection.vue
│   │   ├── ScreenshotsSection.vue
│   │   └── DownloadSection.vue
│   ├── ui/
│   │   ├── GradientButton.vue
│   │   ├── FeatureCard.vue
│   │   └── AppStoreButton.vue
│   └── common/
│       ├── AppIcon.vue
│       └── FeatureIcon.vue
├── views/
│   ├── HomeView.vue
│   ├── FeaturesView.vue
│   ├── HowItWorksView.vue
│   ├── PrivacyView.vue
│   ├── TermsView.vue
│   └── SupportView.vue
├── router/
│   └── index.js
├── stores/
│   └── app.js (Pinia)
├── styles/
│   ├── vuetify.scss
│   └── custom.scss
└── plugins/
    └── vuetify.js
```

### 7.2 Vuetify設定例
```javascript
// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#667eea',
          secondary: '#764ba2',
          accent: '#f093fb',
          error: '#f56565',
          warning: '#ed8936',
          success: '#48bb78',
          info: '#4299e1'
        }
      }
    }
  },
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
})
```

### 7.3 主要コンポーネント例
```vue
<!-- components/sections/HeroSection.vue -->
<template>
  <v-container fluid class="hero-section">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" md="6" class="text-center text-md-left">
        <h1 class="display-1 font-weight-bold mb-4">
          ミチシルベ
        </h1>
        <h2 class="headline mb-6">
          カップルのためのコミュニケーションアプリ
        </h2>
        <v-btn
          large
          color="primary"
          class="gradient-btn mr-4 mb-2"
          @click="scrollToDownload"
        >
          App Storeからダウンロード
        </v-btn>
        <v-btn
          large
          outlined
          color="primary"
          class="mb-2"
          @click="scrollToFeatures"
        >
          機能を見る
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <v-img
          :src="heroImage"
          alt="ミチシルベアプリ画面"
          max-width="400"
          class="mx-auto"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
```

### 7.4 必要なアセット
- **アプリアイコン**: 1024x1024px、透明背景版
- **スクリーンショット**: iPhone用 6.5インチ対応
- **ヒーロー画像**: アプリ画面のモックアップ
- **機能アイコン**: Material Design Icons（mdi）
- **App Storeバッジ**: 公式バッジ使用

### 7.5 アナリティクス・SEO
- **Vue Meta/Head**: メタタグ管理
- **Google Analytics 4**: @gtag/vue活用
- **App Store Connect**: ダウンロード数追跡
- **Sitemap生成**: 静的サイト用

## 8. 運用・保守

### 8.1 更新頻度
- **アプリ情報**: アップデート時に同期
- **ブログ/ニュース**: 月1回程度
- **FAQ**: ユーザーからの質問に応じて

### 8.2 A/Bテスト対象
- ヒーローセクションのコピー
- CTAボタンの文言・色
- 機能説明の順序
- スクリーンショットの組み合わせ

### 8.3 多言語対応（将来）
- 英語版サイトの準備
- 国際展開時の対応

## 9. 成功指標（KPI）

### 9.1 主要指標
- **サイト訪問数**: 月間ユニークユーザー数
- **CVR**: サイト訪問からApp Storeクリック率
- **ダウンロード率**: App Storeページからのインストール率
- **直帰率**: 70%以下を目標

### 9.2 セカンダリ指標
- **滞在時間**: 平均2分以上
- **ページビュー/セッション**: 2.5以上
- **リピート率**: 10%以上

## 10. 制作スケジュール

### Phase 1: 基盤構築（1週間）
- Vue 3 + Vite プロジェクト作成
- Vuetify 3 セットアップ・カスタムテーマ設定
- Vue Router設定
- 基本レイアウトコンポーネント作成

### Phase 2: コンテンツ作成（1週間）
- トップページ（HomeView.vue）実装
- 各セクションコンポーネント作成
- 機能詳細ページ実装
- スクリーンショット撮影・編集

### Phase 3: 仕上げ・最適化（3日）
- Vuetifyブレークポイントでレスポンシブ調整
- Vue Meta でSEO最適化
- Vite最適化・バンドルサイズ削減

### Phase 4: デプロイ・テスト（2日）
- GitHubリポジトリ作成・設定
- GitHub Actions ワークフロー設定
- GitHub Pages有効化
- カスタムドメイン設定（オプション）

**総制作期間**: 約2.5週間

## 11. Vue3 + Vuetify追加考慮事項

### 11.1 パフォーマンス最適化
- **Tree Shaking**: Vuetifyコンポーネントの必要分のみインポート
- **Code Splitting**: Vue Routerでページ単位の遅延読み込み
- **Image Optimization**: v-imgでWebP対応、遅延読み込み
- **Bundle Analysis**: @vue/cli-plugin-webpack-bundleanalyzer活用

### 11.2 アクセシビリティ
- **Vuetifyのa11y機能**: 自動でaria属性設定
- **キーボードナビゲーション**: v-btnのfocus管理
- **カラーコントラスト**: Vuetifyテーマでコントラスト比確保
- **スクリーンリーダー対応**: セマンティックHTML + aria-label

### 11.3 開発・テスト
- **Vue DevTools**: 開発時デバッグ
- **Vitest**: Vue3対応テストフレームワーク
- **Cypress**: E2Eテスト（ユーザージャーニー検証）
- **ESLint + Prettier**: Vueファイル対応設定

### 11.4 GitHub Pages デプロイ設定
```javascript
// vite.config.js
export default defineConfig({
  plugins: [vue(), vuetify()],
  base: process.env.NODE_ENV === 'production' 
    ? '/michishirube-marketing/' // GitHubリポジトリ名
    : '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          vuetify: ['vuetify']
        }
      }
    }
  }
})
```

### 11.5 GitHub Actions設定
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 11.6 必要な依存関係
```json
{
  "dependencies": {
    "vue": "^3.3.0",
    "vue-router": "^4.2.0",
    "vuetify": "^3.4.0",
    "@mdi/font": "^7.2.96",
    "pinia": "^2.1.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.4.0",
    "vite": "^4.4.0",
    "vite-plugin-vuetify": "^1.0.0",
    "sass": "^1.69.0"
  }
}
```

## 12. GitHub Pages 特有の設定

### 12.1 リポジトリ設定
```
リポジトリ名: michishirube-marketing
公開設定: Public（GitHub Pages使用のため）
Pages設定: gh-pagesブランチからデプロイ
```

### 12.2 Vue Routerの設定（SPA対応）
```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/features',
      name: 'features', 
      component: () => import('../views/FeaturesView.vue')
    }
    // その他のルート
  ]
})

export default router
```

### 12.3 404.html（GitHub Pages用）
```html
<!-- public/404.html -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ミチシルベ</title>
  <script>
    // GitHub Pages SPAのための404リダイレクト
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/michishirube-marketing/'">
</head>
<body></body>
</html>
```

### 12.4 カスタムドメイン設定
```
// public/CNAME（カスタムドメイン使用時）
michishirube.app
```

### 12.5 GitHub Pages URL構造
- **デフォルトURL**: `https://username.github.io/michishirube-marketing/`
- **カスタムドメイン**: `https://michishirube.app/`
- **SSL/TLS**: 自動対応（Let's Encrypt）

### 12.6 デプロイフロー
1. **開発**: `npm run dev` でローカル開発
2. **ビルド**: `npm run build` で本番ビルド
3. **プッシュ**: `git push origin main`
4. **自動デプロイ**: GitHub Actions が自動実行
5. **公開**: 数分でサイト更新

### 12.7 メリット・デメリット

**メリット:**
- **無料**: 完全無料でホスティング
- **自動デプロイ**: Git pushで自動更新
- **CDN**: GitHubのCDNで高速配信
- **SSL**: 無料SSL証明書
- **独自ドメイン**: カスタムドメイン対応

**考慮点:**
- **パブリックリポジトリ**: ソースコードが公開
- **静的サイト限定**: サーバーサイド処理なし
- **容量制限**: 1GB（十分）
- **帯域制限**: 月間100GB（通常十分）

---

この設計書に基づいて、GitHub Pagesを活用した魅力的でコンバージョン率の高いマーケティングWebサイトを制作できます。Vue3 + Vuetifyの強力な機能と、GitHubの無料ホスティングサービスを組み合わせることで、コストを抑えながら高品質なサイトを運用できます。