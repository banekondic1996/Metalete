 (function($){
   // while (null !== $('div[role="gridcell"]')){
    var 
                step1 = function(){
                $('div[role="gridcell"]').click();
                setTimeout(step2, 500);},
                
                step2 = function(){
                    $('div[role="gridcell"]').click();
                setTimeout(step3, 500);},

                step3 = function(){
                    $('div[aria-label="Menu"]').click();
                setTimeout(step4, 300);},

                step4 = function(){
                    var elements = document.evaluate('//div[@role="menu"]//span[contains(text(),"Delete chat")]', document, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                    for (var i = 0; i < elements.snapshotLength; i++) {
                        elements.snapshotItem(i).click();}
                setTimeout(step5, 500);},

                step5 = function(){
                    var elements = document.evaluate('//div[@aria-label="Delete chat"]//div[@aria-label="Delete chat"]', document, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                    for (var i = 0; i < elements.snapshotLength; i++) {
                        elements.snapshotItem(i).click();}
                setTimeout(step1, 300);};
                step1();
})(function(selector){ return document.querySelector(selector); 
});  
