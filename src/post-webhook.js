let data = {"title": "", "url": ""}

function sendHook(){
    let expr = document.getElementById('expr').value;
    let xhr = new XMLHttpRequest();

    chrome.storage.local.get('hookUrl', function(items){
        xhr.open('POST', items.hookUrl);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                var status = xhr.status;
                if(status === 0 || (status >= 200 && status < 400)){
                    window.close();
                }
                else{
                    console.log(status);
                }
            }
        };
        xhr.send(JSON.stringify({url: `${data.url}`, title: `${data.title}`, expr: `${expr}`, date:`${Date.now()}`}));
    });
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sout').addEventListener('click', sendHook);
    chrome.tabs.getSelected(tab=>{
        data.title = tab.title;
        data.url = tab.url;
       document.getElementById('title').textContent = data.title;
    });
});
