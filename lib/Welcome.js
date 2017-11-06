import React from 'react';
import '../styles/welcome.css';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        <div className="popular-cities">
          <img id="big-logo" src="lib/assets/weatherly-logo.svg" />
          <h2>POPULAR SEARCHES</h2>
          <a onClick={() => {
            localStorage.setItem('city', 'New York');
            localStorage.setItem('state', 'NY');
            this.props.searchPopular('NY', 'New York');
          }}>
            <img src="lib/assets/new-york-icon.svg" />
            <h5>New York, NY</h5>
          </a>

          <a onClick={() => {
            localStorage.setItem('city', 'Dallas');
            localStorage.setItem('state', 'TX');
            this.props.searchPopular('TX', 'Dallas');
          }}>
            <img src="lib/assets/dallas-icon.svg" />
            <h5>Dallas, TX</h5>
          </a>

          <a onClick={() => {
            localStorage.setItem('city', 'Chicago');
            localStorage.setItem('state', 'IL');
            this.props.searchPopular('IL', 'Chicago');
          }}>
            <img src="lib/assets/chicago-icon.svg" />
            <h5>Chicago, IL</h5>
          </a>

          <a onClick={() => {
            localStorage.setItem('city', 'San Francisco');
            localStorage.setItem('state', 'CA');
            this.props.searchPopular('CA', 'San Francisco');
          }}>
            <img src="lib/assets/san-francisco-icon.svg" />
            <h5>San Francisco, CA</h5>
          </a>

          <a onClick={() => {
            localStorage.setItem('city', 'Orlando');
            localStorage.setItem('state', 'FL');
            this.props.searchPopular('FL', 'Orlando');
          }}>
						<img src="lib/assets/orlando-icon.svg" />
						<h5>Orlando, FL</h5>
					</a>

				</div>
			</div>

		);
  }
}

export default Welcome;