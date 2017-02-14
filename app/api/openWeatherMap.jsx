var axios = require('axios');
//http://openweathermap.org/data/2.5/weather?appid=439d846049703b3092a3bc16301fb1d1&units=imperial
const OPEN_WEATHER_MAP_URL = 'http://api.wunderground.com/api/fc475c2bc2c987c5/conditions/q';
module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}/${encodedLocation}.json`;

    return axios.get(requestURL).then(
      function (res){
        debugger;
        if(res.data.response.error){
          throw new Error(res.data.response.error.type+res.data.response.error.description);
        }else{
          return res.data.current_observation.temp_c;
        }
    },function (res){
      throw new Error(res.data.response.error.type+res.data.response.error.description);
    });
  }
}
