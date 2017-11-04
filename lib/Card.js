import React from 'react';
import '../styles/card.css';
import FontAwesome from 'react-fontawesome';

const Card = (props) => {
	return (
		<div className="card-container">
	{
		props.time &&
			<div className="hour-cards">
				<h1>{props.time}</h1>
				<h2>{props.temp}</h2>
				<h3>{props.cond}</h3>
			</div>		
	}

	{
		!props.time && 
			<div className="day-cards">
				<h3 className="ten-day-day">{props.day}</h3>
				<i className="wi wi-night-sleet"></i>
				<div className="high-low">
					<h1>{props.dayHigh}</h1>
					<h1><span className="low-span">{props.dayLow}</span></h1>
				</div>
				<h3 className="day-cond">{props.dayCond}</h3>
			</div>
		
	}
		</div>

	)
}

export default Card;