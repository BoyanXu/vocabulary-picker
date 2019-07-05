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
    let sentences = paragraph.match(/[^\.!\?]+[\.!\?]+/g);
    for (var index in sentences) {   // TODO: check correctness
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

function saveVocabularyInfo(message) {
    let vocabularyInfo = getSelectedInfo();
    alert("Current vocabulary info is : " + vocabularyInfo.vocabulary);
    if (vocabularyInfo !== null) {
        // var VocabularyList = JSON.parse(localStorage.vocabularyList);

        // Store to local chrome
        chrome.storage.local.get(['VocabularyList'], (result) => {
            VocabularyList = result.VocabularyList;
            alert("latest local storage loaded, which is: " + JSON.stringify(VocabularyList));
            vocabularyInfo.index = VocabularyList.length;
            VocabularyList.push(vocabularyInfo);
            chrome.storage.local.set({'VocabularyList': VocabularyList }, () => { alert("Vocabulary local storage updated, which should be : " + JSON.stringify(VocabularyList)) })
        });
        // Store to current tab
        vocabularyList4Tab = JSON.parse(localStorage.vocabularyList4Tab);
        vocabularyInfo.index = vocabularyList4Tab.length;
        vocabularyList4Tab.push(vocabularyInfo);
        localStorage.vocabularyList4Tab = JSON.stringify(vocabularyList4Tab);
    }
}

function initContentScript() {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "save") {
            saveVocabularyInfo();
            return true;
        }
    });

    localStorage.vocabularyList4Tab = JSON.stringify([]);
    try {
        chrome.storage.local.get(['VocabularyList'],(items) => {
            alert('Settings retrieved', items);});
    } catch (eor) {
        alert(eor);
        chrome.storage.local.set({'VocabularyList': [] }, () => { alert("Vocabulary local storage initialized") } )
    }
    // chrome.runtime.sendMessage({'init': true}, onSelection);
}


initContentScript();
