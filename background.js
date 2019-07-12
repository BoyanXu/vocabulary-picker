// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function initBackground(){
  chrome.commands.onCommand.addListener((command)=>{
    if(command === "pick_word"){
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          from: "background.js",
          to: "content_script.js",
          on: "pick",
          data: "null"
        }, (response) =>{
          // alert("background.js received response")
        })
      } )
    }
  });
}

initBackground();
