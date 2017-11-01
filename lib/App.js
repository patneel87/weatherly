import React from 'react';
import Welcome from './Welcome';
import SevenHour from './SevenHour';
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import APIKey from './.APIKey';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentWeather: {
				// cityState: null,
				// timeDay: null,
				// weatherSummary: null,
				// todayHighLow: null
			}
			// sevenHour: {
			// }
		}
	}



	handleSearch() {
		$.ajax({
    url : "http://api.wunderground.com/api/" + APIKey + "/hourly/forecast/forecast10day/geolookup/conditions/q/CO/Denver.json",
    dataType : "json",
    success : (parsed_json) => {

    console.log(parsed_json)


    /////////  CURRENT WEATHER   ////////////
    let cityState = parsed_json['current_observation']['display_location']['full'];

    let timeDay = parsed_json['current_observation']['observation_time'].split('');
    timeDay = timeDay.slice(16, timeDay.length).join('');

    let weatherSummary = parsed_json['forecast']['txt_forecast']['forecastday']['0']['fcttext'];
    weatherSummary = weatherSummary.split('')
    for (let i = 0; i < weatherSummary.length; i++) {
      if (weatherSummary[i] === 'H') {
        weatherSummary.splice(i, 10);
        break;
      }
    }
    weatherSummary = weatherSummary.join('')

    let todayHigh = parsed_json['forecast']['simpleforecast']['forecastday'][0]['high']['fahrenheit'];
    let todayLow = parsed_json['forecast']['simpleforecast']['forecastday'][0]['low']['fahrenheit'];
    let todayHighLow = ('High ' + todayHigh + 'F. Low ' + todayLow + 'F');

    //////////  SEVEN HOUR   ////////////
    // TIMES
    let timePlusOne = parsed_json['hourly_forecast'][0]['FCTTIME']['civil']
    let timePlusTwo = parsed_json['hourly_forecast'][1]['FCTTIME']['civil']
    let timePlusThree = parsed_json['hourly_forecast'][2]['FCTTIME']['civil']
    let timePlusFour = parsed_json['hourly_forecast'][3]['FCTTIME']['civil']
    let timePlusFive = parsed_json['hourly_forecast'][4]['FCTTIME']['civil']
    let timePlusSix = parsed_json['hourly_forecast'][5]['FCTTIME']['civil']

    // TEMPS
    let nowTemp = parsed_json['current_observation']['temp_f']
    let tempPlusOne = parsed_json['hourly_forecast'][0]['temp']['english']
    let tempPlusTwo = parsed_json['hourly_forecast'][1]['temp']['english']
    let tempPlusThree = parsed_json['hourly_forecast'][2]['temp']['english']
    let tempPlusFour = parsed_json['hourly_forecast'][3]['temp']['english']
    let tempPlusFive = parsed_json['hourly_forecast'][4]['temp']['english']
    let tempPlusSix = parsed_json['hourly_forecast'][5]['temp']['english']

    // CONDITIONS
    let nowCond = parsed_json['current_observation']['weather']
    let condPlusOne = parsed_json['hourly_forecast'][0]['condition']
    let condPlusTwo = parsed_json['hourly_forecast'][1]['condition']
    let condPlusThree = parsed_json['hourly_forecast'][2]['condition']
    let condPlusFour = parsed_json['hourly_forecast'][3]['condition']
    let condPlusFive = parsed_json['hourly_forecast'][4]['condition']
    let condPlusSix = parsed_json['hourly_forecast'][5]['condition']





    // let todayLow = parsed_json['forecast']['simpleforecast']['forecastday'][0]['low']['fahrenheit'];
    // let currentWeather = parsed_json['current_observation']['weather']
    // let timeDay = parsed_json['current_observation']['local_time_rfc822']
    // let currentTemp = parsed_json['current_observation']['temp_f']
    // let weatherSummary = parsed_json['forecast']['txt_forecast']['forecastday']['0']['fcttext']
    // console.log(currentWeather, timeDay, currentTemp, todayLow, todayHigh, weatherSummary)

    // var location = parsed_json['location']['city'];
    // var temp_f = parsed_json['current_observation']['temp_f'];

		this.setState({	currentWeather: {
											cityState: cityState,
											timeDay: timeDay,
											weatherSummary: weatherSummary,
											todayHighLow: todayHighLow,
										}
										// sevenHour: {
										// 	now: {
										// 		time: 'NOW',
										// 		temp: nowTemp,
										// 		condition: nowCond
										// 	}
										// 	nowPlusOne: {
										// 		time: timePlusOne,
										// 		temp: tempPlusOne,
										// 		condition: condPlusOne
										// 	}
										// 	nowPlusTwo: {
										// 		time: timePlusTwo,
										// 		temp: tempPlusTwo,
										// 		condition: condPlusTwo
										// 	}
										// 	nowPlusThree: {
										// 		time: timePlusThree,
										// 		temp: tempPlusThree,
										// 		condition: condPlusThree
										// 	}
										// 	nowPlusFour: {
										// 		time: timePlusFour,
										// 		temp: tempPlusFour,
										// 		condition: condPlusFour
										// 	}
										// 	nowPlusFive: {
										// 		time: timePlusFive,
										// 		temp: tempPlusFive,
										// 		condition: condPlusFive
										// 	}
										// 	nowPlusSix: {
										// 		time: timePlusSix,
										// 		temp: tempPlusSix,
										// 		condition: condPlusSix
										// 	}
										// }
									}
							
				)
    	}
    });
	}

	render() {
	  return (
	    <div>
		    <Search 
		    	onClick={this.handleSearch.bind(this)}
		    />
		    <Welcome />
		    <CurrentWeather 
		    	currentWeather={this.state.currentWeather}
		    />
		    <SevenHour 
		    	// sevenHour={this.state.sevenHour}
		    />
		
	    </div>
	  );
	}
}
			// 	now: {
			// 		time: null,
			// 		temp: null,
			// 		condition: null
			// 	}
			// 	nowPlusOne: {
			// 		time: null,
			// 		temp: null,
			// 		condition: null
			// 	}
			// 	nowPlusTwo: {
			// 		time: null,
			// 		temp: null,
			// 		condition: null
			// 	}
			// 	nowPlusThree: {
			// 		time: null,
			// 		temp: null,
			// 		condition: null
			// 	}
			// 	nowPlusFour: {
			// 		time: null,
			// 		temp: null,
			// 		condition: null
			// 	}
			// 	nowPlusFive: {
			// 		time: null,
			// 		temp: null,
			// 		condition: null
			// 	}
			// 	nowPlusSix: {
			// 		time: null,
			// 		temp: null,
			// 		condition: null
			// 	}