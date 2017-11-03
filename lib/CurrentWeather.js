import React from 'react';
import Card from './Card';
import './currentWeather.css';

const CurrentWeather = (props) => {
	return (
		<div className="current-weather">
			<h1>{props.currentWeather.cityState}</h1>
			<h3>{props.currentWeather.timeDay}</h3>
			<h3>{props.currentWeather.weatherSummary}</h3>
			<h3>{props.currentWeather.todayHighLow}</h3>
		</div>
	)
}

export default CurrentWeather;