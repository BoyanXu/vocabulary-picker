class vocabularyInfo {
    constructor(selected_vocabulary, selected_sentence, selected_paragraph) {
        this.vocabulary = selected_vocabulary;
        this.sentence = selected_sentence;
        this.paragraph = selected_paragraph;
    }
}

function getSelectedVocabulary(selectedNode) {
    return selectedNode.toString()
}

function getSelectedSentence(paragraph, vocabulary) {
    sentences = paragraph.match(/[^\.!\?]+[\.!\?]+/g);
    for (var index in sentences) {
        sentence = sentences[index];
        if (sentence.includes(vocabulary)) {
            return sentence
        }
    }
}

function getSelectedParagraph(anchorNode) {
    curNode = anchorNode;
    validName = ['P', 'LI', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
    while (curNode.nodeName !== "BODY") {
        if (validName.includes(curNode.nodeName)) {
            return curNode.textContent
        } else {
            curNode = curNode.parentNode
        }
    }
    return ""
}

function getSelectedInfo() {
    selectedNode = window.getSelection();

    if (selectedNode.anchorNode == null) {  // handle exception 1: nothing selected
        return null
    }

    let selected_vocabulary = getSelectedVocabulary(selectedNode);
    let selected_paragraph = getSelectedParagraph(selectedNode.anchorNode);
    let selected_sentence = getSelectedSentence(selected_paragraph, selected_vocabulary);
    return new vocabularyInfo(selected_vocabulary, selected_sentence, selected_paragraph)
}

function saveSelection() {
    let vocabularyInfo = getSelectedInfo();

    if (vocabularyInfo == null) {   // handle exception 1: nothing selected
        return null;
    } else {
        var VocabularyList = JSON.parse(localStorage.vocabularyList);
        VocabularyList.push(vocabularyInfo);
        localStorage.vocabularyList = JSON.stringify(VocabularyList)
    }
}

function onSelection(signal, sender, sendResponse) {
    switch (signal.action) {
        case 'save':
            saveSelection();
            return true;
    }
}

function initContentScript() {
    chrome.runtime.onMessage.addListener(onSelection);
    // initialize the vocabularyList
    localStorage.vocabularyList = JSON.stringify([]);
    // chrome.runtime.sendMessage({'init': true}, onSelection);
    // let randint = Math.random();
    // chrome.storage.sync.set({"random number": randint}, function() {
    //   console.log('Random number is ' + randint);
    // });
    // chrome.storage.sync.get(["random number"], function(randint){
    //   console.log("fetch from local storage: " + randint);
    // });
    // document.addEventListener('keydown', function(evt) {
    //   if (!document.hasFocus()) {
    //     return true;
    //   }
    //   return true;
    // }, false);
}

initContentScript();
