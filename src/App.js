import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Temperature from './components/Temperature.js'
import Area from './components/Area.js'
import Measure from './components/Measure.js'
import { FormattedMessage as FM } from 'react-intl';

/*
add length, weight
*/

const lengthTypes = {
  inches: <FM id='Length.inches' defaultMessage='Inches' />,
  feet: <FM id='Length.feet' defaultMessage='Feet' />,
  yards: <FM id='Length.yards' defaultMessage='Yards' />,
  miles: <FM id='Length.miles' defaultMessage='Miles' />,
  centimeters: <FM id='Length.centimeters' defaultMessage='Centimeters' />,
  meters: <FM id='Length.meters' defaultMessage='Meters' />,
  kilometers: <FM id='Length.kilometers' defaultMessage='Kilometers' />,
};

/*
const lengthTypes = {
  inches: <FM id='Length.inches' defaultMessage='Inches' />,
  feet: <FM id='Length.feet' defaultMessage='Feet' />,
  yards: <FM id='Length.yards' defaultMessage='Yards' />,
  miles: <FM id='Length.miles' defaultMessage='Miles' />,
  centimeters: <FM id='Length.centimeters' defaultMessage='Centimeters' />,
  meters: <FM id='Length.meters' defaultMessage='Meters' />,
  kilometers: <FM id='Length.kilometers' defaultMessage='Kilometers' />,
};
*/
const weightTypes = {
  ounces: <FM id='Weight.ounces' defaultMessage='Ounces' />,
  pounds: <FM id='Weight.pounds' defaultMessage='Pounds' />,
  grams: <FM id='Weight.grams' defaultMessage='Grams' />,
  kilograms: <FM id='Weight.kilograms' defaultMessage='Kilograms' />,
  tjin: <FM id='Weight.taiwaneseJin' defaultMessage='Taiwanese Jin' />,
  tliang: <FM id='Weight.taiwaneseLiang' defaultMessage='Taiwanese Liang' />,
};

/*
    { message: <FM id='Length.inches' defaultMessage='Inches' />
    , ratios:
      { inches: 1
        , feet: 1
        , yards
        , miles
        , centimeters
        , meters
        , kilometers
      }

*/

const id = (x) => x;

const lengths = {
  inches: {
    msg: <FM id='Length.inches' defaultMessage='Inches' />,
    conversions: { // to inches
      inches: id,
      feet: (x => x * 12),
      yards: (x => x * 36)
    },
  },
  feet: {
    msg: <FM id='Length.feet' defaultMessage='Feet' />,
    conversions: { // to feet
      inches: (x => x / 12),
      feet: id,
      yards: (x => x * 3)
    },
  },
  yards: {
    msg: <FM id='Length.yards' defaultMessage='Yards' />,
    conversions: { // to yards
      inches: (x => x / 36),
      feet: (x => x / 3),
      yards: id
    }
  }
  /*
  miles: <FM id='Length.miles' defaultMessage='Miles' />,
  centimeters: <FM id='Length.centimeters' defaultMessage='Centimeters' />,
  meters: <FM id='Length.meters' defaultMessage='Meters' />,
  kilometers: <FM id='Length.kilometers' defaultMessage='Kilometers' />,
*/
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
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLengthChange = this.handleLengthChange.bind(this);
    // this.handleInchesChange = this.handleInchesChange.bind(this);
    this.handlePingChange = this.handlePingChange.bind(this);
    this.handleSqFeetChange = this.handleSqFeetChange.bind(this);
    this.handleSqMeterChange = this.handleSqMeterChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

    this.state =
      { area:''
      , areaType: 'p'
      , temperature: ''
      , temperatureType: 'celsius'
      , length: ''
      , lengthType: 'inches'
      };
  }

  handleLengthChange = (lengthType) => (length) => {
    this.setState({lengthType, length});
  }
/*
  handleInchesChange(length) {
    this.setState({lengthType: 'inches', length});
  }

  handleFeetChange(length) {
    this.setState({lengthType: 'feet', length});
  }
*/
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
    this.setState({temperatureType: 'celsius', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({temperatureType: 'fahrenheit', temperature});
  }

  render() {
    const area = this.state.area;
    const areaType = this.state.areaType;

    const lengthType = this.state.lengthType;
    const length = this.state.length;

    const temperature = this.state.temperature;
    const temperatureType = this.state.temperatureType;
    
    const inches = tryConvert(length, lengths.inches.conversions[lengthType]);
    const feet = tryConvert(length, lengths.feet.conversions[lengthType]);
    const yards = tryConvert(length, lengths.yards.conversions[lengthType]);
    
    const pings = areaType === 'f' ? tryConvert(area, squareFeetToPings) : (areaType === 'm' ? tryConvert(area, squareMetersToPings) : area);
    const squareMeters = areaType === 'f' ? tryConvert(area, squareFeetToSquareMeters) : (areaType === 'p' ? tryConvert(area, pingsToSquareMeters) : area);
    const squareFeet = areaType === 'm' ? tryConvert(area, squareMetersToSquareFeet) : (areaType === 'p' ? tryConvert(area, pingsToSquareFeet) : area);

    const celsius = tryConvert(temperature, temperatures.celsius.conversions[temperatureType]); // scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = tryConvert(temperature, temperatures.fahrenheit.conversions[temperatureType]);
    // const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Hello.
        </p>

        <Temperature
          measureValue={inches}
          measureType={lengths.inches.msg}
          onMeasureValueChange={this.handleLengthChange('inches')} />
      
        <Temperature
          measureValue={feet}
          measureType={lengths.feet.msg}
          onMeasureValueChange={this.handleLengthChange('feet')} />

        <Temperature
          measureValue={yards}
          measureType={lengths.yards.msg}
          onMeasureValueChange={this.handleLengthChange('yards')} />
      
        <Area
          areaType="p"
          area={pings}
          onAreaChange={this.handlePingChange} />

        <Area
          areaType="f"
          area={squareFeet}
          onAreaChange={this.handleSqFeetChange} />

        <Area
          areaType="m"
          area={squareMeters}
          onAreaChange={this.handleSqMeterChange} />
        
        <Temperature
          measureValue={celsius}
          measureType={temperatures.celsius.msg}
          onMeasureValueChange={this.handleCelsiusChange} />

        <Temperature
          measureValue={fahrenheit}
          measureType={temperatures.fahrenheit.msg}
          onMeasureValueChange={this.handleFahrenheitChange} />

      </div>
    );
  }
}

export default App;
