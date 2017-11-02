import React from 'react';

const Card = (props) => {
	return (
		<div>
			<h1>{props.time}</h1>
			<div>{props.temp}</div>
			<h3>{props.cond}</h3>

			<h3>{props.day}</h3>
			<h1>{props.dayHigh}</h1>
			<h1>{props.dayLow}</h1>
			<h3>{props.dayCond}</h3>
		</div>
	)
}

export default Card;