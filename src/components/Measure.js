import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Measure extends Component {
  static propTypes = {
    measureValue: PropTypes.string.isRequired,
    measureType:  PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onMeasureChange(e.target.value);
  }

  render() {
    const {measureValue, measureType, measureTypes} = this.props;

    return (
      <fieldset>
        <legend>{measureType}:</legend>
        <input
          value={measureValue}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default Measure;
