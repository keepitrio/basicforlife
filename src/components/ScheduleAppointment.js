import React from 'react';
import { Text } from 'react-native';
import { Action } from 'react-native-router-flux';

const ScheduleAppointments = () => {

  const goToHome = () => {
    Actions.Home()
  }

  return (
      <Text> this is ScheduleAppointments! </Text>
    )
}

export default ScheduleAppointments;
