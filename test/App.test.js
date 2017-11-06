import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
import LocalStorage from './__test-helpers__/storageMock';
import mockData from '../lib/MockData';

global.fetch = () => {

	return {

	}
}


describe('App', () => {

   it('should be defined', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined();
   })

  it.skip('should render only the search component and welcome component if there is no value in local storage', () => {
    const app = mount(<App />);

    

    global.localStorage = { localStorage: {city: 'Albuquerque', state: 'NM'}}

    // expect(wrapper.find('Search').length).toEqual(1);
    // expect(wrapper.find('CurrentWeather').length).toEqual(1);
    // expect(wrapper.find('SevenHourForecast').length).toEqual(1);
    // expect(wrapper.find('TenDayForecast').length).toEqual(1);

  })

})