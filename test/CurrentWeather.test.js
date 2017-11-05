import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';

let mockData = {
   cityState: "Denver, CO",
   timeDay: "10am",
   weatherSummary: "cloudy",
   todayHighLow: "48" 
}


describe('CurrentWeather', () => {

  it('should be defined', () => {
    const currentWeather = mount(<CurrentWeather currentWeather={mockData} />);

    expect(currentWeather).toBeDefined();
  });

  it.skip('should have a class name', () => {
    const currentWeather = mount(<CurrentWeather className="current-weather" />);

    expect(currentWeather.find('.current-weather').length).toEqual(1);
  })

  it('should recieve props', () => {
    const currentWeather = mount(<CurrentWeather currentWeather={mockData} />)
    expect(currentWeather.props().currentWeather.cityState).toEqual("Denver, CO")
    expect(currentWeather.props().currentWeather.timeDay).toEqual("10am")
    expect(currentWeather.props().currentWeather.weatherSummary).toEqual("cloudy")
    expect(currentWeather.props().currentWeather.todayHighLow).toEqual("48")
    
  });

  it.skip('should render correctly', () => {
    const currentWeather = mount(<CureentWeather currentWeather={mockData} />)
    console.log(currentWeather.debug())
    expect(currentWeather.find('h1').length).toEqual(1);
    expect(currentWeather.find('h3').length).toEqual(3);
  });

})