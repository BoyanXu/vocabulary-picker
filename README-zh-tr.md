<p align="center">
  <img src="https://i.imgur.com/cLjMml3.png">
</p>

<br/>
<br/>


# Vocabulary Picker 



Vocabulary Picker 是為英語學習者設計的 Chrome 插件。它可以讓學習者自由地從網頁上摘取想要學習的詞匯，短語，同時保存該詞匯所處的語境（即該詞語所在的句子，和段落，以及該頁面的網址）。

Vocabulary Picker 導出的詞匯表，可以立即拖入 [Vocabulary Manager](https://github.com/BoyanXu/vocabulary-manager) 進行後續管理。

具體使用方法，參見視頻教程：http://www.iqiyi.com/w_19s9sjbog9.html

_Read this page in other languages：_ [English](https://github.com/BoyanXu/vocabulary-picker/blob/master/README.md), [簡體中文](https://github.com/BoyanXu/vocabulary-picker/blob/master/README-zh-cn.md), [繁體中文](https://github.com/BoyanXu/vocabulary-picker/blob/master/README-zh-tr.md)

<br/>

## 安裝

按照如下網頁的指導，進行安裝： https://github.com/BoyanXu/vocabulary-manager/releases。

<br/>

## 摘取詞匯

想要摘取一個你感興趣的詞匯，先用**鼠標**選中該詞匯，再同時**按下**  `ctrl` + `shift` (Win/ Linux) 或者 `⇧` + `⌃` (Mac)。

摘取成功時，chrome 會彈出提示如下：`Current vocabulary info is : THE_VOCABULARY_YOU_PICKED。**按下** ENTER 鍵以確認。

<br/>

## 預覽詞匯表

想要預覽目前為止所摘取的全部詞匯，用鼠標**點擊**在瀏覽器右上方的 Vocabulary Manager 的圖標。

點擊後在圖標下方會彈出詞匯表。

<br/>

## 刪除誤選詞匯

有時在摘取詞匯時會出現誤選的情況。此時：

1. 點擊 Vocabulary Manager 的圖標，使詞匯表頁面彈出。
2. 把鼠標**移動**至要刪除的詞匯**正上方**
3. **按下**`alt` (Win/ Linux) 或者 `⌥`(Mac)， 同時點擊該詞匯。

![](https://i.imgur.com/DZE6tzG.gif)


<br/>

## 導出詞匯表

**點擊** 詞匯表上方的 `Export` 按鈕，即可導出詞匯表。

導出的詞匯表，會下載為以 `年-月-日-時-分-秒.json` 命名的文件，例如`2019-8-17-22-53-28.json`。

該文件可被拖至 Vocabulary Manager 的導入頁面。

![](https://i.imgur.com/rFeEbnb.gif)


<br/>

## 限制

Vocabulary Picker 摘取詞匯和語境受到如下限制，

`摘取詞匯`，對任何文本都有效，因而可以同樣可以`摘取短語`。

`自動摘取句子`，對以正常英文標點符號分割的句子有效。

`自動摘取段落`，對以如下HTML標簽包裹的段落有效：`<p>`, `<li>`, `<h1>`,`<h2>`

<br/>

## 兼容性

Vocabulary Picker 兼容部分優化網頁排版的插件，如 [Clearly](https://chrome.google.com/webstore/detail/clearly/odfonlkabodgbolnmmkdijkaeggofoop)，但與另一些不兼容，如 [Just Read](https://github.com/ZachSaucier/Just-Read)。

<br/>

## 插件組合推薦

我強烈推薦把 Vocabulary Picker 和以下兩個插件一起使用：

<br/>

### [Words Discoverer](https://chrome.google.com/webstore/detail/words-discoverer-expand-y/noncaeikjgpbdeoocblijjgegnobogib)

> 高亮當前網頁內不常見的短語和慣用語，幫助英語學習者擴大自己的詞匯量。

<br/>

### [Clearly](https://chrome.google.com/webstore/detail/clearly/odfonlkabodgbolnmmkdijkaeggofoop)

> 單擊圖標，享受閱讀。

<br/>

## 貢獻者


@高歌 為 Vocabulary Picker 設計了圖標。

@正源 是 Vocabulary Picker 的主要測試者.

@Boyan 設計並實現了 Vocabulary Picker 的架構。