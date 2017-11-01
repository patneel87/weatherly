import React from 'react';
import Welcome from './Welcome';
import SevenHour from './SevenHour';
import CurrentWeather from './CurrentWeather';
import TenDay from './TenDay';
import Search from './Search';
import APIKey from './.APIKey';
import './app.scss';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentWeather: {
				cityState: 'Kansas City, MO',
				currentConditions: 'windy as heck'
			}
		}
	}

	handleSearch() {
		$.ajax({
    url : "http://api.wunderground.com/api/" + APIKey + "/hourly/forecast/forecast10day/geolookup/conditions/q/CO/Denver.json",
    dataType : "json",
    success : (parsed_json) => {

    // let currentWeather = parsed_json['current_observation']['weather']
    // let timeDay = parsed_json['current_observation']['local_time_rfc822']
    // let currentTemp = parsed_json['current_observation']['temp_f']
    // let todayHigh = parsed_json['forecast']['simpleforecast']['forecastday'][0]['high']['fahrenheit']
    // let todayLow = parsed_json['forecast']['simpleforecast']['forecastday'][0]['low']['fahrenheit']
    // let weatherSummary = parsed_json['forecast']['txt_forecast']['forecastday']['0']['fcttext']
    // console.log(currentWeather, timeDay, currentTemp, todayLow, todayHigh, weatherSummary)

    // var location = parsed_json['location']['city'];
    // var temp_f = parsed_json['current_observation']['temp_f'];
    console.log(parsed_json)
		this.setState({currentWeather: {
										cityState: parsed_json['current_observation']['display_location']['full'],
										currentConditions: parsed_json['current_observation']['weather']

		}})
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
		    <SevenHour />
        <TenDay />
	    </div>
	  );
	}
}