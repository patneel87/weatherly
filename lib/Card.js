import React from 'react';

const Card = (props) => {
	return (
		<div>
		  {console.log(props[0], 'props')}
			<h1>Time {props.card}</h1>
			<div>Temp {/*props.sevenHour.now.temp*/}</div>
			<h3>Condition {/*props.sevenHour.now.condition*/}</h3>
		
		</div>

	)
}





export default Card;