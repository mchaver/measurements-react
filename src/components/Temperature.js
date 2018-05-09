import React, { Component } from 'react';
import { FormattedMessage as FM } from 'react-intl';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const a = {
  c: <FM id='Temperature.celsius' defaultMessage='Celsius' />,
  f: <FM id='Temperature.fahrenheit' defaultMessage='Fahrenheit' />,
};

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default Temperature;
