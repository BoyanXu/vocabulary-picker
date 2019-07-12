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
            let vocabularyList = response.currentList;

            // Clear legacy vocabulary
            for(let i = 0; i < vocabularyTable.rows.length; i++){
                vocabularyTable.deleteRow(-1);
            }
            // Rebuild vocabulary table
            for (let i = 0; i < vocabularyList.length; i++) {
                let row = vocabularyTable.insertRow(-1);
                let vocabulary = row.insertCell(0);
                let sentence = row.insertCell(1);

                vocabulary.setAttribute("originIndex", vocabularyList[i].index );
                vocabulary.innerHTML = "<span class='vocabulary-display'>" + vocabularyList[i].vocabulary + "</span>";
                vocabulary.firstElementChild.setAttribute("originIndex", vocabularyList[i].index );
                sentence.innerHTML = emphasize(vocabularyList[i].vocabulary, vocabularyList[i].sentence);
                // Bind delete operation to vocabulary
                vocabulary.addEventListener("click", dataManage)


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
    return sentence.replace(reExp, "<span class='emphasize'>" + vocabulary + "</span>")
}

function dataManage(event){
    // Delete
    if (event.altKey){
        console.log(event.target);
    }
}

document.addEventListener('DOMContentLoaded', init);