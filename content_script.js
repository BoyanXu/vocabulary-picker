class vocabularyInfo{
  constructor(selected_vocabulary, selected_paragraph){
    this.vocabulary = selected_vocabulary
    this.sentence   = getSelectionSentence(selected_paragraph, selected_vocabulary)
    this.paragraph  = selected_paragraph
  }
}

function getValidParagraph(anchorNode){
  curNode = anchorNode
  validName  = ['P','LI','H1','H2','H3','H4','H5','H6']
  while(curNode.nodeName != "BODY"){
    if(validName.includes(curNode.nodeName)){
      return curNode.textContent
    }
    else{
      curNode = curNode.parentNode
    }
  }
  return ""
}

function getSelectionSentence(paragraph, vocabulary){
  sentences = paragraph.match( /[^\.!\?]+[\.!\?]+/g )
  for(var index in sentences){
    sentence = sentences[index]
    if(sentence.includes(vocabulary)){
      return sentence
    }
  }
}


function getSelectionInfo(){
  selection = window.getSelection()
  // exception handling 1: nothing selected
  if(selection.anchorNode == null){ return null }
  // end
  selected_vocabulary = selection.toString()
  selected_paragraph  = getValidParagraph(selection.anchorNode)
  return new vocabularyInfo(selected_vocabulary, selected_paragraph)
}

function saveSelection(){
  vocInfo = getSelectionInfo()
  // exception handling 1: no vocabulary selected
  if(vocInfo == null){ return ;}
  // end
  else{
    VocabularyList = JSON.parse(localStorage.vocabularyList)
    VocabularyList.push(vocInfo)
    localStorage.vocabularyList = JSON.stringify(VocabularyList)
  }
}

function onSelection(signal, sender, sendResponse){
  switch(signal.action){
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
