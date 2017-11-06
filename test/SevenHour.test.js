import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';

let mockDatas = [
  {
cond:"Chance of Rain",
hourIcon:"chancerain",
temp:"66",
time:"NOW",
  }
]

describe('SevenHour', () => {

   it('should be defined', () => {
    const wrapper = shallow(<SevenHour sevenHour={mockDatas} />);
    expect(wrapper).toBeDefined();
  });

   it('should have a class name', () => {
    const sevenHour = shallow(<SevenHour className="seven-hour" sevenHour={mockDatas} />);
    expect(sevenHour.find('.seven-hour').length).toEqual(1);
  })

  it('should recieve props', () => {
    const sevenHour = shallow(<SevenHour sevenHour={mockDatas} />)
    expect(sevenHour.find('Card').props().cond).toEqual("Chance of Rain")
    expect(sevenHour.find('Card').props().hourIcon).toEqual("chancerain")
    expect(sevenHour.find('Card').props().temp).toEqual("66")
    expect(sevenHour.find('Card').props().time).toEqual("NOW")
    
  });

   it('should render correctly', () => {
    const sevenHour = mount (<SevenHour sevenHour={mockDatas} />)
    expect(sevenHour.find('h1').length).toEqual(1);
    expect(sevenHour.find('h2').length).toEqual(1);
    expect(sevenHour.find('h6').length).toEqual(1);
    expect(sevenHour.find('h3').length).toEqual(1);

   });
  
});



