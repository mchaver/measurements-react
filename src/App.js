import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Measure from './components/Measure.js';
import { FormattedMessage as FM } from 'react-intl';
import {
  areas,
  lengths,
  weights,
  temperatures,
  tryConvert } from './Measurements.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);

    this.state = {
      area: '1',
      areaType: 'hectares',
      temperature: '15',
      temperatureType: 'celsius',
      length: '1',
      lengthType: 'miles',
      weight: '1',
      weightType: 'kilograms'
      };
  }

  handleAreaChange = (areaType) => (area) => {
    this.setState({areaType, area});
  }

  handleLengthChange = (lengthType) => (length) => {
    this.setState({lengthType, length});
  }

  handleTemperatureChange = (temperatureType) => (temperature) => {
    this.setState({temperatureType, temperature});
  }

  handleWeightChange = (weightType) => (weight) => {
    this.setState({weightType, weight});
  }  

  render() {
    const area = this.state.area;
    const areaType = this.state.areaType;

    const squareFeet = tryConvert(area, areas.squareFeet.conversions[areaType]);
    const acres = tryConvert(area, areas.acres.conversions[areaType]);
    const squareMeters = tryConvert(area, areas.squareMeters.conversions[areaType]);
    const hectares = tryConvert(area, areas.hectares.conversions[areaType]);
    const pings = tryConvert(area, areas.pings.conversions[areaType]);

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

    const weight = this.state.weight;
    const weightType = this.state.weightType;

    const ounces = tryConvert(weight, weights.ounces.conversions[weightType]);
    const pounds = tryConvert(weight, weights.pounds.conversions[weightType]);
    const grams = tryConvert(weight, weights.grams.conversions[weightType]);
    const kilograms = tryConvert(weight, weights.kilograms.conversions[weightType]);
    const liang = tryConvert(weight, weights.liang.conversions[weightType]);
    const jin = tryConvert(weight, weights.jin.conversions[weightType]);
    
    return (
      <div className="App">
        <header className="app-header">
          <h1 className="App-title">Measurements</h1>
        </header>

        <div className="button-group">
          <button className="button1" onClick={(e) => this.props.setLanguage('zh')}>Chinese</button>
          <button className="button1" onClick={(e) => this.props.setLanguage('en')}>English</button>
          <button className="button1" onClick={(e) => this.props.setLanguage('es')}>Espanol</button>
        </div>
        
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

        <div>
          <h2 className="measure-header">
            <FM id='Measurement.weights' defaultMessage='Weights'/>
          </h2>          
          <div className="measure-row">
            <div className="measure-column">
              <h3>
                <FM id='Measurement.imperial' defaultMessage='Imperial'/>
              </h3>

              <Measure
                measureValue={ounces}
                measureType={weights.ounces.msg}
                onMeasureValueChange={this.handleWeightChange('ounces')} />

              <Measure
                measureValue={pounds}
                measureType={weights.pounds.msg}
                onMeasureValueChange={this.handleWeightChange('pounds')} />
            </div>
            
            <div className="measure-column">
              <h3 className="measure-box-2-1">
                <FM id='Measurement.metric' defaultMessage='Metric'/>
              </h3>

              <Measure
                measureValue={grams}
                measureType={weights.grams.msg}
                onMeasureValueChange={this.handleWeightChange('grams')} />

              <Measure
                measureValue={kilograms}
                measureType={weights.kilograms.msg}
                onMeasureValueChange={this.handleWeightChange('kilograms')} />
            </div>

            <div className="measure-column">
              <h3 className="measure-box-2-1">
                <FM id='Measurement.taiwanese' defaultMessage='Taiwanese'/>
              </h3>

              <Measure
                measureValue={liang}
                measureType={weights.liang.msg}
                onMeasureValueChange={this.handleWeightChange('liang')} />

              <Measure
                measureValue={jin}
                measureType={weights.jin.msg}
                onMeasureValueChange={this.handleWeightChange('jin')} />
            </div>
            
          </div>
        </div>

        <div>
          <h2 className="measure-header">
            <FM id='Measurement.area' defaultMessage='Area'/>
          </h2>          
          <div className="measure-row">
            <div className="measure-column">
              <h3>
                <FM id='Measurement.imperial' defaultMessage='Imperial'/>
              </h3>

              <Measure
                measureValue={squareFeet}
                measureType={areas.squareFeet.msg}
                onMeasureValueChange={this.handleAreaChange('squareFeet')} />

              <Measure
                measureValue={acres}
                measureType={areas.acres.msg}
                onMeasureValueChange={this.handleAreaChange('acres')} />
              
            </div>
            
            <div className="measure-column">
              <h3 className="measure-box-2-1">
                <FM id='Measurement.metric' defaultMessage='Metric'/>
              </h3>

              <Measure
                measureValue={squareMeters}
                measureType={areas.squareMeters.msg}
                onMeasureValueChange={this.handleAreaChange('squareMeters')} />

              <Measure
                measureValue={hectares}
                measureType={areas.hectares.msg}
                onMeasureValueChange={this.handleAreaChange('hectares')} />
              
            </div>

            <div className="measure-column">
              <h3 className="measure-box-2-1">
                <FM id='Measurement.taiwanese' defaultMessage='Taiwanese'/>
              </h3>

              <Measure
                measureValue={pings}
                measureType={areas.pings.msg}
                onMeasureValueChange={this.handleAreaChange('pings')} />

            </div>
            
          </div>
        </div>

        <div className="space"></div>
      </div>
    );
  }
}

export default App;
