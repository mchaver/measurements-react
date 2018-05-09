import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Temperature from './components/Temperature.js'
import Area from './components/Area.js'

/*
add length, weight
*/

const inchesToCentimeters = 2.54;
const feetToMeters = 0.3048;
const milesToFeet = 5280;
const milesToMeters = 1610;

const poundsToKilos = 2.2046;
const ouncesToPounds = 0;

function pingsToSquareFeet(pings) {
  return (pings * 35.5832);
}

function pingsToSquareMeters(pings) {
  return (pings * 3.30579);
}

function squareMetersToPings(sqMeters) {
  return (sqMeters * 0.3025);
}

function squareMetersToSquareFeet(sqMeters) {
  return (sqMeters * 10.7639);
}

function squareFeetToPings(sqFeet) {
  return (sqFeet * 0.0281032);
}

function squareFeetToSquareMeters(sqFeet) {
  return (sqFeet * 0.092903);
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(measure, convert) {
  const input = parseFloat(measure);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handlePingChange = this.handlePingChange.bind(this);
    this.handleSqFeetChange = this.handleSqFeetChange.bind(this);
    this.handleSqMeterChange = this.handleSqMeterChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

    this.state = {area:'', areaType: 'p', temperature: '', scale: 'c'};
  }

  handlePingChange(area) {
    this.setState({areaType: 'p', area});
  }

  handleSqFeetChange(area) {
    this.setState({areaType: 'f', area});
  }

  handleSqMeterChange(area) {
    this.setState({areaType: 'm', area});
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const area = this.state.area;
    const areaType = this.state.areaType;
    const scale = this.state.scale;
    const temperature = this.state.temperature;

    const pings = areaType === 'f' ? tryConvert(area, squareFeetToPings) : (areaType === 'm' ? tryConvert(area, squareMetersToPings) : area);
    const meters = areaType === 'f' ? tryConvert(area, squareFeetToSquareMeters) : (areaType === 'p' ? tryConvert(area, pingsToSquareMeters) : area);
    const feet = areaType === 'm' ? tryConvert(area, squareMetersToSquareFeet) : (areaType === 'p' ? tryConvert(area, pingsToSquareFeet) : area);
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Hello.
        </p>

        <Area
          areaType="p"
          area={pings}
          onAreaChange={this.handlePingChange} />

        <Area
          areaType="f"
          area={feet}
          onAreaChange={this.handleSqFeetChange} />

        <Area
          areaType="m"
          area={meters}
          onAreaChange={this.handleSqMeterChange} />
        
        <Temperature
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <Temperature
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

      </div>
    );
  }
}

export default App;
