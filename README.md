<p align="center">
  <img src="https://i.imgur.com/cLjMml3.png">
</p>

<br/>
<br/>

# Vocabulary Picker 


Vocabulary Picker is a chrome extension designed for English learner that help you collect vocabularies and its context (namely, the sentence and paragraph wrapping it, and the URL pointing to the current page).

The vocabulary lists exported by this extension could be imported into [Vocabulary Manager](https://github.com/BoyanXu/vocabulary-manager) which manages all those collected vocabularies.

Check the Video Tutorial for more help: https://www.youtube.com/watch?v=zhhA5mQWdlw&t=44s

_Read this page in other languages：_ [English](https://github.com/BoyanXu/vocabulary-picker/blob/master/README.md), [简体中文](https://github.com/BoyanXu/vocabulary-picker/blob/master/README-zh-cn.md), [繁體中文](https://github.com/BoyanXu/vocabulary-picker/blob/master/README-zh-tr.md)

![](https://i.imgur.com/WV7MEnt.png)

## Install

Follow instruction on: https://github.com/BoyanXu/vocabulary-picker/releases

<br/>

## Pick Vocabulary

To pick a vocabulary that interested you,  **select** that vocabulary with your cursor, then **press** `ctrl` + `shift` (Win/ Linux) or `⇧` + `⌃` (Mac).

After successfully picked a vocabulary, chrome will alert you with:`Current vocabulary info is : THE_VOCABULARY_YOU_PICKED`. **Press** `enter` to confirm.
<br/>



## Preview the List

To preview the list of picked vocabulary, **click** the icon of vocabulary picker on the extension bar, after which the list will pop up.

<br/>

## Delete from List

While previewing the list of selected vocabulary, in order to delete a accidentally picked vocabulary:

1. First **move the cursor over** that vocabulary (I mean the vocabulary within the 'vocabulary' column, not the whole record)
2. Then **click** the vocabulary while **pressing** `alt` (Win/ Linux) or `⌥`(Mac) to remove that vocabulary from the list.



![](https://i.imgur.com/DZE6tzG.gif)

<br/>


## Export the List

Just **click** on the `Export` button above the list. 

Then, your browser will download a `.json` file named in format of `YYYY-MM-DD-HOUR-MINUTE-SEC.json`, for example: `2019-8-17-22-53-28.json`, which you could drag into vocabulary manager.



![](https://i.imgur.com/rFeEbnb.gif)

<br/>


## Limitation

Function `Pick Vocabulary` works on nearly any web pages.

Function `Pick Sentence` works on sentences properly divided with standard punctuations.

Function `Pick Paragraph` works on paragraphs wrapped within HTML tags: `<p>`, `<li>`, `<h1>`,`<h2>`, ... 

<br/>


## Compatibility

Vocabulary Picker is compatible with some of the extensions that optimize the layout of the web page, like [Clearly](https://chrome.google.com/webstore/detail/clearly/odfonlkabodgbolnmmkdijkaeggofoop), but incompatible with others, like [Just Read](https://github.com/ZachSaucier/Just-Read). 

<br/>

## Extension Recommended

There are two brilliant extensions I strongly recommend use Vocabulary Picker together with:

<br/>


### [Words Discoverer](https://chrome.google.com/webstore/detail/words-discoverer-expand-y/noncaeikjgpbdeoocblijjgegnobogib)

> Highlights rare English dictionary words and idioms on web pages. Facilitates English language learning and expands your vocabulary.
>
> Word Discoverer highlights rare English dictionary words, idioms and proverbs on web pages. It helps non-native English learners to discover new expressions while they are browsing the Internet. 
>
> Highlighting of rare words is useful because some people do not even notice vaguely known words, especially when these words are not critical for understanding of the text that they read. One possible explanation of this strange and pertexing effect is that mind of a reader is concentrated on understanding the meaning and structure of the text, and after finishing reading a sentence many readers won't go back to check the meaning of unfamiliar words that they have already forgot.

<br/>


### [Clearly](https://chrome.google.com/webstore/detail/clearly/odfonlkabodgbolnmmkdijkaeggofoop)

>Every day we spend hours reading articles on the Web. Reading is so essential that we believe it needs to be simple and straightforward. Therefore we create Clearly, our new extension that Chrome missed for so long. You can now focus on your favorite items without ads, floats or any other irrelevant things bothering you anymore. 
>
>Just one click, enjoy your reading.

<br/>


## Contributors

@Ge Gao designed the icon for Vocabulary Picker.

@Zhengyuan is main tester of the Vocabulary Picker.

@Boyan Xu designed the architecture of Vocabulary Picker and implemented it.



