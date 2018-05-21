import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SwitchIntlProvider from './SwitchIntlProvider';

ReactDOM.render(
  <SwitchIntlProvider/>,
  document.getElementById('root')
);
registerServiceWorker();
