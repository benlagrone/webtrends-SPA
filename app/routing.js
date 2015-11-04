/**
 * Created by blagrone on 10/25/15.
 */


var routing = {}

window.onhashchange = function () {
    doSomethingWithHash(window.location.hash);
    var page = window.location.hash.split('#');
    console.log(page)
    routing.changeHash(page[1]);
};

routing.changeHash = function(page){
    var newPage = 'app/'+ page + '/' + page+'.html';
    var newScript = 'app/'+ page + '/' + page+'.js';
    var newJson = 'app/'+ page + '/' + 'data.json';
    services.loadPage(newPage,routing.writeHTML);
    services.loadPage(newScript,routing.writeScript);
    services.loadPage(newJson,routing.writeJSON);
};

routing.routingTable = function(){
    var routes = {
        route:{
            id:'home',
            path:''
        }
    }
};

routing.writeHTML = function(xhr){
    var theHTML = xhr.responseText;
    document.getElementById("content").innerHTML = xhr.responseText;
};

routing.writeScript = function(xhr){
    var newScript = document.createElement('script');
    newScript.text = xhr.responseText;
    document.getElementsByTagName("head").item(0).appendChild(newScript);
};

routing.writeJSON = function(xhr){
    var data = JSON.parse(xhr.responseText);
    console.log(data);
};


if(window.location.hash=="")
    window.location.hash = '#home';

if(window.location.hash=="#home")
    routing.changeHash("home")
