import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.name;
    const temper = (cityData.main.temp -273.15).toFixed(0);
    const pressure = cityData.main.pressure.toFixed(0);
    const humidity = cityData.main.humidity;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{temper}</td>
        <td>{pressure}</td>
        <td>{humidity}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Город</th>
            <th>Температура</th>
            <th>Атм.давление</th>
            <th>Влажность</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  return {weather};
}

export default connect (mapStateToProps)(WeatherList);
