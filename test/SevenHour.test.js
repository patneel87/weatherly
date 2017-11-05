import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';

let mockData = {
   cityState: "Denver, CO",
   timeDay: "10am",
   weatherSummary: "cloudy",
   todayHighLow: "48" 
}

describe('SevenHour', () => {

   it.skip('should be defined', () => {
    const sevenHour = mount(<SevenHour sevenHour={mockData} />);

    expect(sevenHour).toBeDefined();
  });

  it.skip('should recieve props', () => {
    const sevenHour = mount(<SevenHour sevenHour={mockData} />)

    expect(sevenHour.props().sevenHour.cityState).toEqual("Denver, CO")
    expect(sevenHour.props().sevenHour.timeDay).toEqual("10am")
    expect(sevenHour.props().sevenHour.weatherSummary).toEqual("cloudy")
    expect(sevenHour.props().sevenHour.todayHighLow).toEqual("48")
    
  })
  
})



