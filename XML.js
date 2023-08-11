'use strict'

const countries = document.querySelector('.countries');




const getCountryData = function(countryName){
    const request = new XMLHttpRequest();
        request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
        request.send();

        request.addEventListener('load', function(){
            const [data] = JSON.parse(this.responseText);
        
            const currencies = data.currencies;
            const currensyName = Object.values(currencies)[0].name;
            const currensySymbol = Object.values(currencies)[0].symbol;
            const language = Object.values(data.languages)[0];


            const html = `
                <img class="country_img" src="${data.flags.svg}"/>
                <h3>${data.name.common}</h3>
                <p>Population: ${(+data.population / 1000000).toFixed(1)} Millions</p>
                <p>Language: ${language}</p>
                <p>Currency: ${currensyName} ${currensySymbol}</p>
                <hr>
            `;
        
            countries.insertAdjacentHTML('beforeend', html);
            console.log(data);
        
        });
};


getCountryData('deutschland', );
getCountryData('italy');
getCountryData('usa');
getCountryData('canada');





