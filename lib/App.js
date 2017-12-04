import React from 'react';
import Welcome from './Welcome';
import SevenHour from './SevenHour';
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import APIKey from './.APIKey';
import cleanData from './cleanData';
import TenDay from './TenDay';
import '../styles/app.css';


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentWeather: {},
      sevenHour: [],
      tenDay: [],
      city: localStorage.city,
      state: localStorage.state,
      placeholder: ''
    };
  }

  formatLocation() {
    localStorage[0];
  }

  fetchData(state, city) {
    fetch(
      `https://api.wunderground.com/api/${APIKey}
      /hourly/forecast/forecast10day/geolookup/conditions/q/${state}
      /${city}.json`
      )
		.then(data => data.json())
		.then(data => {
  const apiData = cleanData(data);
  const {currentWeather, sevenHour, tenDay} = apiData;
  
  this.setState({currentWeather: currentWeather, sevenHour: sevenHour, tenDay: tenDay});
		});
  }

  componentDidMount() {
    this.fetchData(this.state.state, this.state.city);
  }

  render() {

    if (localStorage.length > 0) {
      return (
        <div>
          <img className="logo" src="lib/assets/weatherly-logo.svg" />
          <Search search={this.fetchData.bind(this)} />
          <CurrentWeather currentWeather={this.state.currentWeather} />
          <SevenHour sevenHour={this.state.sevenHour} />
             <div className="ten-day-break">
                <h4>{this.state.currentWeather.cityState}</h4>
                <div className="line-break"></div>
                <h4>10-Forecast</h4>
             </div>
          <TenDay  tenDay={this.state.tenDay} />
        </div>
      );
    }	else if (localStorage.length === 0) {
      return (
				<div>
          <img className="logo" src="lib/assets/weatherly-logo.svg" />
          <Search search={this.fetchData.bind(this)} />  
					<Welcome searchPopular={this.fetchData.bind(this)} />
				</div>
			);
    }
    return null;
  }
}
	
