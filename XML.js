'use strict'

const countries = document.querySelector('.countries');



const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/deutschland');

request.send();
console.log(request.responseText)
request.addEventListener('load', function(){
    //console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <img class="country_img" src="${data.flags.svg}"/>
        <h3>${data.name.common}</h3>
        <p>Language: ${data.languages.deu}</p>
        <p>Currency: ${data.currencies.EUR.name}</p>
    `;

    countries.insertAdjacentHTML('beforeend', html);
});








