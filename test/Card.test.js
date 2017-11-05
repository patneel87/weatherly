import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';

describe('Card', () => {

  it('should be defined', () => {
    const card = shallow(<Card />);

    expect(card).toBeDefined();
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
  })
  
})