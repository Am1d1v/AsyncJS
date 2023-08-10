'use strict'





const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/deutschland');

request.send();
console.log(request.responseText)
request.addEventListener('load', function(){
    //console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data);
});








