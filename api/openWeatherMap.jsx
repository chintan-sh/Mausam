var axios = require('axios');


// http://api.openweathermap.org/data/2.5/find?q=Boston&units=metric&appid=c799cd53fbc30fcb8abf24257d79c7df
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=c799cd53fbc30fcb8abf24257d79c7df&units=metric';


module.exports ={
    // getTemp function accepts one argument location
    getTemp : function(location){
        var encodedLocation = encodeURIComponent(location); // translate _spaces_ into %20 etc
        var URL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; //create whole URL

        // ajax call using GET & ES6 Promises. Once promise executed - o/p appears inside 'then' (2 functions, each for success and failure)
        return axios.get(URL).then(function (res) {
            if(res.data.count && res.data.count > 0){
                return res.data.list[0];//.main.temp
            }
            throw Error(res.data.message);
        }, function(res){
            throw Error(res.data.message);
        });
    }
}