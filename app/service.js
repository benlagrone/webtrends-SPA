
var services = {};
services.getPage = function(url,id,callBack,page){
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callBack(xhttp,id,page);
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
};
services.routing = {};
services.routing.changeHash = function(page,callback){
    var newPageUrl = 'app/'+ page + '/' + page+'.html';
    var newScriptUrl = 'app/'+ page + '/' + page+'.js';
    services.getPage(newPageUrl,'content',services.routing.writeHTML,page);
    services.getPage(newScriptUrl,'head',services.routing.writeScript,page);
};
services.routing.useArray = function(path){
    services.routing.changeHash(path)
    for(i=0;i<routing.routesArray.length;i++){
        if(routing.routesArray[i].path===path)
            routing.routesArray[i].callBack.call();
    }
};
services.routing.writeHTML = function(xhr,id,page){
    var theHTML = xhr.responseText;
    document.getElementById(id).innerHTML = xhr.responseText;
};
services.routing.writeScript = function(xhr,id,page){
    var newScript = document.createElement('script');
    newScript.text = 'var id= "'+page+'";';
    newScript.text += xhr.responseText;
    document.getElementsByTagName(id).item(0).appendChild(newScript);
};
services.routing.writeJSON = function(xhr){
    var data = JSON.parse(xhr.responseText);
};
