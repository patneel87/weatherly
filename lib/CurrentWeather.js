import React from 'react';
import '../styles/currentWeather.css';
import PropTypes from 'prop-types';

const CurrentWeather = (props) => {
  console.log(props)
  return (
		<div className="current-weather">
			<h1>{props.currentWeather.cityState}</h1>
			<h3>{props.currentWeather.timeDay}</h3>
			<h3 id="weather-summary">{props.currentWeather.weatherSummary}</h3>
			<h3>{props.currentWeather.todayHighLow}</h3>
		</div>
	);
};

CurrentWeather.propTypes = {
  cityState: PropTypes.string,
  timeDay: PropTypes.string,
  weatherSummary: PropTypes.string,
  todayHighLow: PropTypes.string,
  currentWeather: PropTypes.object
};

export default CurrentWeather;
