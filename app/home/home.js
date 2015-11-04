var dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];

console.log('get time')
function getTime() {
    console.log('get time')
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var d=dayArray[today.getDay()];
    var mo=monthArray[today.getMonth()];
    var y=today.getFullYear();
    m = correctDigit(m);
    s = correctDigit(s);
    document.getElementById('time').innerHTML = "<br><h1 class='large'>"+h+":"+m+":"+s+"</h1>&nbsp;<span class='dark'>"+d+",</span class='dark'>&nbsp;<span class='dark'>"+mo+"</span>&nbsp;<span class='dark'>"+y+"</span>";
    var t = setTimeout(function(){getTime()},500);
}

function correctDigit(i) {
    if (i<10)i = "0" + i;  // add zero in front of numbers < 10
    return i;
}
getTime();