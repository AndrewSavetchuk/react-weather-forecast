import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
            <h1>Get a five-day forecast in your favorite cities</h1>
        </div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
