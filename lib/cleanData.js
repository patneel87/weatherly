function cleanData(data) {
 
	////////////  CURRENT WEATHER  /////////////
  if (data.response.error) {
    return '';
  }
  let timeDay = data.current_observation.observation_time.split('');

  timeDay = timeDay.slice(16, timeDay.length).join('');

  let weatherSummary = data.forecast.txt_forecast.forecastday['0'].fcttext;

  weatherSummary = weatherSummary.split('');
  for (let i = 0; i < weatherSummary.length; i++) {
    if (weatherSummary[i] === 'H' && weatherSummary[i + 14] === 'F') {
      weatherSummary.splice(i, 16);
      break;
    } else if (weatherSummary[i] === 'H' && weatherSummary[i + 12] === 'F') {
      weatherSummary.splice(i, 14);
      break;
    } else if (weatherSummary[i] === 'H' && weatherSummary[i + 7] === 'F') {
      weatherSummary.splice(i, 9);
      break;
    }
  }
  weatherSummary = weatherSummary.join('');

  let todayHigh = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  let todayLow = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  let todayHighLow = ('High ' + todayHigh + 'F. Low ' + todayLow + 'F');

  const currentWeather = {
    cityState: data.current_observation.display_location.full,
    timeDay: timeDay,
    weatherSummary: weatherSummary,
    todayHighLow: todayHighLow
  };

	////////////  7 HOUR  /////////////
  const sevenHour = data.hourly_forecast.slice(0, 7).reduce((sevenHourArray, hour) => {
    sevenHourArray.push({
      time: hour.FCTTIME.civil.toLowerCase(), 
      temp: hour.temp.english, 
      cond: hour.condition, 
      hourIcon: hour.icon === 'fog' ? hour.icon = 'hazy' : hour.icon
    });
    sevenHourArray[0].time = 'NOW';
    sevenHourArray[0].temp = data.current_observation.temp_f.toFixed(0);
    return sevenHourArray;
  }, []);

	////////////  10  DAY  /////////////
  const tenDay = data.forecast.simpleforecast.forecastday.reduce((tenDayArray, day) => {
    tenDayArray.push({
      dayHigh: day.high.fahrenheit, 
      dayLow: day.low.fahrenheit, 
      day: day.date.weekday, 
      dayCond: day.conditions, 
      icon: day.icon === 'fog' ? day.icon = 'hazy' : day.icon
    });
    tenDayArray[0].day = 'TODAY';
    return tenDayArray;
  }, []);

  return {currentWeather, sevenHour, tenDay};  //obj, arr of hours, arr of days
}

export default cleanData;