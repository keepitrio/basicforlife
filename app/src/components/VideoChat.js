import React from 'react';
import { Text } from 'react-native';
import { Action } from 'react-native-router-flux';

const VideoChat = () => {

  const goToHome = () => {
    Actions.Home()
  }

  return (
      <Text> this is VideoChat! </Text>
    )
}

export default VideoChat;
