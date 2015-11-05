/**
 * Created by blagrone on 10/25/15.
 *

 */


var routing = {}

window.onhashchange = function () {
    doSomethingWithHash(window.location.hash);
    var page = window.location.hash.split('#');
    console.log(page)
    routing.changeHash(page[1]);
};

routing.changeHash = function(page,callback){
    var newPage = 'app/'+ page + '/' + page+'.html';
    var newScript = 'app/'+ page + '/' + page+'.js';
    var newJson = 'app/'+ page + '/' + 'data.json';
    services.getPage(newPage,routing.writeHTML);
    services.getPage(newScript,routing.writeScript);
    services.getPage(newJson,routing.writeJSON);
};

foo = function(pageRoute){
    console.log(pageRoute)
}

routing.routesArray = [];
routing.register = function(path, callBack){
    var routeObject = {}
    var name = "name";
    routeObject[name] = path;
    routeObject.name = path;
    routing.routesArray.push(routeObject)
console.log(routing.routesArray)
    //console.log(callback)
    //callback()
}

routing.register('weather',function(evt){
    pageRoute = {
        page:"weather.html",
        route:"app/weather/"
    };
    console.log(evt)
    foo(pageRoute)
});
routing.register('home',function(evt){
    pageRoute = {
        page:"home.html",
        route:"app/home/"
    };
});

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
