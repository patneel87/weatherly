import React from 'react';
import Card from './Card';
import '../styles/tenDay.scss';

const TenDay = (props) => {
  return (
    <div className="ten-day">

    	{
    		props.tenDay.map((card, index) => {
		      return(
			      <Card day={card.day}
			      			dayHigh={card.dayHigh}
			      			dayLow={card.dayLow}
			      			dayCond={card.dayCond}
			      			key={index}
			      />
		      )
    		})
    	}
    </div>
  )
}

export default TenDay;