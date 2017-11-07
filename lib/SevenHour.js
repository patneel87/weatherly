import React from 'react';
import Card from './Card';
import '../styles/sevenHour.css';
import PropTypes from 'prop-types';

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
          );
        })
      }
		</div>
	);
};

SevenHour.propTypes = {
  sevenHour: PropTypes.array
};

export default SevenHour;