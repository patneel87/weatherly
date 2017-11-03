import React from 'react';
import './search.css';

class Search extends React.Component {
	constructor() {
		super();

		this.state = {
			value: ''
		}
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
		        }
		      }
        >
		    	
	    	</button>
	    </div>
	  )
  }
}

export default Search;