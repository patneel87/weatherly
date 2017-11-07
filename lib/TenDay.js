import React from 'react';
import Card from './Card';
import '../styles/ten-day.css';
import PropTypes from 'prop-types';

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

TenDay.propTypes = {
  day: PropTypes.string,
  dayHigh: PropTypes.number,
  dayLow: PropTypes.number,
  dayCond: PropTypes.string,
  icon: PropTypes.string,
  tenDay: PropTypes.array
};

export default TenDay;