import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import APIKey from './APIKey';




jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/" + APIKey + "/geolookup/conditions/q/CO/Denver.json",
  dataType : "json",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  console.log(parsed_json)
  alert("Current temperature in " + location + " is: " + temp_f);
  }
  });
});



ReactDOM.render(<App />, document.getElementById('app')
);
