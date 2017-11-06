import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay';

  let mockData = [
   "Denver, CO",
   "10am",
   "cloudy",
   "48" 
]

describe('TenDay', () => {
  
  it('should be defined', () => {
    const wrapper = shallow(<TenDay tenDay={mockData} />)
    expect(wrapper).toBeDefined();

  })
  
})