
console.log('weather!');
//http://openweathermap.org/api
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Houston,tx&APPID=e502ef3373e0f8ce33bf8aade934f8d4';
url2 = 'http://api.wunderground.com/api/2f6a955101b9b690/conditions/q/TX/Houston.json';
services.getPage(url2,parseWeather);

function parseWeather(xhr){
    var data = JSON.parse(xhr.responseText);
    console.log(data);
}
