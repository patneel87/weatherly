import React from 'react';
import Card from './Card';
import '../styles/ten-day.css';

const TenDay = (props) => {
  return (
    <div className="ten-day">
     <div></div>

      {
        props.tenDay.map((card, index) => {
          return (
            <Card day={card.day}
                  dayHigh={card.dayHigh}
                  dayLow={card.dayLow}
                  dayCond={card.dayCond}
                  icon={card.icon}
                  key={index}
            />
          );
        })
      }
    </div>
  );
};

export default TenDay;