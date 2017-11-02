import React from 'react';
import './search.scss';

function inputFormat (str) {
  str.split(', ')
  return str;
}


const Search = (props) => {
  return (
    <div>
	    <input placeholder="Search City"
             defaultValue= '' 
      />
	    <button className="submit" > 
	    	Search
    	</button>
    </div>
    )
}

export default Search;


/*onClick={() => console.log(props.onClick())}>*/