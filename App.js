import React from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';
import MainApp from './src/MainApp';

export default class App extends React.Component {
  render() {
    return (
      <MainApp />
    );
  }
}
AppRegistry.registerComponent('ListView', () => App);
