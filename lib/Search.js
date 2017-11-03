import React from 'react';
import './search.css';

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		}

		// this.props = props; //this line could be in place of props inside of super
		// this.searchFunction = props.search;  //
	}

	render() {
	  return (
	    <div className="search-box">
	    	<div className="spacer">
	    	</div>
		    <input placeholder="search city, state"
		    		   onChange={(e) => this.setState({value: e.target.value.split(', ')})}
		    />
		    <button className="submit" onClick={() => {	localStorage.setItem('city', this.state.value[0]);
          																			   	localStorage.setItem('state', this.state.value[1]);
          																			   	this.props.search(this.state.value[1], this.state.value[0]);
		        }
		      }
        >
		    	
	    	</button>
	    </div>
	  )
  }
}

export default Search;