function loadDoc(url, cfunc) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            cfunc(xhttp);
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
}

function doSomethingWithHash(hash) {
    console.log(hash)
}

function writeHTML(xhr) {
    var theHTML = xhr.responseText;
    document.getElementById("content").innerHTML = xhr.responseText;
}

function writeScript(xhr){
    var newScript = document.createElement('script');
    newScript.text = xhr.responseText;
    document.getElementsByTagName("head").item(0).appendChild(newScript);
}

function writeJSON(xhr){
    var data = JSON.parse(xhr.responseText);
    console.log(data);
}

window.onhashchange = function () {
    doSomethingWithHash(window.location.hash);
    var page = window.location.hash.split('#');
    var newPage = 'app/'+ page[1] + '/' + page[1]+'.html';
    var newScript = 'app/'+ page[1] + '/' + page[1]+'.js';
    var newJson = 'app/'+ page[1] + '/' + 'data.json';
    loadDoc(newPage,writeHTML);
    loadDoc(newScript,writeScript);
    loadDoc(newJson,writeJSON)
};

window.location.hash = '#home'
