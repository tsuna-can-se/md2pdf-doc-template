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
/.vscode/extensions.json に設定されている各種拡張機能をインストールしてください。

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

初期状態だと、 /docs/_document-template/contents.md を PDF 化して output/ドキュメントテンプレート.pdf が生成されます。

## ドキュメントの追加方法

### ドキュメントテンプレートのコピーとリネーム

/docs/_document-template フォルダーをコピーして、 /docs フォルダーにリネームして配置してください。
以降、リネーム後のフォルダー名を new-doc として記載します。

### ビルドスクリプトの作成

ドキュメントの PDF 化には npm パッケージの `md-to-pdf` を利用します。
package.json の `scripts` に PDF 化のためのスクリプトを追加してください。
以下テンプレートです。

```json
{
  "scripts": {
    "build:<document-name>": "npx md-to-pdf --config-file ./md-to-pdf-config.json ./docs/<document-name>/contents.md",
  }
}
```

### ドキュメントの作成

/docs/new-doc/contents.md を編集してドキュメントを作成します。
Markdown は、おおよそ [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/) 形式に従います。
詳細は [ドキュメントテンプレート](/docs/_document-template/contents.md) を参照してください。

### 自動ビルドの設定



## Authors

[tsuna-can-se](https://github.com/tsuna-can-se)

## License

[MIT License](/LICENSE)
