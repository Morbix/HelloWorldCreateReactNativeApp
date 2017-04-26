import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  return (
    <View style={Styles.view} >
      <Text style={Styles.text}>{props.title}</Text>
    </View>
  )
};

const Styles = {
  view: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  text: {
    fontSize: 20
  }
}

export default Header;
