browser.contextMenus.create({
    id: "google-image-search",
    title: "Search image in sidebar",
    contexts: ["image"],
});

// function onError(error) {
    // console.log(`Error: ${error}`);
// }

// function logTabs(tabs) {
  // console.log(tabs);
  // for (let tab of tabs) {
    // // tab.url requires the `tabs` permission
    // console.log(tab.url);
  // }
// }
            
browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case 'google-image-search':
            browser.sidebarAction.open().then(()=>{
                browser.windows.getCurrent({populate: true}).then((windowInfo) => {
                // var tabId = windowInfo.id;
                // var querying = browser.tabs.query({});
                // querying.then(logTabs, onError);
                
                //open in Google Search
                formated_img_url = encodeURI(info.srcUrl)
                const url = 'https://www.google.com/searchbyimage?image_url='+formated_img_url;
                //browser.tabs.create({url:url})
                browser.sidebarAction.setPanel({panel: url});
                
                // var insertingCSS = browser.tabs.insertCSS(tabId,{file: "fixgoogle.css"});
                // insertingCSS.then(null, onError);
                });    
            })
            break;
        
    }

});
