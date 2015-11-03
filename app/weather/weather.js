
console.log('weather!');
//http://openweathermap.org/api
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Houston,tx&appid=bd82977b86bf27fb59a04b61b657fb6f';
services.loadPage(url,parseWeather);

function parseWeather(xhr){
    var data = JSON.parse(xhr.responseText);
    console.log(data);
}
