import React from 'react';
import '../styles/search.css';

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
	    	<form>
	    	<div className="spacer">
	    	</div>
			    <input placeholder="search city, state"
			    		   onChange={(e) => this.setState({value: e.target.value.split(', ')})}
			    />
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