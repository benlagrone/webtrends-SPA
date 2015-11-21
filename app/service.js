/**
 * Created by blagrone on 10/25/15.
 */

var services = {};

services.getPage = function(url,callBack){
    console.log(url)
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callBack(xhttp);
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
};

services.routing = {};
services.routing.changeHash = function(page,callback){
    var newPage = 'app/'+ page + '/' + page+'.html';
    var newScript = 'app/'+ page + '/' + page+'.js';
    var newJson = 'app/'+ page + '/' + 'data.json';
    services.getPage(newPage,services.routing.writeHTML);
    services.getPage(newScript,services.routing.writeScript);
    services.getPage(newJson,services.routing.writeJSON);
};

services.routing.useArray = function(path){
    console.log(path)
    console.log(routing.routesArray)
    services.routing.changeHash(path)
    for(i=0;i<routing.routesArray.length;i++){
        if(routing.routesArray[i].path===path)
            routing.routesArray[i].callBack.call();
    }
};

services.routing.writeHTML = function(xhr){
    var theHTML = xhr.responseText;
    document.getElementById("content").innerHTML = xhr.responseText;
};

services.routing.writeScript = function(xhr){
    var newScript = document.createElement('script');
    newScript.text = xhr.responseText;
    document.getElementsByTagName("head").item(0).appendChild(newScript);
};

services.routing.writeJSON = function(xhr){
    var data = JSON.parse(xhr.responseText);
    console.log(data);
};
