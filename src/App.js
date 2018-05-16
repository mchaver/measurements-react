import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Measure from './components/Measure.js';
import { FormattedMessage as FM } from 'react-intl';
import { lengths, weights, temperatures } from './Measurements.js';

/*
add length, weight
*/

const inchesToCentimeters = 2.54;
const feetToMeters = 0.3048;
const milesToFeet = 5280;
const milesToMeters = 1610;

const poundsToKilos = 2.2046;
const ouncesToPounds = 0.0625;
const poundsToOunces = 16;
const ouncesToGrams = 28.35;

const taiJinToTaiLiang = 16;

// 台斤 · 台兩
// 1 台斤為1 日斤，故1 台斤 = 600 公克 = 0.6 公斤，1台兩 = 37.5 公克。
// 台灣台制的台兩：十六分之一台斤，即37.5克。

function feetToInches(feet) {
  return feet * 12;
}

function inchesToFeet(inches) {
  return inches / 12;
}

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

function tryConvert(measure, convert) {
  const input = parseFloat(measure);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 100000) / 100000;
  return rounded.toString();
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);

    this.state =
      { area: '1'
      , areaType: 'pings'
      , temperature: '15'
      , temperatureType: 'celsius'
      , length: '1'
      , lengthType: 'miles'
      };
  }

  handleLengthChange = (lengthType) => (length) => {
    this.setState({lengthType, length});
  }

  handleTemperatureChange = (temperatureType) => (temperature) => {
    this.setState({temperatureType, temperature});
  }


  render() {
    const area = this.state.area;
    const areaType = this.state.areaType;

    const pings = areaType === 'f' ? tryConvert(area, squareFeetToPings) : (areaType === 'm' ? tryConvert(area, squareMetersToPings) : area);
    const squareMeters = areaType === 'f' ? tryConvert(area, squareFeetToSquareMeters) : (areaType === 'p' ? tryConvert(area, pingsToSquareMeters) : area);
    const squareFeet = areaType === 'm' ? tryConvert(area, squareMetersToSquareFeet) : (areaType === 'p' ? tryConvert(area, pingsToSquareFeet) : area);

    const length = this.state.length;    
    const lengthType = this.state.lengthType;

    const inches = tryConvert(length, lengths.inches.conversions[lengthType]);
    const feet = tryConvert(length, lengths.feet.conversions[lengthType]);
    const yards = tryConvert(length, lengths.yards.conversions[lengthType]);
    const miles = tryConvert(length, lengths.miles.conversions[lengthType]);
    const centimeters = tryConvert(length, lengths.centimeters.conversions[lengthType]);
    const meters = tryConvert(length, lengths.meters.conversions[lengthType]);
    const kilometers = tryConvert(length, lengths.kilometers.conversions[lengthType]);
    
    const temperature = this.state.temperature;
    const temperatureType = this.state.temperatureType;

    const celsius = tryConvert(temperature, temperatures.celsius.conversions[temperatureType]);
    const fahrenheit = tryConvert(temperature, temperatures.fahrenheit.conversions[temperatureType]);
    const kelvin = tryConvert(temperature, temperatures.kelvin.conversions[temperatureType]);
    
    return (
      <div className="App">
        <header className="app-header">
          <h1 className="App-title">Measurements</h1>
        </header>

        <div>
          <h2 className="measure-header">
            <FM id='Measurement.lengths' defaultMessage='Lengths'/>
          </h2>

          <div className="measure-row">
            <div className="measure-column">
              <h3>
                <FM id='Measurement.imperial' defaultMessage='Imperial'/>
              </h3>
              
              <Measure
                measureValue={inches}
                measureType={lengths.inches.msg}
                onMeasureValueChange={this.handleLengthChange('inches')} />
              
              <Measure
                measureValue={feet}
                measureType={lengths.feet.msg}
                onMeasureValueChange={this.handleLengthChange('feet')} />

              <Measure
                measureValue={yards}
                measureType={lengths.yards.msg}
                onMeasureValueChange={this.handleLengthChange('yards')} />

              <Measure
                measureValue={miles}
                measureType={lengths.miles.msg}
                onMeasureValueChange={this.handleLengthChange('miles')} />
            </div>

            <div className="measure-column">
              <h3>
                <FM id='Measurement.metric' defaultMessage='Metric'/>
              </h3>
              <Measure
                measureValue={centimeters}
                measureType={lengths.centimeters.msg}
                onMeasureValueChange={this.handleLengthChange('centimeters')} />

              <Measure
                measureValue={meters}
                measureType={lengths.meters.msg}
                onMeasureValueChange={this.handleLengthChange('meters')} />

              <Measure
                measureValue={kilometers}
                measureType={lengths.kilometers.msg}
                onMeasureValueChange={this.handleLengthChange('kilometers')} />
            </div>
          </div>
        </div>

        <div>
          <h2 className="measure-header">
            <FM id='Measurement.temperatures' defaultMessage='Temperatures'/>
          </h2>          
          <div className="measure-row">
            <div className="measure-column">
              <h3>
                <FM id='Measurement.imperial' defaultMessage='Imperial'/>
              </h3>

              <Measure
                measureValue={fahrenheit}
                measureType={temperatures.fahrenheit.msg}
                onMeasureValueChange={this.handleTemperatureChange('temperature')} />
            </div>
            
            <div className="measure-column">
              <h3 className="measure-box-2-1">
                <FM id='Measurement.metric' defaultMessage='Metric'/>
              </h3>

              <Measure
                measureValue={celsius}
                measureType={temperatures.celsius.msg}
                onMeasureValueChange={this.handleTemperatureChange('temperature')} />

              <Measure
                measureValue={kelvin}
                measureType={temperatures.kelvin.msg}
                onMeasureValueChange={this.handleTemperatureChange('temperature')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
