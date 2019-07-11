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
    let selectedNode = window.getSelection(); // TODO: change text background of selectedNode

    if (selectedNode.anchorNode == null) {  // handle exception 1: nothing selected
        return null
    }

    let selected_vocabulary = getSelectedVocabulary(selectedNode);
    let selected_paragraph = getSelectedParagraph(selectedNode.anchorNode);
    let selected_sentence = getSelectedSentence(selected_paragraph, selected_vocabulary);
    return new vocabularyInfo(selected_vocabulary, selected_sentence, selected_paragraph)
}

function saveVocabularyInfo() {
    let vocabularyInfo = getSelectedInfo();
    alert("Current vocabulary info is : " + vocabularyInfo.vocabulary);
    if (vocabularyInfo.vocabulary !== "") {
        // var VocabularyList = JSON.parse(localStorage.vocabularyList);

        // Store to current tab
        vocabularyList4Tab = JSON.parse(localStorage.vocabularyList4Tab);
        vocabularyInfo.index = vocabularyList4Tab.length;
        vocabularyList4Tab.push(vocabularyInfo);
        localStorage.vocabularyList4Tab = JSON.stringify(vocabularyList4Tab);
    }
}

function initContentScript() {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "pick") {
            saveVocabularyInfo();
            sendResponse("SomeResponse")
        }
        else if (message.from === "UI-Edit.js" && message.to === "content_script.js" && message.on === "tab-vocabulary") {
            sendResponse({currentList: JSON.parse(localStorage.vocabularyList4Tab)});
        }

    });

    localStorage.setItem("vocabularyList4Tab", "[]");
    // chrome.runtime.sendMessage({'init': true}, onSelection);
}


initContentScript();
