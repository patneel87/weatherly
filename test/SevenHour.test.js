import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';

let mockData = [
   "Denver, CO",
   "10am",
   "cloudy",
   "48" 
]

describe('SevenHour', () => {

   it('should be defined', () => {
    const wrapper = shallow(<SevenHour sevenHour={mockData} />);
    expect(wrapper).toBeDefined();
  });

  it.skip('should recieve props', () => {
    const sevenHour = mount(<SevenHour sevenHour={mockData} />)

    expect(sevenHour.props().sevenHour.cityState).toEqual("Denver, CO")
    expect(sevenHour.props().sevenHour.timeDay).toEqual("10am")
    expect(sevenHour.props().sevenHour.weatherSummary).toEqual("cloudy")
    expect(sevenHour.props().sevenHour.todayHighLow).toEqual("48")
    
  })

   it.skip('should render passed in index', () => {
    const card = shallow(<SevenHour index={1} />);
    
    expect(card.find('.index').text() ).toEqual('1');
  });
  
})



