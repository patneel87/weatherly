import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';

describe('Search', () => {
	it('should contain an empty string in the input box on load', () => {
		const search = shallow(<Search />);
		expect(search.state('value')).toEqual('')
	})
	
	it('should have a suggestions array that is empty by default', () => {
		const search = shallow(<Search />);
		const inst = search.instance();
		expect(inst.suggestions).toEqual([])
	})

	it('should populate the suggestions array only when two or more letters are entered', () => {
		const search = shallow(<Search />);
		const inst = search.instance()

		search.find('.input-search').simulate('change', {target: {value: 'l'}})
		expect(inst.suggestions).toEqual([])

		search.find('.input-search').simulate('change', {target: {value: 'lu'}})
		expect(inst.suggestions).toEqual(['lubbock, tx'])
	})

	it('should limit the length of the suggestions array to 5 cities', () => {
		const search = shallow(<Search />);
		const inst = search.instance();
		search.find('.input-search').simulate('change', {target: {value: 'la'}})
		expect(inst.suggestions.length).toEqual(5)
	})

	it('should change state on user input', () => {
		const search = shallow(<Search />);
		const event = {target: {value: 'de'}}
		expect(search.state('value')).toEqual('');
		search.find('.input-search').simulate('change', event);
		expect(search.state('value')).toEqual(['de']);
	})

})