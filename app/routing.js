
var routing = {};
routing.routesArray = [];
routing.register = function(path, callBack){
    var routeObject = {};
    routeObject.path = path;
    routeObject.callBack = callBack;
    routing.routesArray.push(routeObject);
};
routing.register('weather',function(){
    pageRoute = {
        page:"weather.html",
        route:"app/weather/",
        script:"weather.js"
    };
    console.log('weather')
});
routing.register('home',function(){
    pageRoute = {
        page:"home.html",
        route:"app/home/",
        script:"home.js"
    };
    console.log('home')
});
routing.register('travel',function(){
    pageRoute = {
        page:"travel.html",
        route:"app/travel/",
        script:"travel.js"
    };
    console.log('travel')
});
routing.register('news',function(){
    pageRoute = {
        page:"news.html",
        route:"app/news/",
        script:"news.js"
    };
    console.log('news')
});
routing.register('stocks',function(){
    pageRoute = {
        page:"stocks.html",
        route:"app/stocks/",
        script:"stocks.js"
    };
    console.log('stocks')
});
routing.register('tasks',function(){
    pageRoute = {
        page:"tasks.html",
        route:"app/tasks/",
        script:"tasks.js"
    };
    console.log('tasks')
});


window.onhashchange = function () {
    services.routing.useArray(window.location.hash.split('/')[1])
};

window.onload = function(){
    if(window.location.hash=="")
        window.location.hash = '#home';
    services.routing.useArray(window.location.hash.split("/")[1])
};