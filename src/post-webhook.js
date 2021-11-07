let Data = {"Title": "", "URL": ""}

function sendHook(){
    let Expr = document.getElementById('expr').value;
    let Xhr = new XMLHttpRequest();

    chrome.storage.local.get('hookUrl', function(items){
        Xhr.open('POST', items.hookUrl);
        Xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        Xhr.send(JSON.stringify({url: `${Data.URL}`, title: `${Data.Title}`, expr: `${Expr}`, date:`${Date.now()}`}));
    });
    
    window.close();
}

document.addEventListener('DOMContentLoaded', function(){
    chrome.tabs.getSelected(tab=>{
        Data.Title = tab.title;
        Data.URL = tab.url;
       document.getElementById('title').textContent = Data.Title;
    });
});
