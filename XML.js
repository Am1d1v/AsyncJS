'use strict'

const countries = document.querySelector('.countries');




const getCountryData = function(countryName){
    const request = new XMLHttpRequest();
        request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
        request.send();
        
        request.addEventListener('load', function(){
            const [data] = JSON.parse(this.responseText);
        
            const htmlDeu = `
                <img class="country_img" src="${data.flags.svg}"/>
                <h3>${data.name.common}</h3>
                <p>Population: ${(+data.population / 1000000).toFixed(1)} Millions</p>
                <p>Language: ${data.languages.deu}</p>
                <p>Currency: ${data.currencies.EUR.name} ${data.currencies.EUR.symbol}</p>
            `;
        
            countries.insertAdjacentHTML('beforeend', htmlDeu);
        });
};


getCountryData('deutschland');




