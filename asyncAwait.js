


const countries = document.querySelector('.countries');

const getCountryData = async function(countryName){
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data =  await response.json();
    //console.log(data[0]);
    displayCountry(data[0]);
}

const displayCountry = function(data){
    try {
        const currencies = data.currencies;
    const currensyName = Object.values(currencies)[0].name;
    const currensySymbol = Object.values(currencies)[0].symbol;
    const languages = data.languages;
    const language = Object.values(languages)[0];

    const html = `
    <img class="country_img" src="${data.flags.svg}"/>
    <h3>${data.name.common}</h3>
    <p>Population: ${(+data.population / 1000000).toFixed(1)} Millions</p>
    <p>Language: ${language}</p>
    <p>Currency: ${currensyName} ${currensySymbol}</p>
    <hr>

    `;

    countries.insertAdjacentHTML('beforeend', html);

    } catch(e){
        console.log(e);
    }

}

getCountryData('usa');
getCountryData('australia');
getCountryData('iceland');












