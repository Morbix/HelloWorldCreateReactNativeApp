import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header title="Header"/>
        <View style={Styles.container}>
          <Text style={Styles.text}>Hello World</Text>
          <Text style={Styles.text}>by Create React Native App</Text>
        </View>
      </View>
    );
  }
}

const Styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  }
};
