# GRITTY株式会社 コーポレートサイト

Astro + Tailwind CSS + Decap CMS で構築したコーポレートサイトです。
先方がブラウザからニュース投稿・基本情報の編集を行えるCMS（管理画面）を同梱しています。

## 構成

| 項目 | 内容 |
|---|---|
| フレームワーク | Astro 4（静的出力） |
| スタイル | Tailwind CSS 3 |
| CMS | Decap CMS（`/admin/` でアクセス、無料） |
| フォーム | Netlify Forms（お問い合わせフォーム） |
| ホスティング | Netlify |

## ページ

- `/` トップ（ヒーロー / 測定サイクル / 3事業 / プロダクト / 代表メッセージ / ニュース）
- `/services/` 事業内容（Sports Science / Digital Solutions / Creative & Events / 導入フロー）
- `/company/` 会社概要（理念 / 代表メッセージ / 会社情報）
- `/news/` ニュース一覧・詳細（CMSから投稿）
- `/contact/` お問い合わせ（Netlify Forms + LINE + メール）
- `/admin/` CMS管理画面

## ⚠️ 重要：デプロイ方式について

**CMSを動かすには、zipドラッグ&ドロップではなく「GitHubリポジトリ連携」でのデプロイが必須です。**
CMSは「管理画面での編集 → GitHubにコミット → Netlifyが自動再ビルド」という仕組みで動くためです。

## セットアップ手順

### 1. GitHubリポジトリ作成 & プッシュ

```bash
cd gritty-site
git init
git add -A
git commit -m "initial commit"
# GitHubで空リポジトリ（例: gritty-site）を作成してから
git remote add origin https://github.com/<アカウント名>/gritty-site.git
git branch -M main
git push -u origin main
```

### 2. Netlifyでサイト作成（Git連携）

1. Netlify → **Add new site → Import an existing project** → GitHub → `gritty-site` を選択
2. ビルド設定は `netlify.toml` に記載済みのため自動認識されます
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy をクリック

### 3. CMSの有効化（Netlify Identity + Git Gateway）

1. Netlifyのサイト管理画面 → **Site configuration → Identity → Enable Identity**
2. **Identity → Registration** を「**Invite only**」に設定（重要：誰でも登録できる状態を防ぐ）
3. **Identity → Services → Git Gateway → Enable Git Gateway**
4. **Identity → Invite users** で先方のメールアドレスを招待
5. 先方が招待メールのリンクからパスワードを設定 → `https://<サイトURL>/admin/` でログイン

### 4. お問い合わせフォームの通知設定

1. Netlify → **Forms** に `contact` フォームが自動検出されます
2. **Forms → Form notifications → Email notification** で通知先（info@gritty.co.jp）を設定

## CMSでできること（先方向け）

`https://<サイトURL>/admin/` にログインすると：

- **ニュース**：記事の新規作成・編集・削除（タイトル / 日付 / カテゴリ / 本文 / 画像添付）
- **サイト設定**：住所・電話・メール・LINE URL・トップのキャッチコピー・代表メッセージの編集

保存すると自動でGitHubにコミットされ、1〜2分でサイトに反映されます。

## ローカル開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的出力
```

## デザイントークン

営業提案資料（Sports Science Support）のデザイン言語に準拠：

| トークン | 値 | 用途 |
|---|---|---|
| `ink` | `#0E1F2B` | ダーク背景・本文 |
| `panel` | `#14293A` | ダークパネル |
| `teal` | `#0FA894` | 見出し・リンク（ライト背景） |
| `cyan` | `#35D6DB` | ロゴ色・アクセント（ダーク背景） |
| `gold` | `#C8A45D` | 強調・セカンダリアクセント |
| `cream` | `#F4F0E8` | ライトセクション背景 |

フォント：Zen Kaku Gothic New（見出し）/ Noto Sans JP（本文）/ Space Grotesk（英字ラベル）

## ロゴ画像

`public/images/` に透過処理済みロゴを配置：

- `logo-cyan.png` … ダーク背景用（ヘッダー・フッターで使用中）
- `logo-navy.png` … ライト背景用
- `logo-white.png` … 白抜き
- `favicon.png` … ファビコン

## カスタムドメイン（gritty.co.jp）

Netlify → **Domain management → Add a domain** で `gritty.co.jp` を追加し、DNSのA/CNAMEレコードをNetlify指定値に変更してください。SSLは自動発行されます。
