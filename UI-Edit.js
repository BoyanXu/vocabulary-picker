function init() {
    refreshList();
    // let refreshButton = document.getElementById("refresh-button");
    // refreshButton.addEventListener("click", refreshList);
}

function refreshList() {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {
            from: "UI-Edit.js",
            to: "content_script.js",
            on: "tab-vocabulary"
        }, (response) => {
            let vocabularyTable = document.getElementById("vocabulary-table");
            // Clear old content
            for(let i = 0; i < vocabularyTable.rows.length; i++){
                vocabularyTable.deleteRow(-1);
            }
            let vocabularyList = response.currentList;
            for (let i = 0; i < vocabularyList.length; i++) {
                let row = vocabularyTable.insertRow(-1);
                let vocabulary = row.insertCell(0);
                let sentence = row.insertCell(1);
                vocabulary.innerText = vocabularyList[i].vocabulary;
                sentence.innerText = vocabularyList[i].sentence;
            }
        });
    });

}

document.addEventListener('DOMContentLoaded', init);