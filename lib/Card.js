import React from 'react';

const Card = () => {
	return (
		<div>
			<h1>Day {/*day*/}</h1>
			<h1>Time {/*time(nearest hour)*/}</h1>
			<div>Weather Image {/*conditions*/}</div>
			<h3>Weather Condition {/*matches image*/}</h3>
			<h3>Projected Temperature {/*hourly*/}</h3>
			<h3>Projected Temperature {/*daily - high*/}</h3>
			<h3>Projected Temperature {/*daily - low*/}</h3>
		</div>

	)
}





export default Card;