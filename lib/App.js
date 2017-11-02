import React from 'react';
import Welcome from './Welcome';
import SevenHour from './SevenHour';
import CurrentWeather from './CurrentWeather';

// import Search from './Search';
import APIKey from './.APIKey';
import cleanData from './cleanData';
import TenDay from './TenDay';
import './app.scss';


export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
				currentWeather: {
				
				},
				sevenHour: {

				}
			}
		}

	
	componentDidMount() {
		fetch("http://api.wunderground.com/api/" + APIKey + "/hourly/forecast/forecast10day/geolookup/conditions/q/CO/Denver.json")
		.then(data => data.json())
		.then(data => {
			const apiData = cleanData(data)
			const {currentWeather, sevenHour, tenDay} = apiData;
			this.setState({currentWeather: currentWeather, sevenHour: sevenHour, tenDay: tenDay})
			console.log(sevenHour);
		})

	}

	render() {
	  return (
	    <div>
		    {/*<Search 
		    	// onClick={this.handleSearch.bind(this)}
		    />*/}
		    <Welcome />
		    <CurrentWeather 
		    	currentWeather={this.state.currentWeather}
		    />

		 		<SevenHour sevenHour={[this.state.sevenHour]} />
		     
		    	
		    
		

	    </div>
	  );
	}

}
	