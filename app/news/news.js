
console.log('news!')
var url = 'http://api.feedzilla.com/v1/categories/13/subcategories.json';
url2 = 'http://api.feedzilla.com/v1/categories.json';
services.getPage(url,parseNews);

function parseNews(xhr){
    var data = JSON.parse(xhr.responseText);
    console.log(data);
}
