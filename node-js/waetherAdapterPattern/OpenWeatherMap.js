const fetch = require('node-fetch');
const config = require('./config.js');

class OpenWeatherMap{

    constructor(city){
        this.city = city;
    }

    getWeather(){
        return fetch(this.apiURL())
        .then((response)=>response.json())
        .then((data)=>this.formattedInfo(data))
        .catch((error)=>console.log)
    }

    apiURL(){
        return `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=`
    }

}