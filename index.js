/** @format */

import { AppRegistry, YellowBox } from 'react-native';
import _ from 'lodash';
import App from './src/App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'Setting a timer',
  'Warning: isMounted(...) is deprecated',
  'Remote debugger'
]);
const consoles = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    consoles.warn(message);
  }
};
AppRegistry.registerComponent(appName, () => App);
