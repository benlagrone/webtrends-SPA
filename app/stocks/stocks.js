
console.log('stocks!')
var apiKey = '24e09a475c690683d9d218c1260a6ca2:5:73536423';
var section = 'world';
var responseFormat = 'json';
var url = 'http://finance.yahoo.com/webservice/v1/symbols/YHOO/quote?format=json';
var url2 = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json';
services.getPage(url,parseStocks);

function parseStocks(xhr){
    var data = JSON.parse(xhr.responseText);
    console.log(data);
}
