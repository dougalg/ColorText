// Copyright (c) 2014 Dougal Graham. All rights reserved.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Activated on: ' + tab.url);
  chrome.tabs.executeScript({
   file: 'insert_colors.js'
  });
  chrome.tabs.insertCSS(tab.id, {
    file: "color_text.css"
  });
});
