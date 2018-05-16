import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Measure from './components/Measure.js'
import { FormattedMessage as FM } from 'react-intl';

/*
add length, weight
*/

const id = (x) => x;

const lengths = {
  inches: {
    msg: <FM id='Length.inches' defaultMessage='Inches' />,
    conversions: { // to inches
      inches: id,
      feet: (x => x * 12),
      yards: (x => x * 36),
      miles: (x => x * 5280 * 12),
      centimeters: (x => x / 2.54),
      meters: (x => x * 254),
      kilometers: (x => x * 254000)
    },
  },
  feet: {
    msg: <FM id='Length.feet' defaultMessage='Feet' />,
    conversions: { // to feet
      inches: (x => x / 12),
      feet: id,
      yards: (x => x * 3),
      miles: (x => x * 5280),
      centimeters: (x => x / 30.48),
      meters: (x => x * 3.2808),
      kilometers: (x => x *  3280.8)
    },
  },
  yards: {
    msg: <FM id='Length.yards' defaultMessage='Yards' />,
    conversions: { // to yards
      inches: (x => x / 36),
      feet: (x => x / 3),
      yards: id,
      miles: (x => x * 1760),
      centimeters: (x => x / (30.48 * 3)),
      meters: (x => x * 3.2808 * 3),
      kilometers: (x => x * (3280.8 / 3))
    }
  },
  miles: {
    msg: <FM id='Length.miles' defaultMessage='Miles' />,
    conversions: { // to miles
      inches: (x => x / (5280 * 12)),
      feet: (x => x / 5280),
      yards: (x => x / (5280 / 3)),
      miles: id,
      centimeters: (x => x / 160000),
      meters: (x => x / 1600),
      kilometers: (x => x / 1.6)
    }
  },
  centimeters: {
    msg: <FM id='Length.centimeters' defaultMessage='Centimeters' />,
    conversions: { // to centimeters
      inches: (x => x * 2.54),
      feet: (x => x * 30.48),
      yards: (x => x * 91.44),
      miles: (x => x * 160000),
      centimeters: id,
      meters: (x => x * 100),
      kilometers: (x => x * 100 * 1000)
    }
  },
  meters: {
    msg: <FM id='Length.meters' defaultMessage='Meters' />,
    conversions: { // to meters
      inches: (x => x * 2.54),
      feet: (x => x * 0.3048),
      yards: (x => x * 0.9144),
      miles: (x => x * 1600),
      centimeters: (x => x / 100),
      meters: id,
      kilometers: (x => x * 1000)
    }
  },
  kilometers: {
    msg: <FM id='Length.kilometers' defaultMessage='Kilometers' />,
    conversions: { // to kilometers
      inches: (x => x * 2.54),
      feet: (x => x * 0.0003048),
      yards: (x => x * 0.0009144),
      miles: (x => x * 1.6),
      centimeters: (x => x / 100000),
      meters: (x => x / 1000),
      kilometers: id
    }
  }
};

const weights = {
  ounces: {
    msg: <FM id='Weight.ounces' defaultMessage='Ounces' />,
    conversions: { // to ounces
      ounces: id,
      pounds: (x => x * 16),
      grams: (x => x * 0.0353),
      kilograms: (x => x * 35.27),
      taiwaneseLiang: (x => x * 1.322774),
      taiwaneseJin: (x => x * 21.1644)
    }
  },
  pounds: {
    msg: <FM id='Weight.pounds' defaultMessage='Pounds' />,
    conversions: { // to pounds
      ounces: (x => x / 16),
      pounds: id,
      grams: (x => x / 453.59237),
      kilograms: (x => x * 2.268),
      taiwaneseLiang: (x => x * 0.08267335),
      taiwaneseJin: (x => x * 1.32277),
    }
  },
  grams: {
    msg: <FM id='Weight.grams' defaultMessage='Grams' />,
    conversions: { // to grams
      ounces: (x => x * 28.34952),
      pounds: (x => x * 453.59237),
      grams: id,
      kilograms: (x => x * 1000),
      taiwaneseLiang: (x => x * 37.5),
      taiwaneseJin: (x => x * 600)
    }
  },
  kilograms: {
    msg: <FM id='Weight.kilograms' defaultMessage='Kilograms' />,
    conversions: { // to kilograms
      ounces: (x => x / 35.27),
      pounds: (x => x / 2.268),
      grams: (x => x / 1000),
      kilograms: id,
      taiwaneseLiang: (x => x * 0.00375),
      taiwaneseJin: (x => x / 0.6)
    }
  },
  taiwaneseLiang: {
    msg: <FM id='Weight.taiwaneseLiang' defaultMessage='Taiwanese Liang' />,
    conversions: { // to Taiwanese liang
      ounces: (x => x / 1.322774),
      pounds: (x => x / 0.08267335),
      grams: (x => x / 37.5),
      kilograms: (x => x / 0.00375),
      taiwaneseLiang: id,
      taiwaneseJin: (x => x * 16)
    }
  },
  taiwaneseJin: {
    msg: <FM id='Weight.taiwaneseJin' defaultMessage='Taiwanese Jin' />,
    conversions: { // to Taiwanese jin
      ounces: (x => x / 21.1644),
      pounds: (x => x / 1.32277),
      grams: (x => x * 600),
      kilograms: (x => x * 0.6),
      taiwaneseLiang: (x => x / 16),
      taiwaneseJin: id
    }
  }
};


const temperatures = {
  celsius: {
    msg: <FM id='Temperature.celsius' defaultMessage='Celsius' />,
    conversions: { // to celsius
      celsius: id,
      fahrenheit: (x => (x - 32) * 5 / 9)
    }
  },

  fahrenheit: {
    msg: <FM id='Temperature.fahrenheit' defaultMessage='Fahrenheit' />,
    conversions: { // to fahrenheit
      celsius: (x => (x * 9 / 5) + 32),
      fahrenheit: id
    }
  }
};


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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Measurements</h1>
        </header>

        <div>
          <h2 className="measure-header">
            Lengths
          </h2>

          <div className="measure-row">
            <div className="measure-column">
              <h3>
                Imperial
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
                Metric
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
            Temperatures
          </h2>          
          <div className="measure-row">
            <div className="measure-column">
              <h3>
                Imperial
              </h3>

              <Measure
                measureValue={fahrenheit}
                measureType={temperatures.fahrenheit.msg}
                onMeasureValueChange={this.handleTemperatureChange('temperature')} />
            </div>
            
            <div className="measure-column">
              <h3 className="measure-box-2-1">
                Metric
              </h3>

              <Measure
                measureValue={celsius}
                measureType={temperatures.celsius.msg}
                onMeasureValueChange={this.handleTemperatureChange('temperature')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
