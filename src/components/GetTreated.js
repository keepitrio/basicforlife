import React from 'react';
import { Text } from 'react-native';
import { Action } from 'react-native-router-flux';

const GetTreated = () => {

  const goToHome = () => {
    Actions.Home()
  }

  return (
      <Text> this is GetTreated! </Text>
    )
}

export default GetTreated;
