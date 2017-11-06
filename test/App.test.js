import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
import LocalStorage from './__test-helpers__/storageMock';
import './__test-helpers__/mockData.js';


global.fetch = () => {

	return {

	}
}




describe('App', () => {

   

  it('should render only the search component and welcome component if there is no value in local storage', () => {
    const app = mount(<App />);

    

    global.localStorage = { localStorage: {city: 'Albuquerque', state: 'NM'}}
    console.log(global.localStorage)

    // expect(wrapper.find('Search').length).toEqual(1);
    // expect(wrapper.find('CurrentWeather').length).toEqual(1);
    // expect(wrapper.find('SevenHourForecast').length).toEqual(1);
    // expect(wrapper.find('TenDayForecast').length).toEqual(1);

  })

})