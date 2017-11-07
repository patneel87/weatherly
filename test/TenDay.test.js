import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay';

  let mockData = [
  {  
day: "TODAY",
dayCond: "Chance of Rain",
dayHigh: "66",
dayLow: "41",
icon: "chancerain",
  }
]

describe('TenDay', () => {
  
  it('should be defined', () => {
    const wrapper = shallow(<TenDay tenDay={mockData} />)
    expect(wrapper).toBeDefined();

  });

  it('should have a class name', () => {
    const tenDay = shallow(<TenDay className="ten-day" tenDay={mockData} />);
    expect(tenDay.find('.ten-day').length).toEqual(1);
  })

  it('should recieve props', () => {
    const tenDay = shallow(<TenDay tenDay={mockData} />)
    expect(tenDay.find('Card').props().day).toEqual("TODAY")
    expect(tenDay.find('Card').props().dayCond).toEqual("Chance of Rain")
    expect(tenDay.find('Card').props().dayHigh).toEqual("66")
    expect(tenDay.find('Card').props().dayLow).toEqual("41")
    expect(tenDay.find('Card').props().icon).toEqual("chancerain")
    
  });

  it('should render correctly', () => {
    const tenDay = mount (<TenDay tenDay={mockData} />)
    expect(tenDay.find('Card').find('h1').slice(0, 1).text()).toEqual('66');
    expect(tenDay.find('Card').find('h1').slice(1, 2).text()).toEqual('41');
    expect(tenDay.find('Card').find('i').hasClass('wi-wu-chancerain')).toEqual(true);
    expect(tenDay.find('Card').find('h3').slice(0, 1).text()).toEqual('TODAY');
    expect(tenDay.find('Card').find('h3').slice(1, 2).text()).toEqual('Chance of Rain');
    expect(tenDay.find('Card').find('span').text()).toEqual('41');
  })
  
})