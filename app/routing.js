var pageRoute
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
        page:"./app/weather/weather.html",
        partial:"./app/weather/home-weather.html",
        script:"./app/weather/weather.js"
    };
    console.log('weather')
});
routing.register('home',function(){
    pageRoute = {
        page:"./app/home/home.html",
        partial:"./app/home/home-home.html",
        script:"./app/home/home.js"
    };
    console.log('home')
});
routing.register('travel',function(){
    pageRoute = {
        page:"./app/travel/travel.html",
        partial:"./app/travel/home-travel.html",
        script:"./app/travel/travel.js"
    };
    console.log('travel')
});
routing.register('news',function(){
    pageRoute = {
        page:"./app/news/news.html",
        partial:"./app/news/home-news.html",
        script:"./app/news/news.js"
    };
    console.log('news')
});
routing.register('stocks',function(){
    pageRoute = {
        page:"./app/stocks/stocks.html",
        partial:"./app/stocks/home-stocks.html",
        script:"./app/stocks/stocks.js"
    };
    console.log('stocks')
});
routing.register('tasks',function(){
    pageRoute = {
        page:"./app/tasks/tasks.html",
        partial:"./app/tasks/home-tasks.html",
        script:"./app/tasks/tasks.js"
    };
    console.log('tasks')
});


window.onhashchange = function () {
    var url = window.location.hash.split('#')[1]
    console.log(url)
    services.routing.useArray(url)
};

window.onload = getLocationHash;
if(window.location.hash=="")
    window.location.hash = '#home';
function getLocationHash(){
    var url = window.location.hash.split('#')[1]
    console.log(url)
    services.routing.useArray(url)
}