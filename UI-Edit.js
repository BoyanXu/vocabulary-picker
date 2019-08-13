function init() {
    refreshList();
    document.getElementById("export-button").addEventListener("click", export2JSON);
}

function refreshList() {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {
            from: "UI-Edit.js",
            to: "content_script.js",
            on: "tab-vocabulary",
            data: "null"
        }, (response) => {
            let vocabularyTable = document.getElementById("vocabulary-table");
            let vocabularyList = response.currentList;

            // Clear legacy vocabulary
            for (let i = 1; i < vocabularyTable.rows.length; i++) {
                vocabularyTable.deleteRow(-1);
            }
            // Rebuild vocabulary table
            for (let i = 0; i < vocabularyList.length; i++) {
                let row = vocabularyTable.insertRow(-1);
                let vocabulary = row.insertCell(0);
                let sentence = row.insertCell(1);

                vocabulary.setAttribute("origin-index", vocabularyList[i].index);
                vocabulary.innerHTML = "<span class='vocabulary-display'>" + vocabularyList[i].vocabulary + "</span>";
                vocabulary.firstElementChild.setAttribute("origin-index", vocabularyList[i].index);
                sentence.innerHTML = emphasize(vocabularyList[i].vocabulary, vocabularyList[i].sentence);
                // Bind delete operation to vocabulary
                vocabulary.addEventListener("click", dataManage)
            }
            // Make vocabulary list exportable
            let dataUri = 'data:text/json;charset=utf-8,' + encodeURIComponent(
                JSON.stringify({vocabulary: vocabularyList.map( vocabularyObj => {
                    delete vocabularyObj.index;
                    vocabularyObj.vocabulary = vocabularyObj.vocabulary.toLowerCase();
                    vocabularyObj.time = getPickDateStr();
                    vocabularyObj.tags = '';
                    vocabularyObj.key = '';
                    return vocabularyObj;
                })})
            );

            let date = new Date();
            let exportFileName = date.getFullYear() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate() + "-" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds() + ".json";

            let downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute('id', "export-button-download");
            downloadAnchor.setAttribute('href', dataUri);
            downloadAnchor.setAttribute('download', exportFileName);
            document.body.appendChild(downloadAnchor);
        });
    });
}

function export2JSON() {
    let downloadAnchor = document.getElementById("export-button-download");
    downloadAnchor.click();
}

function emphasize(vocabulary, sentence) {
    let reExp = new RegExp(vocabulary, "g");
    return sentence.replace(reExp, "<span class='emphasize'>" + vocabulary + "</span>")
}

function getPickDateStr(){
    let date = new Date();

    let numMon = date.getMonth() + 1;
    let numDay = date.getDate();

    let strDay = (numDay < 10) ? "0" + numDay.toString() : numDay.toString();
    let strMon = (numMon < 10) ? "0" + numMon.toString() : numMon.toString();
    let strYear = date.getFullYear().toString();

    return strYear + "-" + strMon + "-" + strDay;
    // date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();
}

function dataManage(event) {
    // Delete
    if (event.altKey) {
        let originIndex = event.target.getAttribute("origin-index");
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, {
                from: "UI-Edit.js",
                to: "content_script.js",
                on: "delete-vocabulary",
                data: originIndex
            }, (response) => {
                // Clear vocabulary list catch ?
                // Anyway, this prevents preserved legacy vocabulary after refreshList()
                let vocabularyTable = document.getElementById("vocabulary-table");
                for (let i = 0; i < vocabularyTable.rows.length; i++) {
                    vocabularyTable.deleteRow(-1);
                }

                refreshList(); // dangerous here
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', init);