import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Measure extends Component {
  static propTypes = {
    measureType:  PropTypes.object.isRequired,
    measureValue: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onMeasureValueChange(e.target.value);
  }

  render() {
    const {measureType, measureValue} = this.props;

    return (
      <fieldset>
        <legend>{measureType}</legend>
        <input value={measureValue}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}


export default Measure;
