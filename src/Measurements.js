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

export const weights = {
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
