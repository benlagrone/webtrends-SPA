/**
 * Created by blagrone on 10/25/15.
 */

var services = {};

services.loadPage = function(url,callBack){
    console.log(url)
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callBack(xhttp);
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
};

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

