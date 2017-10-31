import React from 'react';
import apiResponse from './apiResponse';


const CurrentWeather = () => {
	return (
		<div>
			<h1>{apiResponse.current.cityState} {apiResponse.current.country}</h1>
			<h3>{apiResponse.current.CurrentWeather}</h3>
			<h3>{apiResponse.current.timeDay}</h3>
			<h3>{apiResponse.current.currentTemp}</h3>
			<h3>{apiResponse.current.todayHigh}</h3>
			<h3>{apiResponse.current.todayLow}</h3>
			<p>{apiResponse.current.weatherSummary}</p>
		</div>
	)
}



export default CurrentWeather;