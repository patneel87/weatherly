import React from 'react';
import Card from './Card';
import '../styles/ten-day.css';

const TenDay = (props) => {
  return (
    <div className="ten-day">
      <div className="ten-day-break">
      <h4>Denver, CO</h4>
      <div className="line-break"></div>
      <h4>10-Forecast</h4>
      </div>

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