---
document_title: ドキュメントテンプレート
dest: ./output/ドキュメントテンプレート.pdf
---

<!-- markdownlint-disable MD033 -->
<div class="cover">
  <div class="title">ドキュメントテンプレート</div>
  <div class="version">v1.0.0</div>
  <div class="date">2024-11-30</div>
  <div class="logo">

   ![your logo](/docs/_shared-images/logo.svg)

  </div>
  <div class="copyrights">©2024 dummy All rights reserved.</div>
</div>
<!-- markdownlint-enable MD033 -->

<!-- omit from toc -->
# 目次

- [簡単な構文の例](#簡単な構文の例)
    - [通常の本文](#通常の本文)
    - [段落](#段落)
    - [強調](#強調)
    - [取り消し線](#取り消し線)
    - [見出し](#見出し)
    - [コードブロック](#コードブロック)
    - [インラインコード](#インラインコード)
    - [リンク](#リンク)
    - [画像](#画像)
    - [テーブル](#テーブル)
    - [箇条書き](#箇条書き)
    - [タスクリスト](#タスクリスト)
    - [番号付きリスト](#番号付きリスト)
    - [引用](#引用)
    - [水平線](#水平線)
    - [エスケープ](#エスケープ)
- [参考資料](#参考資料)

# 簡単な構文の例

よく利用する構文について例示します。
その他の構文については以下をご覧ください。

- <https://github.github.com/gfm/>

## 通常の本文

本文は 1 文につき 1 行にしてください。
マークダウン上の改行は PDF 化の時無視されます。

## 段落

空行を入れるとその部分で段落が分割されます。

```md
最初の文。
次の文。

段落分割後の文。
```

これは次のようにレンダリングされます。

最初の文。
次の文。

段落分割後の文。

## 強調

`**` で文字列を囲うと、太字にできます。

```md
明日は**9 時集合**です。
```

これは次のようにレンダリングされます。

明日は**9 時集合**です。

## 取り消し線

チルダ 2 つで囲うと、取り消し線を引けます。

```md
会議室は ~~705~~ 805 です。
```

これは次のようにレンダリングされます。

会議室は ~~705~~ 805 です。

## 見出し

「#」を並べると、見出しを作成できます。

```md
# 見出しレベル 1
## 見出しレベル 2
### 見出しレベル 3
```

Markdown All in One の機能を利用して目次を作成する場合、見出しレベル 3 までが表示されるよう設定してあります。

## コードブロック

コードブロックはバッククォート 3 つで囲ってください。
バッククォートの前後は空行にします。
最初のバッククォートの後ろに言語名を指定することで、きれいなシンタックスハイライトが使えます。

Java の例。

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

C# の例。

```csharp
using System;

class Program
{
    static void Main(int[] args)
    {
        Console.WriteLine("Hello, World!");
    }
}
```

## インラインコード

コードをインラインで表示する場合はバッククォートで囲ってください。

```md
このようにコード `inline code` を行内に埋め込めます。
```

これは次のようにレンダリングされます。

このようにコード `inline code` を行内に埋め込めます。

## リンク

リンク付きの文字列は次のようにしてください。

```md
[リンクの例](https://github.com/tsuna-can-se/md2pdf-doc-template)
```

これは次のようにレンダリングされます。

[リンクの例](https://github.com/tsuna-can-se/md2pdf-doc-template)

URL を `< >` で囲うと、そのままリンクにできます。

```md
<https://github.com/tsuna-can-se/md2pdf-doc-template>
```

これは次のようにレンダリングされます。

<https://github.com/tsuna-can-se/md2pdf-doc-template>

## 画像

画像は draw.io で作成した SVG 画像を使用してください。
画像内に文字を入れる場合は、フォントを `Yu Gothic UI` に、フォントサイズを 16 ポイントに設定してください。

画像の挿入は次のようにします。

```md
![demo 画像](/docs/_document-template/images/demo.svg)
```

これは次のようにレンダリングされます。

![demo 画像](/docs/_document-template/images/demo.svg)

簡単な図は、 [mermaid](https://mermaid.js.org/) で作成できます ( Beta )。
` ```mermaid ～ ``` ` で囲った範囲に mermaid 記法で図を記述できます。
図は次のようにレンダリングできます。

```mermaid
flowchart TD
    開始 --> 終了
```

## テーブル

テーブルは以下のようにしてください。

```md
| ヘッダー 1 | ヘッダー 2 | ヘッダー 3 |
| ---------- | ---------- | ---------- |
| 内容1      | 内容2      | 内容3      |
| 内容4      | 内容5      | 内容6      |
```

これは次のようにレンダリングされます。

| ヘッダー 1 | ヘッダー 2 | ヘッダー 3 |
| ---------- | ---------- | ---------- |
| 内容1      | 内容2      | 内容3      |
| 内容4      | 内容5      | 内容6      |

セル内改行はできません。
セル内に文を書きたい場合は、テーブルではない別の表現方法を検討してください。

## 箇条書き

`-` で作成してください。
半角空白文字を 4 つ入れると、階層構造が作れます。

```md
- 箇条書き 1
- 箇条書き 2
    - 箇条書き 2-1
    - 箇条書き 2-2

      箇条書きの下に文章を追加する場合は、空行を入れてから、半角空白文字を行頭に入れてインデントをそろえます。
      複数文を入れることもできますが、 PDF 化すると 1 行にまとめられます。

- 箇条書き 3
```

これは次のようにレンダリングされます。

- 箇条書き 1
- 箇条書き 2
    - 箇条書き 2-1
    - 箇条書き 2-2

      箇条書きの下に文章を追加する場合は、空行を入れてから、半角空白文字を行頭に入れてインデントをそろえます。
      複数文を入れることもできますが、 PDF 化すると 1 行にまとめられます。

- 箇条書き 3

## タスクリスト

チェックボックスを先頭に持つリストをタスクリストと呼びます。
チェックボックスのオン / オフを設定できます。

```md
- [ ] タスク 1
    - [x] タスク 1-1
    - [ ] タスク 1-2
- [x] タスク 2
```

これは次のようにレンダリングされます。

- [ ] タスク 1
    - [x] タスク 1-1
    - [ ] タスク 1-2
- [x] タスク 2

## 番号付きリスト

`1.` で作成してください。
半角空白文字を 4 つ入れると、階層構造が作れます。

```md
1. 番号付きリスト 1
1. 番号付きリスト 2
    1. 番号付きリスト 2-1
    1. 番号付きリスト 2-2

       番号付きリストの下に文章を追加する場合は、空行を入れてから、半角空白文字を行頭に入れてインデントをそろえます。
       複数文を入れることもできますが、 PDF 化すると 1 行にまとめられます。

1. 番号付きリスト 3
```

これは次のようにレンダリングされます。

1. 番号付きリスト 1
1. 番号付きリスト 2
    1. 番号付きリスト 2-1
    1. 番号付きリスト 2-2

       番号付きリストの下に文章を追加する場合は、空行を入れてから、半角空白文字を行頭に入れてインデントをそろえます。
       複数文を入れることもできますが、 PDF 化すると 1 行にまとめられます。

1. 番号付きリスト 3

## 引用

引用は `>` で作成してください。

```md
> 引用の例です。
> 引用の中には、箇条書きなど別の要素を入れることができます。
>
> - 箇条書き 1
> - 箇条書き 2
```

これは次のようにレンダリングされます。

> 引用の例です。
> 引用の中には、箇条書きなど別の要素を入れることができます。
>
> - 箇条書き 1
> - 箇条書き 2

## 水平線

水平線を引く場合は `***` を利用します。

```md
***
```

これは次のようにレンダリングされます。

***

## エスケープ

半角句読点の文字は、 `\` でエスケープできます。

```md
\# \" \| \( \) \. \"
```

これは次のようにレンダリングされます。

\# \" \| \( \) \. \"

# 参考資料

詳細な構文については、以下をご覧ください。

<https://github.github.com/gfm/>

<!-- cspell:ignore println -->