import React from 'react';
import './search.scss';


class Search extends React.Component {
	constructor() {
		super();

		this.state = {
			value: ''
		}
	}

	render() {
	  return (
	    <div>
		    <input placeholder="Search City"
		    		   onChange={(e) => this.setState({value: e.target.value.split(', ')})}
		    />
		    <button className="submit" onClick={() => {	localStorage.setItem('city', this.state.value[0]);
          																			   	localStorage.setItem('state', this.state.value[1]);
		        }
		      }
        >
		    	Search
	    	</button>
	    </div>
	  )
  }
}

export default Search;