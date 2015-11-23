
console.log('calendar!');
var apiKey = '24e09a475c690683d9d218c1260a6ca2:5:73536423';
var section = 'world';
var responseFormat = 'json';
var url = 'app/calendar/data.json';
url2 = 'http://api.feedzilla.com/v1/categories.json';
services.getPage(url,parseNews);

function parseNews(xhr){
    var data = JSON.parse(xhr.responseText);
    console.log(data);
}
