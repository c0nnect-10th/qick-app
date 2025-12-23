/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';

// Disable native screens to avoid missing ViewManager errors on devices where
// the native view managers aren't registered correctly (temporary workaround)
enableScreens(false);

AppRegistry.registerComponent(appName, () => App);
