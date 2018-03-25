import React from 'react';
import { Text } from 'react-native';
import { Action } from 'react-native-router-flux';

const Splash = () => {

  const goToHome = () => {
    Actions.Home()
  }

  return (
      <Text> this is splash! </Text> 
    )
}

export default Splash;