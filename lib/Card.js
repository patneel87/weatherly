import React from 'react';
import '../styles/card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
		<div className="card-container">
	{
		props.time &&
			<div className="hour-cards">
				<h1>{props.time}</h1>
				<h2>{props.temp}</h2>
				<h6 className={`wi wi-wu-${props.hourIcon}`}></h6>
				<h3>{props.cond}</h3>
			</div>		
	}

	{
		!props.time && 
			<div className="day-cards">
				<h3 className="ten-day-day">{props.day}</h3>
				<i className={`wi wi-wu-${props.icon}`}></i>
				<div className="high-low">
					<h1>{props.dayHigh}</h1>
					<h1><span className="low-span">{props.dayLow}</span></h1>
				</div>
				<h3 className="day-cond">{props.dayCond}</h3>
			</div>
		
	}
		</div>

	);
};

Card.propTypes = {
  time: PropTypes.string,
  temp: PropTypes.string,
  hourIcon: PropTypes.string,
  cond: PropTypes.string,
  day: PropTypes.string,
  icon: PropTypes.string,
  dayHigh: PropTypes.string,
  dayLow: PropTypes.string,
  dayCond: PropTypes.string
};

export default Card;