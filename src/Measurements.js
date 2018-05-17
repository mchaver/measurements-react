import React from 'react';
import { FormattedMessage as FM } from 'react-intl';

const id = (x) => x;

export const lengths = {
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

export const areas = {
  squareFeet: {
    msg: <FM id='Weight.squareFeet' defaultMessage='Square Feet' />,
    conversions: { // to squareFeet
      squareFeet: id,
      squareMeters: (x => x * 10.7639),
      pings: (x => x * 35.5832)
    }
  },
  squareMeters: {
    msg: <FM id='Weight.squareMeters' defaultMessage='Square Meters' />,
    conversions: { // to squareMeters
      squareFeet: (x => x * 0.092903),
      squareMeters: id,
      pings: (x => x * 3.30579)
    }
  },
  pings: {
    msg: <FM id='Weight.pings' defaultMessage='Pings' />,
    conversions: { // to pings
      squareFeet: (x => x * 0.0281032),
      squareMeters: (x => x * 0.3025),
      pings: id
    }
  },
};

export const weights = {
  ounces: {
    msg: <FM id='Weight.ounces' defaultMessage='Ounces' />,
    conversions: { // to ounces
      ounces: id,
      pounds: (x => x * 16),
      grams: (x => x * 0.0353),
      kilograms: (x => x * 35.27),
      liang: (x => x * 1.322774),
      jin: (x => x * 21.1644)
    }
  },
  pounds: {
    msg: <FM id='Weight.pounds' defaultMessage='Pounds' />,
    conversions: { // to pounds
      ounces: (x => x / 16),
      pounds: id,
      grams: (x => x / 453.59237),
      kilograms: (x => x * 2.268),
      liang: (x => x * 0.08267335),
      jin: (x => x * 1.32277),
    }
  },
  grams: {
    msg: <FM id='Weight.grams' defaultMessage='Grams' />,
    conversions: { // to grams
      ounces: (x => x * 28.34952),
      pounds: (x => x * 453.59237),
      grams: id,
      kilograms: (x => x * 1000),
      liang: (x => x * 37.5),
      jin: (x => x * 600)
    }
  },
  kilograms: {
    msg: <FM id='Weight.kilograms' defaultMessage='Kilograms' />,
    conversions: { // to kilograms
      ounces: (x => x / 35.27),
      pounds: (x => x / 2.268),
      grams: (x => x / 1000),
      kilograms: id,
      liang: (x => x * 0.00375),
      jin: (x => x * 0.6)
    }
  },
  liang: {
    msg: <FM id='Weight.taiwaneseLiang' defaultMessage='Taiwanese Liang' />,
    conversions: { // to Taiwanese liang
      ounces: (x => x / 1.322774),
      pounds: (x => x / 0.08267335),
      grams: (x => x / 37.5),
      kilograms: (x => x / 0.00375),
      liang: id,
      jin: (x => x * 16)
    }
  },
  jin: {
    msg: <FM id='Weight.taiwaneseJin' defaultMessage='Taiwanese Jin' />,
    conversions: { // to Taiwanese jin
      ounces: (x => x / 21.1644),
      pounds: (x => x / 1.32277),
      grams: (x => x / 0.0006),
      kilograms: (x => x / 0.6),
      liang: (x => x / 16),
      jin: id
    }
  }
};

export const temperatures = {
  celsius: {
    msg: <FM id='Temperature.celsius' defaultMessage='Celsius' />,
    conversions: { // to celsius
      celsius: id,
      fahrenheit: (x => (x - 32) * 5 / 9),
      kelvin: (x => x - 273.15)
    }
  },

  fahrenheit: {
    msg: <FM id='Temperature.fahrenheit' defaultMessage='Fahrenheit' />,
    conversions: { // to fahrenheit
      celsius: (x => (x * 9 / 5) + 32),
      fahrenheit: id,
      kelvin: (x => (x * 9 / 5) - 459.67)
    }
  },

  kelvin: {
    msg: <FM id='Temperature.kelvin' defaultMessage='Kelvin' />,
    conversions: { // to kelvin
      celsius: (x => x + 273.15),
      fahrenheit: (x => (x + 459.67) * (5/9)),
      kelvin: id
    }
  }
};

export function tryConvert(measure, convert) {
  const input = parseFloat(measure);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 100000) / 100000;
  return rounded.toString();
};
