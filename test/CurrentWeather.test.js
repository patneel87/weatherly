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

  it('should have a class name', () => {
    const currentWeather = shallow(<CurrentWeather className="current-weather" currentWeather={mockData} />);
    expect(currentWeather.find('.current-weather').length).toEqual(1);
  })

  it('should recieve props', () => {
    const currentWeather = mount(<CurrentWeather currentWeather={mockData} />)
    expect(currentWeather.props().currentWeather.cityState).toEqual("Denver, CO")
    expect(currentWeather.props().currentWeather.timeDay).toEqual("10am")
    expect(currentWeather.props().currentWeather.weatherSummary).toEqual("cloudy")
    expect(currentWeather.props().currentWeather.todayHighLow).toEqual("48")
    
  });

  it('should render correctly', () => {
    const currentWeather = mount(<CurrentWeather currentWeather={mockData} />)
    expect(currentWeather.find('h1').text()).toEqual('Denver, CO');
    expect(currentWeather.find('h3').slice(0, 1).text()).toEqual('10am');
    expect(currentWeather.find('h3').slice(1, 2).text()).toEqual('cloudy');
    expect(currentWeather.find('h3').slice(2, 3).text()).toEqual('48');

  });

})