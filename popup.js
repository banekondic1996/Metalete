document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('removeConversations');
  var theTab;
  checkPageButton.addEventListener('click', function() {
chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({ active: true, windowId: currentWindow.id }, function (activeTabs) {
        activeTabs.map(function (tab) {
          theTab = tab.id;
        });
    });
});
chrome.tabs.executeScript(theTab, { file: 'script.js', allFrames: false });
  }, false);
      var checkPageButton2 = document.getElementById('openMessenger');
  checkPageButton2.addEventListener('click', function() {
   chrome.windows.create({url: "https://www.messenger.com/t/"});
  }, false);
}, false);