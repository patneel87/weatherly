import React from 'react';

import '../styles/search.css';


import Trie from '../node_modules/@patneel87/complete-me/lib/Trie.js';
import cityData from './cities.js'


class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		}

		this.trie = new Trie;
		this.trie.populate(cityData.data);
		this.suggestions = [];
		// this.props = props; //this line could be in place of props inside of super
		// this.searchFunction = props.search;  //
	}

	completeInput(e) {
		this.setState({
			value: e.target.value.split(', ')
		})
		this.suggestions = this.trie.suggest(e.target.value)
	}

	render() {
	  return (
	    <div className="search-box">
	    	<form>
	    	<div className="spacer">
	    	</div>
			    <input placeholder="search city, state"
			    		   onChange={this.completeInput.bind(this)}
			    />
			    <ul>
			    	{this.suggestions.map(suggestion => {
			    		return <li>{suggestion}</li>
			    	})}
			    </ul>
			    <button type="submit" className="submit" onClick={() => {	
			    																						// this.handleKeyPress(event);
			    																						localStorage.setItem('city', this.state.value[0]);
	          																			   	localStorage.setItem('state', this.state.value[1]);
	          																			   	this.props.search(this.state.value[1], this.state.value[0]);

			        }
			      }
	        >
	    	</button>
        </form>
	    </div>
	  )
  }
}

export default Search;