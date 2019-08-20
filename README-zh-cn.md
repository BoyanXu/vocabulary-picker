<p align="center">
  <img src="https://i.imgur.com/cLjMml3.png">
</p>

<br/>
<br/>


# Vocabulary Picker 



Vocabulary Picker 是为英语学习者设计的 Chrome 插件。它可以让学习者自由地从网页上摘取想要学习的词汇，短语，同时保存该词汇所处的语境（即该词语所在的句子，和段落，以及该页面的网址）。

Vocabulary Picker 导出的词汇表，可以立即拖入 [Vocabulary Manager](https://github.com/BoyanXu/vocabulary-manager) 进行后续管理。

具体使用方法，参见视频教程：http://www.iqiyi.com/w_19s9sjbog9.html

_Read this page in other languages：_ [English](https://github.com/BoyanXu/vocabulary-picker/blob/master/README.md), [简体中文](https://github.com/BoyanXu/vocabulary-picker/blob/master/README-zh-cn.md), [繁體中文](https://github.com/BoyanXu/vocabulary-picker/blob/master/README-zh-tr.md)

![](https://i.imgur.com/WV7MEnt.png)

<br/>

## 安装

按照如下网页的指导，进行安装： https://github.com/BoyanXu/vocabulary-picker/releases

<br/>

## 摘取词汇

想要摘取一个你感兴趣的词汇，先用**鼠标**选中该词汇，再同时**按下**  `ctrl` + `shift`  + `Q` (Win/ Linux) 或者 `⇧` + `⌃` + `Q`  (Mac)。

摘取成功时，chrome 会弹出提示如下：`Current vocabulary info is : THE_VOCABULARY_YOU_PICKED。**按下** ENTER 键以确认。

<br/>

## 预览词汇表

想要预览目前为止所摘取的全部词汇，用鼠标**点击**在浏览器右上方的 Vocabulary Manager 的图标。

点击后在图标下方会弹出词汇表。

<br/>

## 删除误选词汇

有时在摘取词汇时会出现误选的情况。此时：

1. 点击 Vocabulary Manager 的图标，使词汇表页面弹出。
2. 把鼠标**移动**至要删除的词汇**正上方**
3. **按下**`alt` (Win/ Linux) 或者 `⌥`(Mac)， 同时点击该词汇。

![](https://i.imgur.com/DZE6tzG.gif)


<br/>

## 导出词汇表

**点击** 词汇表上方的 `Export` 按钮，即可导出词汇表。

导出的词汇表，会下载为以 `年-月-日-时-分-秒.json` 命名的文件，例如`2019-8-17-22-53-28.json`。

该文件可被拖至 Vocabulary Manager 的导入页面。

![](https://i.imgur.com/rFeEbnb.gif)


<br/>

## 限制

Vocabulary Picker 摘取词汇和语境受到如下限制，

`摘取词汇`，对任何文本都有效，因而可以同样可以`摘取短语`。

`自动摘取句子`，对以正常英文标点符号分割的句子有效。

`自动摘取段落`，对以如下HTML标签包裹的段落有效：`<p>`, `<li>`, `<h1>`,`<h2>`

<br/>

## 兼容性

Vocabulary Picker 兼容部分优化网页排版的插件，如 [Clearly](https://chrome.google.com/webstore/detail/clearly/odfonlkabodgbolnmmkdijkaeggofoop)，但与另一些不兼容，如 [Just Read](https://github.com/ZachSaucier/Just-Read)。

<br/>

## 插件组合推荐

我强烈推荐把 Vocabulary Picker 和以下两个插件一起使用：

<br/>

### [单词发现者](https://chrome.google.com/webstore/detail/words-discoverer-expand-y/noncaeikjgpbdeoocblijjgegnobogib?hl=zh-CN)

> 突出显示网页上罕见的英语字典词汇和惯用语。促进英语语言学习并扩大词汇量。

<br/>

### [Clearly](https://chrome.google.com/webstore/detail/clearly/odfonlkabodgbolnmmkdijkaeggofoop)

> 单击图标，享受阅读。

<br/>

## 贡献者


@高歌 为 Vocabulary Picker 设计了图标。

@正源 是 Vocabulary Picker 的主要测试者.

@Boyan 设计并实现了 Vocabulary Picker 的架构。


