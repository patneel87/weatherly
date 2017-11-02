import React from 'react';
import Welcome from './Welcome';
import SevenHour from './SevenHour';
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import APIKey from './.APIKey';
import cleanData from './cleanData';
import TenDay from './TenDay';
import './app.scss';


export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
				currentWeather: {},
				sevenHour: [],
				tenDay: [],
				city: '',
				state: '',
			}
		}

	//pull fetch request out and call in componentDidMount and handleSearch--pass in city and state


	fetchData(state, city) {
		fetch(`http://api.wunderground.com/api/${APIKey}/hourly/forecast/forecast10day/geolookup/conditions/q/${state}/${city}.json`)
		.then(data => data.json())
		.then(data => {
			const apiData = cleanData(data)
			const {currentWeather, sevenHour, tenDay} = apiData;
			this.setState({currentWeather: currentWeather, sevenHour: sevenHour, tenDay: tenDay})
		})
	}

	componentDidMount() {
		this.fetchData('AZ', 'Tucson')
	}

	render() {
	  return (
	    <div>
		    <Search  />
		    <Welcome />
		    <CurrentWeather currentWeather={this.state.currentWeather} />
		 		<SevenHour sevenHour={this.state.sevenHour} />
		 		<TenDay tenDay={this.state.tenDay} />
		     
	    </div>
	  );
	}

}
	