import React from 'react';
// import apiResponse from './apiResponse';


const CurrentWeather = (props) => {
	return (
		<div className="current-weather">
			<h1>{props.currentWeather.cityState}</h1>
		  <h3>{props.currentWeather.currentConditions}</h3>
			<h3>{/*apiResponse.current.timeDay*/}</h3>
			<h3>{/*apiResponse.current.currentTemp*/}</h3>
			<h3>{/*apiResponse.current.todayHigh*/}</h3>
			<h3>{/*apiResponse.current.todayLow*/}</h3>
			<p>{/*apiResponse.current.weatherSummary*/}</p>
		</div>
	)
}



export default CurrentWeather;