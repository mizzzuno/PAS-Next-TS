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
│       └── HamburgerMenue.tsx
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

1. 名付けルールに沿ってブランチを作成
2. 各ブランチで開発
3. エラーチェック(npm run build)
4. Pull Reqest作成
5. 管理者(ミズノワタル)がレビュー&マージ

注意 mainブランチへの変更は禁止です。(できないと思います。)

---
**ブランチ　名付け** 

変更内容-名前

例  

    RunButton-mizuno
    
    HomePage-mizuno
