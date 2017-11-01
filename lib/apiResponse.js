import apiKey from './apiKey';


  jQuery(document).ready(function($) {
    $.ajax({
    url : "http://api.wunderground.com/api/" + APIKey + "/hourly/forecast/forecast10day/geolookup/conditions/q/CO/Denver.json",
    dataType : "json",
    success : function(parsed_json) {
    let country = parsed_json['current_observation']['country']
    let cityState = parsed_json['current_observation']['display_location']['full']
    // console.log(cityState + ' ' + country)

    let currentWeather = parsed_json['current_observation']['weather']
    let timeDay = parsed_json['current_observation']['local_time_rfc822']
    let currentTemp = parsed_json['current_observation']['temp_f']
    let todayHigh = parsed_json['forecast']['simpleforecast']['forecastday'][0]['high']['fahrenheit']
    let todayLow = parsed_json['forecast']['simpleforecast']['forecastday'][0]['low']['fahrenheit']
    let weatherSummary = parsed_json['forecast']['txt_forecast']['forecastday']['0']['fcttext']
    console.log(currentWeather, timeDay, currentTemp, todayLow, todayHigh, weatherSummary)

    var location = parsed_json['location']['city'];
    var temp_f = parsed_json['current_observation']['temp_f'];
    console.log(parsed_json)
    alert("Current temperature in " + location + " is: " + temp_f);
    }
    });
  });

export default
// export default {
//   current:
//   {
//   cityState: 'Denver, CO',
//   country: 'USA',
//   currentWeather: 'cloudy',
//   timeDay: '6:00pm Oct 31, 2017',
//   currentTemp: 49,
//   todayHigh: 53,
//   todayLow: 31,
//   weatherSummary: 'Partly cloudy.  High 53F.  Winds light.'
//   }

// export default apiResponse = 'hi';
// }


















