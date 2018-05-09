import React, { Component } from 'react';
import { FormattedMessage as FM } from 'react-intl';

const areaTypes = {
  p: 'Pings',
  f: 'Square Feet',
  m: 'Square Meters'
};

const a = {
  p: <FM id='Area.pings' defaultMessage='Pings' />,
  f: <FM id='Area.squareFeet' defaultMessage='Square Feet' />,
  m: <FM id='Area.squareMeters' defaultMessage='Square Meters' />
};

/*
坪
平方英尺
平方公尺
*/

class Area extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onAreaChange(e.target.value);
  }

  render() {
    const area = this.props.area;
    const areaType = this.props.areaType;

    return (
      <fieldset>
        <legend>Enter an area in {areaTypes[areaType]}:</legend>
        <input
          value={area}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default Area;
