import React from 'react';
import search from './search.scss';


const Search = (props) => {
  return (
    <div>
	    <input placeholder="Search City"/>
	    <button className="submit" onClick={() => props.onClick()}>
	    	Search
    	</button>
    </div>
    )
}

export default Search;