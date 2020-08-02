
//display current date
 var days = ["Sunday, ","Monday, ","Tuesday, ", "Wednesay, ", "Thursday, ", "Friday, ","Saturday, "];
 var dayToday = (days[new Date().getDay()]);
 var months = [" January ", " February ", " March ", " April ", " May ", " June "," July ", " August ", " September ", " October ", " November ", " December "];
 var monthToday =(months[new Date().getMonth()]);
 var dayOfMonth = new Date().getDate();
 var year = new Date().getFullYear();

window.onload = function(){
 //var today = new Date();
 document.getElementById("today").innerHTML = dayToday + dayOfMonth + monthToday  + year;
}



//fetch temp data from API
const api_url = "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0";

async function getMaxMinTempCelsius(){ 
    const response = await fetch(api_url);
    const data = await response.json();

    var objectKeys = Object.keys(data);
    var objectLength = (objectKeys.length);
    var mostRecentSol = Object.keys(data)[(objectKeys.length)-3];
    
    document.getElementById("currentSol").innerHTML = mostRecentSol;

    const minTempFah =  Math.floor((data[mostRecentSol].AT.mn)* 9/5 + 32); //conversion to Fahrenheit
    document.getElementById("minFah").innerHTML = minTempFah;

    const maxTempFah =  Math.floor((data[mostRecentSol].AT.mx) * 9/5 + 32); //celsius
    document.getElementById("maxFah").innerHTML = maxTempFah;
    

   
    

}

getMaxMinTempCelsius();




   
 
    



