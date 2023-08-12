





const getCountryData = function(countryName){
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //console.log(data[0]);
        console.log(data[0].name.common);
        
    })
};



getCountryData('canada');




