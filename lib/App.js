import React from 'react';
import Welcome from './Welcome';
import SevenHour from './SevenHour';
import CurrentWeather from './CurrentWeather';
<<<<<<< HEAD

=======
>>>>>>> e38b9c2dd90adb0e86a3f5166d64b1989a73e0d6
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
				city: localStorage.city,
				state: localStorage.state,
			}
		}

	formatLocation() {
		let x = [];
		localStorage[0]
	}


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
<<<<<<< HEAD
		this.fetchData(this.state.state, this.state.city)
=======
		this.fetchData('AZ', 'Tucson')
>>>>>>> e38b9c2dd90adb0e86a3f5166d64b1989a73e0d6
	}

	render() {
	  return (
	    <div>
<<<<<<< HEAD
		    <Search />
=======
		    <Search  />
>>>>>>> e38b9c2dd90adb0e86a3f5166d64b1989a73e0d6
		    <Welcome />
		    <CurrentWeather currentWeather={this.state.currentWeather} />
		 		<SevenHour sevenHour={this.state.sevenHour} />
		 		<TenDay tenDay={this.state.tenDay} />
		     
	    </div>
	  );
	}

}
	