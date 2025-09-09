# PAS-Next-TS

Next.js 15 + TypeScript + Tailwind CSS を使用したウェブアプリケーションプロジェクトです。

## プロジェクト構成

```
pas-next-ts/
├── public/                    # 静的ファイル
├── src/                       # ソースコード
│   ├── app/                   # Next.js App Router
│   │   ├── (editor)/          # エディター関連ページ
│   │   │   ├── components/    # エディター専用コンポーネント
│   │   │   │   └── EditorHeader/
│   │   │   │       ├── EditorHeader.tsx
│   │   │   │       ├── RunButton.tsx
│   │   │   │       └── SelectorButton.tsx
│   │   │   └── editor/
│   │   │       └── page.tsx   # エディターページ
│   │   ├── (home)/            # ホーム関連ページ
│   │   │   ├── components/    # ホーム専用コンポーネント
│   │   │   │   ├── CreateButton.tsx
│   │   │   │   ├── CreateCard.tsx
│   │   │   │   ├── HomeHeader.tsx
│   │   │   │   └── ProjectCard.tsx
│   │   │   └── page.tsx       # ホームページ
│   │   ├── (login)/           # 認証関連ページ
│   │   │   ├── components/    # 認証専用コンポーネント
│   │   │   │   └── Login.tsx
│   │   │   ├── sign-in/
│   │   │   │   └── page.tsx   # サインインページ
│   │   │   └── sign-up/
│   │   │       └── page.tsx   # サインアップページ
│   │   ├── globals.css        # グローバルスタイル
│   │   └── layout.tsx         # ルートレイアウト
│   └── components/            # 共通コンポーネント
│       ├── Footer.tsx
│       └── HamburgerMenu.tsx
├── eslint.config.mjs         # ESLint設定
├── middleware.ts             # Next.js ミドルウェア
├── next.config.ts            # Next.js設定
├── package.json              # 依存関係とスクリプト
├── postcss.config.mjs        # PostCSS設定
├── tsconfig.json             # TypeScript設定
└── README.md                 # プロジェクト説明書
```

## 技術スタック

- **フレームワーク**: Next.js 15.5.2
- **言語**: TypeScript 5
- **スタイリング**: Tailwind CSS 4
- **ランタイム**: React 19.1.0
- **コード品質**: ESLint

## Getting Started

---

run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

error check (build project)

```bash
npm run build
```

---

## Rules

**開発の進め方**

1. 命名ルールに沿ってブランチを作成
2. 各ブランチで開発
3. エラーチェック(npm run build の成功が必須)
4. Pull Reqest 作成
5. 管理者(ミズノワタル)がレビュー&マージ

注意 main ブランチへの変更は禁止です。Pull Reqest 以降(Merge)は行わないでください。

---

**プルリクエスト作成方法**

### 手順

1. **開発ブランチで作業完了後、GitHub へプッシュ**

   ```bash
   git add .
   git status   余分なファイルがステージングされていないかを確認
   git commit -m "適切なコミットメッセージ"
   git push origin ブランチ名
   ```

2. **GitHub でプルリクエストを作成**

   - GitHub リポジトリページにアクセス
   - 「Compare & pull request」ボタンをクリック
   - base: `main` ← compare: `作業ブランチ`を確認

3. **プルリクエストの詳細を記入**

   - **タイトル**: 変更内容を簡潔に記載
   - **説明**:
     - 変更の概要
     - 変更理由
   - **スクリーンショット**: **必須** - 作成・変更した画面のスクリーンショットを添付

4. **Create pull request をクリック**

### ⚠️ 重要事項

- **スクリーンショットの添付は必須です**
- UI/UX に関わる変更は複数の画面サイズでのスクリーンショットを添付
- 新機能の場合は主要な機能画面のスクリーンショットを添付

---

**ブランチ命名ルール**

### 基本形式

`種類/内容-開発者名`

### ブランチの種類

- `feature/` : 新機能の追加
- `fix/` : バグ修正
- `refactor/` : リファクタリング
- `style/` : スタイル変更（機能に影響しない）
- `docs/` : ドキュメント更新
- `test/` : テスト追加・修正

### 命名例

```
feature/login-page-mizuno
fix/header-layout-mizuno
refactor/components-structure-mizuno
style/button-design-mizuno
docs/readme-update-mizuno
test/user-authentication-mizuno
```

### 注意事項

- 全て小文字で記述
- 単語間は`-`（ハイフン）で区切る
- 内容は英語で簡潔に表現
- 開発者名は必須

---

**コンポーネント命名ルール**

- **コンポーネントファイル名は必ず大文字で開始する**

例: `LoginButton.tsx`, `UserProfile.tsx`, `HomePage.tsx`
