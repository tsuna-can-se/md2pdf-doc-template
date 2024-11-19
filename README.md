<!-- cspell:ignore tsuna -->
# md2pdf-doc-template

This is a template for a repository that manages documents in Markdown.
It includes a feature to convert Markdown to PDF.

md2pdf-doc-template は、ドキュメントを Markdown 形式で管理するためのリポジトリテンプレートです。
Markdown ファイルを PDF 形式に変換する機能を含んでいます。

ドキュメントを Markdown 形式で管理することで、 Git などの構成管理システムで、ファイルの差分を管理することが容易になります。
またプルリクエストを利用することで、レビューを効率的に行えます。

このリポジトリテンプレートには、ドキュメントの体裁を保つための設定が施されています。
プルリクエストと同時に、体裁の確認が可能です。
またローカル開発環境でも、同様の確認ができます。
既定では、日本語のドキュメントを作成するのに特化した設定が行われています。

## Getting Started

### 前提条件

このリポジトリテンプレートの利用には、以下のソフトウェアを事前にインストールする必要があります。

- Visual Studio Code
- Node.js (npm 含む)

> [!NOTE]
> 既定では、 Windows 環境で動作するように設定されています。
> Windows 以外の環境をご利用の場合は、 /docs/base-style.css と md-to-pdf-config.js のフォント設定を調整してください。

### テンプレートを用いたリポジトリの作成

GitHub 上で、このリポジトリをテンプレートとしたご自身のリポジトリを作成します。

T.B.D.

リポジトリを作成したら、ローカルマシンにクローンしてください。

### 必要なソフトウェアのインストール

リポジトリのルートディレクトリで、以下のコマンドを実行してください。

```plane
npm ci
```

続いて、 Visual Studio Code の拡張機能をインストールします。
\/\.vscode\/extensions.json に設定されている各種拡張機能をインストールしてください。

### ドキュメントの体裁確認

リポジトリのルートディレクトリで以下のコマンドを実行してください。

```plane
npm run lint
```

### ドキュメントの PDF 化

リポジトリのルートディレクトリで以下のコマンドを実行してください。

```plane
npm run build
```

初期状態だと、 \/docs\/\_document-template\/contents.md を PDF 化して \/output\/ドキュメントテンプレート.pdf が生成されます。

## ドキュメントの追加方法

### ドキュメントテンプレートのコピーとリネーム

\/docs\/\_document-template フォルダーをコピーして、 \/docs フォルダー配下にリネームして配置してください。
フォルダー名は、作成するドキュメントの英語名としてください。
以降、リネーム後のフォルダー名を new-doc として記載します。

### ビルドスクリプトの作成

ドキュメントの PDF 化には npm パッケージの `md-to-pdf` を利用します。
package.json の `scripts` に PDF 化のための以下のスクリプトを追加してください。

```json
{
  "scripts": {
    "build:<ドキュメントの英語名>": "npx md-to-pdf --config-file ./md-to-pdf-config.json ./docs/<ドキュメントの英語名>/contents.md",
  }
}
```

ドキュメントの英語名が new-doc の場合、以下のようなスクリプトを追加します。

```json
{
  "scripts": {
    "build:new-doc": "npx md-to-pdf --config-file ./md-to-pdf-config.json ./docs/new-doc/contents.md",
  }
}
```

これにより、 new-doc を PDF 化する `npm run build:new-doc` コマンドが使えるようになります。
また `npm run build` 実行時に、 new-doc も PDF 化されるようになります。

> [!NOTE]
> 各ドキュメントのディレクトリ構造を変更する場合は、 `md-to-pdf` に渡す Markdown ファイルのパス階層を調整してください。

### ドキュメントの執筆

\/docs\/new-doc\/contents.md を編集してドキュメントを執筆します。
Markdown の方言は、おおよそ [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/) 形式に従います。
基本的な構文例は [ドキュメントテンプレート](/docs/_document-template/contents.md) を参照してください。

### 自動ビルドの設定

ドキュメントの単位で GitHub Actions のワークフローファイルを作成します。
\/\.github\/workflows\/ci-document-template-build.yml をコピーして、 \/\.github\/workflows フォルダー配下にリネームして配置してください。
ファイル名は「ci\-\<ドキュメントの英語名\>\-build.yml」としてください。
この例では「ci-new-doc-build.yml」とします。

コピーしたワークフローを以下のように修正します。

```yaml
# ドキュメント名を設定します。
name: <ドキュメント名>のビルド

on:
  pull_request:
    branches: [main]
    paths:
      # ドキュメントの英語名を以下 2 行に設定します。
      - ".github/workflows/ci-<ドキュメントの英語名>-build.yml"
      - "docs/<ドキュメントの英語名>/**"
      - "docs/_shared-images/**"
      - "docs/base-style.css"
      - "package-lock.json"
      - "package.json"
  workflow_dispatch:

jobs:
  build:
    name: ドキュメントのビルド
    runs-on: windows-latest
    steps:
      - name: ブランチのチェックアウト
        uses: actions/checkout@v4
        with:
          fetch-depth: 1
          lfs: true

      - id: build-document
        name: ドキュメントのビルドとアップロード（PR時は除く）
        uses: ./.github/workflows/build-document
        with:
          # ドキュメント名を設定します。
          build-script-name: "build:<ドキュメントの英語名>"
```

## ドキュメントの外観設定

PDF 化する際のページ設定は、 \/md-to-pdf-config.js にあります。
ページサイズ、ページ内の余白、ヘッダー・フッターのテンプレートとスタイル設定などの項目があります。
詳細は [md-to-pdf の README](https://github.com/simonhaenisch/md-to-pdf) をご覧ください。

ページ内の細かなスタイル設定は、 \/docs\/base-style.css で調整します。
base-style.css には、すべてのドキュメントに対して適用する CSS クラスが定義されています。
スタイルを調整したい場合は、 md-to-pdf を `--devtools` オプション付きで実行し、 PDF に変換する前の HTML を確認してください。

これらのファイルは、リポジトリ内で管理するすべてのドキュメントに対して影響を与えます。

## Lint ツールの設定

### markdownlint

markdownlint は、 Markdown の構文を統一するための検証ツールです。
markdownlint の設定ファイルは以下の 2 つです。

- \.markdownlint-cli2.jsonc
- \.markdownlint.yaml

\.markdownlint-cli2.jsonc には、検証対象のファイルが設定されています。
詳細は [GitHub | markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) をご覧ください。

\.markdownlint.yaml には、 markdownlint の検証設定があります。
詳細は [GitHub | markdownlint](https://github.com/DavidAnson/markdownlint) をご覧ください。

### textlint

textlint は、冗長な文章の検出や、単語レベルでの表記揺れ検出など、日本語の体裁を自動的に検証するツールです。
あらかじめ、いくつかのプラグインが有効になっています。
textlint の設定ファイルは以下の 1 つです。

- \.textlintrc

\.textlintrc には、 textlint の検証設定があります。
詳細は [GitHub | textlint](https://github.com/textlint/textlint) をご覧ください。

### CSpell

CSpell は、主に英単語のスペルミスを検出するツールです。
CSpell の設定ファイルは以下の 1 つです。

- cspell.json

cspell.json には、検証対象のファイルが設定されています。

## Authors

[tsuna-can-se](https://github.com/tsuna-can-se)

## License

[MIT License](/LICENSE)
