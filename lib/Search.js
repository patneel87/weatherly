import React from 'react';
import '../styles/search.css';
import Trie from '../node_modules/@patneel87/complete-me/lib/Trie.js';
import cityData from './cities.js';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      inputValue: ''
    };

    this.trie = new Trie;
    this.trie.populate(cityData.data);
    this.suggestions = [];
  }

  completeInput(e) {
    this.setState({
      value: e.target.value.split(', '),
      inputValue: e.target.value 
    });
    if (e.target.value.length > 1) {
      this.suggestions = this.trie.suggest(e.target.value).slice(0,5);
    }
    if (e.target.value < 2) {
      this.suggestions = [];
    }
  }

  render() {
    return (
      <div className="search-box">
        <form>
          <div className="spacer">
          </div>
          <input className="input-search"
                 placeholder="search city, state"
                 value={this.state.inputValue}
                 onChange={this.completeInput.bind(this)}
          />
            <button type="submit" 
                    className="submit" 
                    onClick={() => {	
                      localStorage.setItem('city', this.state.value[0]);
                      localStorage.setItem('state', this.state.value[1]);
                      this.props.search(this.state.value[1], this.state.value[0]);
                    }
              }
            >
            </button>
        </form>
          <ul>
            {this.suggestions.map((suggestion, index) => {
              return <li key={index}><a onClick={(e) => {
                this.setState({ inputValue: '' });
                let location = e.target.innerText.split(', ');

                localStorage.setItem('city', location[0]);
                localStorage.setItem('state', location[1]);
                this.props.search(location[1], location[0]);
                this.suggestions = [];
              }}>{suggestion}</a></li>;
            })}
          </ul>
      </div>
    );
  }
}

export default Search;