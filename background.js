chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
      url:'https://extension.nustry.com'
    })
  })