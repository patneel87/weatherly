import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
import LocalStorage from './__test-helpers__/storageMock';
import mockData from '../lib/MockData';

global.fetch = () => {
	const l = new Promise((res, rej) => {
		res({
			json: function() {
			return {data: mockData}
			}
		});
	});
	return l;
}

describe('App', () => {
  it('should render search and welcome if there is NO value in local storage', () => {
    localStorage.clear();
    const wrapper = shallow(<App />);

    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('Welcome').length).toEqual(1);

  })

  it('should not render current weather, seven hour forecast, or ten day forecast if there is a NO value in local storage', () => {
    localStorage.clear();
    const wrapper = shallow(<App />);

    expect(wrapper.find('CurrentWeather').length).toEqual(0);
    expect(wrapper.find('SevenHour').length).toEqual(0);
    expect(wrapper.find('TenDay').length).toEqual(0);
  })



   it('should be defined', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined();
   })

 

	it('should render search, current weather, seven hour forecast, and ten day forecast if there is a value in local storage', () => {
    localStorage.setItem('city', 'Albuquerque');
    localStorage.setItem('state', 'NM');
    const wrapper = shallow(<App />);


    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  })


	it('should not render welcome if there is a value in local storage', () => {
    localStorage.setItem('city', 'Albuquerque');
    localStorage.setItem('state', 'NM');
    const wrapper = shallow(<App />);

    expect(wrapper.find('Welcome').length).toEqual(0);
  })


})