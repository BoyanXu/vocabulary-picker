// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function initBackground(){
  chrome.commands.onCommand.addListener((command)=>{
    if(command == "select_word"){
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        alert("query message executed")
        chrome.tabs.sendMessage(tabs[0].id, {'action' : 'save'}, (response) =>{
          alert("reponse received")
        })
      } )
    }
  })
}
initBackground();
