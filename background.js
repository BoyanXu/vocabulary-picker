// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function initBackground(){
  chrome.commands.onCommand.addListener((command)=>{
    if(command === "pick_word"){
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        alert("background.js query message to content_script.js");
        chrome.tabs.sendMessage(tabs[0].id, {'action' : 'pick'}, (response) =>{
          // alert("background.js received response")
        })
      } )
    }
  });


  // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //     if (request.from === "UI-Edit.js" && request.to === "background.js" && request.on === "tab-vocabulary"){
  //         chrome.tabs.query({active: true, currentWindow: true} )
  //             .then(tabs => chrome.tabs.sendMessage(tabs[0].id, {from: "background.js", to: "content_script.js", on:"tab-vocabulary"}) )
  //             .then(response => sendResponse({currentList: response.currentList }))
  //             .catch(failureCallback);
  //     }
  //   });
  //
  // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //         if (request.from === "UI-Edit.js" && request.to === "background.js" && request.on === "tab-vocabulary"){
  //             chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //                 chrome.tabs.sendMessage(tabs[0].id, {from: "background.js", to: "content_script.js", on:"tab-vocabulary"}, (response) =>{
  //                     alert("background.js receive response: " + JSON.stringify(response.currentList) );
  //                     sendResponse({currentList: response.currentList });
  //                 });
  //             });
  //         }
  //         return true; // Damn it
  // });
}

initBackground();
