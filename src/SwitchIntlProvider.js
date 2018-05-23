import React, {Component} from 'react';
import { IntlProvider } from 'react-intl';
import App from './App';

import { addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en'
import enTranslations from './translations/locales/en.json'
import es from 'react-intl/locale-data/es'
import esTranslations from './translations/locales/es.json'
import zh from 'react-intl/locale-data/zh'
import zhTranslations from './translations/locales/zh.json'

addLocaleData([...en, ...es, ...zh])

class SwitchIntlProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {locale: 'en', messages: enTranslations};

    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage(language) {
    if (language === 'zh') {
      this.setState({
        language: 'zh',
        messages: zhTranslations
      })
    } else if (language === 'en') {
      this.setState({
        language: 'en',
        messages: enTranslations
      })
    } else if (language === 'es') {
      this.setState({
        language: 'es',
        messages: esTranslations
      })
    }

  }

  render() {
    return (
      <IntlProvider {...this.state}>
        <App setLanguage={this.setLanguage} />
      </IntlProvider>
    );
  }
};

export default SwitchIntlProvider;
