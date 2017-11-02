import React from 'react';
import Card from './Card';
import sevenHour from './sevenHour.scss';

const SevenHour = (props) => {
	return (
		<div className="seven-hour">
    
			 {
        props.sevenHour.map( (card, index) => {
          return (
            <Card {...card} key={index}/>
            )
        })
      }
		</div>
	)
}

export default SevenHour;