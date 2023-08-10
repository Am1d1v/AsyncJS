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

    const htmlDeu = `
        <img class="country_img" src="${data.flags.svg}"/>
        <h3>${data.name.common}</h3>
        <p>Population: ${(+data.population / 1000000).toFixed(1)} Millions</p>
        <p>Language: ${data.languages.deu}</p>
        <p>Currency: ${data.currencies.EUR.name} ${data.currencies.EUR.symbol}</p>
    `;

    countries.insertAdjacentHTML('beforeend', htmlDeu);
});








