import React from 'react';

const Card = (props) => {
	return (
		<div>
		  
			<h1>Time {props.time}</h1>
			<div>Temp {props.temp}</div>
			<h3>Condition {props.cond}</h3>
		
		</div>

	)
}





export default Card;