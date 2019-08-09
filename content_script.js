class vocabularyInfo {
    constructor(selected_vocabulary, selected_sentence, selected_paragraph, selected_url) {
        this.vocabulary = selected_vocabulary;
        this.sentence = selected_sentence;
        this.paragraph = selected_paragraph;
        this.url = selected_url;
        this.vocabularyOrign = selected_vocabulary;
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

function getSelectedURL(){
    return window.location.toString();
}

function getSelectedInfo() {
    let selectedNode = window.getSelection(); // TODO: change text background of selectedNode

    if (selectedNode.anchorNode == null) {  // handle exception 1: nothing selected
        return null
    }

    let selected_vocabulary = getSelectedVocabulary(selectedNode);
    let selected_paragraph = getSelectedParagraph(selectedNode.anchorNode);
    let selected_sentence = getSelectedSentence(selected_paragraph, selected_vocabulary);
    let selected_url = getSelectedURL();
    return new vocabularyInfo(selected_vocabulary, selected_sentence, selected_paragraph, selected_url);
}

function saveVocabularyInfo() {
    let vocabularyInfo = getSelectedInfo();
    if (vocabularyInfo) { // handle exception 1: nothing selected
        alert("Current vocabulary info is : " + vocabularyInfo.vocabulary);
        if (vocabularyInfo.vocabulary !== "") {
            // var VocabularyList = JSON.parse(localStorage.vocabularyList);
            // Store to current tab
            vocabularyList4Tab = JSON.parse(localStorage.vocabularyList4Tab);
            let currentIndex = parseInt(localStorage.indexFactory);
            vocabularyInfo.index = currentIndex;
            localStorage.setItem("indexFactory", currentIndex + 1);

            vocabularyList4Tab.push(vocabularyInfo);
            localStorage.vocabularyList4Tab = JSON.stringify(vocabularyList4Tab);
        }
    }

}

function initContentScript() {
    console.log("Content.js is initialized once");
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.from === "background.js" && message.to === "content_script.js" && message.on === "pick") {
            saveVocabularyInfo();
            sendResponse("SomeResponse")
        } else if (message.from === "UI-Edit.js" && message.to === "content_script.js" && message.on === "tab-vocabulary") {
            console.log("List sent: " + localStorage.vocabularyList4Tab);
            sendResponse({currentList: JSON.parse(localStorage.vocabularyList4Tab)});
        } else if (message.from === "UI-Edit.js" && message.to === "content_script.js" && message.on === "delete-vocabulary") {
            var vocabularyList = JSON.parse(localStorage.vocabularyList4Tab);
            console.log("Index to delete is: " + typeof (message.data));
            vocabularyList = vocabularyList.filter(vocabularyInfo => vocabularyInfo.index !== parseInt(message.data));
            localStorage.vocabularyList4Tab = JSON.stringify(vocabularyList);
            sendResponse("Removed")
        }
    });

    localStorage.setItem("vocabularyList4Tab", "[]");
    localStorage.setItem("indexFactory", 0);
    // chrome.runtime.sendMessage({'init': true}, onSelection);
}


initContentScript();
