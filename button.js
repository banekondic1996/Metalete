
  var checkPageButton = document.getElementById('removeConversations');
  var theTab;
  checkPageButton.addEventListener('click', function() {
    stepURL=function(){
                          chrome.windows.create({url: "https://www.messenger.com/t/"});
                          chrome.tabs.query({ active: true, windowId: chrome.windows.getLastFocused.id}, 
                          function (activeTabs) {activeTabs.map(function (tab) {theTab = tab.id;});}    
                                           );
                          setTimeout(stepScript, 4000); 
                      },
    stepScript=function(){
chrome.tabs.executeScript(theTab, { file: 'script.js', allFrames: false });
                         }
      stepURL();
                                                        }, false);
      var checkPageButton2 = document.getElementById('openMessenger');
  checkPageButton2.addEventListener('click', function() {
                chrome.windows.create({url: "https://www.messenger.com/t/"});
                                                        }, false);
