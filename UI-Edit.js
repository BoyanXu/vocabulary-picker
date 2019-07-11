function init() {
    refreshList();
    document.getElementById("export-button").addEventListener("click", export2JSON);
}

function refreshList() {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {
            from: "UI-Edit.js",
            to: "content_script.js",
            on: "tab-vocabulary"
        }, (response) => {
            let vocabularyTable = document.getElementById("vocabulary-table");
            // Clear legacy vocabulary
            for(let i = 0; i < vocabularyTable.rows.length; i++){
                vocabularyTable.deleteRow(-1);
            }
            // Rebuild vocabulary table
            let vocabularyList = response.currentList;
            for (let i = 0; i < vocabularyList.length; i++) {
                let row = vocabularyTable.insertRow(-1);
                let vocabulary = row.insertCell(0);
                let sentence = row.insertCell(1);
                vocabulary.innerHTML = vocabularyList[i].vocabulary;
                // sentence.innerText = vocabularyList[i].sentence;
                sentence.innerHTML = emphasize(vocabularyList[i].vocabulary, vocabularyList[i].sentence);

            }
            // Make vocabulary list exportable
            let dataUri = 'data:text/json;charset=utf-8,'+ encodeURIComponent(JSON.stringify({vocabulary: vocabularyList}));

            let date = new Date();
            let exportFileName = date.getMonth() + "\\" + date.getDate() + "\\" + date.getMinutes() + "\\"+ date.getSeconds() + ".json";

            let downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute('id', "export-button-download");
            downloadAnchor.setAttribute('href', dataUri);
            downloadAnchor.setAttribute('download', exportFileName);
            document.body.appendChild(downloadAnchor);
        });
    });
}

function export2JSON(){
    let downloadAnchor = document.getElementById("export-button-download");
    downloadAnchor.click();
}

function emphasize(vocabulary, sentence){
    let reExp = new RegExp(vocabulary,"g");
    return sentence.replace(reExp, "<span class='emphasize'\">" + vocabulary + "</span>")
}

document.addEventListener('DOMContentLoaded', init);