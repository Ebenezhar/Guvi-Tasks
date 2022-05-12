const getCountries = () =>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
            const countries = xhr.response;
            //console.log(countries);
            const regionalfilt = countries.filter(asian => asian.region == "Asia"); 
           console.log(regionalfilt) ;   
           const populcountries2l = countries.filter(popul => popul.population <= 2_00_000);
           console.log(populcountries2l); 
           const details = countries.forEach(element => 
            console.log(`Country Name: ${element.name.common}, Capital: ${element.capital}, Flag: ${element.flags.png}`));
           let populationArr = [];
            for(let i in countries)
            populationArr.push(countries[i].population);
            console.log(populationArr);
            let totalPopulation = populationArr.reduce((sum,curr) => sum+curr);
            console.log("Total population is: ",totalPopulation);             
    }
};
getCountries();