/**
 * Created by blagrone on 10/25/15.
 *
 */


var routing = {}
routing.routesArray = [];
routing.register = function(path, callBack){
    var routeObject = {};
    routeObject.path = path;
    routeObject.callBack = callBack;
    routing.routesArray.push(routeObject)
};
routing.register('weather',function(evt){
    pageRoute = {
        page:"weather.html",
        route:"app/weather/",
        controller:'weather'
    };
    //console.log(evt)
    //routing.changeHash("weather")
});
routing.register('home',function(evt){
    pageRoute = {
        page:"home.html",
        route:"app/home/",
        controller:'home'
    };
    //routing.changeHash("home")
});
routing.register('travel',function(evt){
    pageRoute = {
        page:"travel.html",
        route:"app/travel/",
        controller:'travel'
    };
    //console.log(evt)
});
routing.register('news',function(){
    pageRoute = {
        page:"news.html",
        route:"app/news/",
        controller:'news'
    };
    //console.log("$$$$BAR %%%");
});
routing.register('stocks',function(){
    pageRoute = {
        page:"stocks.html",
        route:"app/stocks/",
        controller:'stocks'
    };
    //console.log("$$$$BAR %%%");
});
routing.register('calendar',function(){
    pageRoute = {
        page:"calendar.html",
        route:"app/calendar/",
        controller:'calendar'
    };
    //console.log("$$$$BAR %%%");
});







window.onhashchange = function () {
    services.routing.useArray(window.location.hash.split('#')[1])
};

window.onload = getLocationHash;
if(window.location.hash=="")
    window.location.hash = '#home';
function getLocationHash(){
    services.routing.useArray(window.location.hash.split("#")[1])
}