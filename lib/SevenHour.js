import React from 'react';
import Card from './Card';
import '../styles/sevenHour.css';
import FontAwesome from 'react-fontawesome';

const SevenHour = (props) => {
	return (
		<div className="seven-hour">
    
			{
        props.sevenHour.map( (card, index) => {
          return (
            
            <Card className="hour-card"
                  time={card.time} 
            			temp={card.temp}
            			cond={card.cond}
                  hourIcon={card.hourIcon}
            			key={index}
            />
          )
        })
      }
		</div>
	)
}

export default SevenHour;