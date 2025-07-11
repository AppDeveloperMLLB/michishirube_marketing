# ミチシルベ マーケティングサイト

カップルのためのコミュニケーションアプリ「ミチシルベ」のマーケティングWebサイトです。

## 技術スタック

- **フレームワーク**: Vue 3 + Composition API
- **UIライブラリ**: Vuetify 3
- **ビルドツール**: Vite
- **ルーティング**: Vue Router 4
- **ホスティング**: GitHub Pages

## セットアップ

### 必要な環境
- Node.js 18以上
- npm

### インストール
```bash
npm install
```

### 開発サーバーの起動
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

### プレビュー
```bash
npm run preview
```

## プロジェクト構成

```
src/
├── components/
│   ├── layout/          # ヘッダー、フッターなど
│   ├── sections/        # ページセクション
│   ├── ui/             # 再利用可能なUIコンポーネント
│   └── common/         # 共通コンポーネント
├── views/              # ページコンポーネント
├── router/             # Vue Router設定
├── plugins/            # Vuetify設定
└── styles/             # カスタムスタイル
```

## デプロイ

このプロジェクトはGitHub Pagesに自動デプロイされます：

1. `main`ブランチにプッシュ
2. GitHub Actionsが自動的にビルド・デプロイを実行
3. `https://username.github.io/michishirube-marketing/`でアクセス可能

## カスタムドメイン

カスタムドメインを使用する場合：

1. `public/CNAME`ファイルにドメインを記載
2. GitHubリポジトリのSettings > Pagesでドメインを設定

## 機能

- レスポンシブデザイン（Vuetifyブレークポイント使用）
- SEO最適化
- アクセシビリティ対応
- パフォーマンス最適化（コード分割、遅延読み込み）

## ライセンス

このプロジェクトは[MIT License](LICENSE)の下で公開されています。