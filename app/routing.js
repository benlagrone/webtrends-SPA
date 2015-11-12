/**
 * Created by blagrone on 10/25/15.
 *
 */


var routing = {}

window.onhashchange = function () {
    //doSomethingWithHash(window.location.hash);
    var page = window.location.hash.split('#');
    //console.log(page)
    //routing.changeHash(page[1]);
    routing.useArray(page[1])
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
    console.log("HIIII")
}

routing.routesArray = [];
routing.register = function(path, callBack){
    var routeObject = {};
    //var name = "name";
    //routeObject[path] = path;
    routeObject.path = path;
    //routeObject[callBack] = callBack;
    routeObject.callBack = callBack;
    routing.routesArray.push(routeObject)
};

routing.register('weather',function(evt){
    pageRoute = {page:"weather.html",route:"app/weather/"};
    console.log(evt)
    foo(pageRoute)
});
routing.register('home',function(evt){
    pageRoute = {
        page:"home.html",
        route:"app/home/"
    };
});
routing.register('foo',function(evt){
    pageRoute = {
        page:"foo.html",
        route:"foo/weather/"
    };
    console.log(evt)
    foo(pageRoute)
});
routing.register('bar',function(){

    console.log("$$$$BAR %%%");
});
//console.log(routing.routesArray)


//now write a function that uses the route array
routing.useArray = function(path){
    console.log(path)
    console.log(routing.routesArray)
    for(i=0;i<routing.routesArray.length;i++){
        if(routing.routesArray[i].path===path)
        routing.routesArray[i].callBack.call();
    }
};

function useArrayCallBack(value, index, path){
    var newScript = document.createElement('script');
    newScript.text = value.callBack;
    [value.callBack]
    console.log(newScript)
    console.log(document.getElementsByTagName("head")[0])
    document.getElementsByTagName("head")[0].appendChild(newScript);
}

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
