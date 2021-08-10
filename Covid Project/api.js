let responseData = {};

fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "a82a01d212mshc256fec06f43d71p1f7e49jsnde5dffcdb73d",
      "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
    }
  })

  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayCases(data);
    displayDailyCases(data);
    show(data);
    responseData = data;
    // displaySearchData(responseData);
  })
  .catch(error => console.log('error'))

function displayCases(data){
    document.getElementById("totalcases").innerHTML = data.world_total.total_cases;
    document.getElementById("totalrecover").innerHTML = data.world_total.total_recovered;
    document.getElementById("totaldeath").innerHTML = data.world_total.total_deaths;
}

function displayDailyCases(data){
  document.getElementById("activecases").innerHTML = data.world_total.active_cases;
  document.getElementById("dailycases").innerHTML = data.world_total.new_cases;
  document.getElementById("dailydeath").innerHTML = data.world_total.new_deaths;
}

// Function to define innerHTML for HTML table
function show(data) {
  let tab =
    `<tr>
    <th id="thcountry">Country</th>
    <th id="thcases">Cases</th>
    <th id="threcover">Recover</th>
    <th id="thdeath">Death</th>
    </tr>`;
  
    // Loop to access all rows
    for (let i = 0; i < 10; i++){
      tab += 
      `<tr> 
        <td>${data.countries_stat[i].country_name}</td>
        <td id="trcases">${data.countries_stat[i].cases}</td>
        <td id="trrecover">${data.countries_stat[i].total_recovered}</td>
        <td id="trdeath">${data.countries_stat[i].deaths}</td>
      </tr>`;
    }
    
    // Setting innerHTML as tab variable
      document.getElementById("listcountry").innerHTML = tab;
}

const d = new Date();
document.getElementById("datentime").innerHTML = d.toDateString();

// lets filters it
// source = https://www.youtube.com/watch?v=3NG8zy0ywIk
// source = https://codepen.io/jamespen/pen/PooYyqZ
// source = https://www.youtube.com/watch?v=SWkPXbQXArk&t=94s

const searchBar = document.getElementById('searchBar');
console.log(searchBar);

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  
  const filteredCountry = responseData.countries_stat.filter( (country) => {
    return country.country_name.toLowerCase().includes(searchString)
  });
  console.log(filteredCountry);

  document.getElementById("countrycases").innerHTML = filteredCountry[0].cases;
  document.getElementById("countryrecover").innerHTML = filteredCountry[0].total_recovered;
  document.getElementById("countrydeaths").innerHTML = filteredCountry[0].deaths;
});