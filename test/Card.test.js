import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';

describe('Card', () => {

  it('should be defined', () => {
    const card = shallow(<Card temp="78"
                               high="90"
                               low="15"
                               day="Monday" />);
    expect(card).toBeDefined();
    
  });

  it('should have a class name ', () => {
    const card = shallow(<Card className="card-container" />)
    expect(card.find('.card-container').length).toEqual(1);

  });

  it('should recieve props', () => {
    const card = shallow(<Card temp="78"
                               high="90"
                               low="15"
                               day="Monday" />);
    expect(card.instance().props.temp).toEqual("78")
    expect(card.instance().props.high).toEqual("90")
    expect(card.instance().props.low).toEqual("15")
    expect(card.instance().props.day).toEqual("Monday")
  });

  it('should render a day card properly', () => {
    const card = shallow(<Card time="9am"
                               temp="90"
                               hourIcon="cloudy"
                               cond="cloudy" />);
    expect(card.find('h1').text()).toEqual('9am');
    expect(card.find('h2').text()).toEqual('90');
    expect(card.find('h6').hasClass('wi-wu-cloudy')).toEqual(true);
    expect(card.find('h3').text()).toEqual('cloudy');

  })

  it('should render an hour card properly', () => {
    const card = shallow(<Card day="Monday"
                               icon="clear"
                               dayHigh="15"
                               dayLow="10"
                               dayCond="clear" />);
    expect(card.find('h3').slice(0,1).text()).toEqual('Monday');
    expect(card.find('i').hasClass('wi-wu-clear')).toEqual(true);
    expect(card.find('h1').slice(0,1).text()).toEqual('15');
    expect(card.find('h1').slice(1,2).text()).toEqual('10');
    expect(card.find('h3').slice(1,2).text()).toEqual('clear');

  })

})