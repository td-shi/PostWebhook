function sendHook(){
    let Data = {"Title": "", "URL": ""}
    let xhr = new XMLHttpRequest();

    chrome.tabs.getSelected(tab=>{
        Data.Title = tab.title;
        Data.URL = tab.url;
    });

    chrome.storage.local.get('hookUrl', function(items){
        console.log(`Title: ${Data.Title}`);
        console.log(`URL: ${Data.URL}`);
        console.log(`POST: ${items.hookUrl}`);

        xhr.open('POST', items.hookUrl);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify({Text: `Title: ${Data.Title}, URL: ${Data.URL}`}));
    });
}
