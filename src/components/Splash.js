
import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Splash = () => {

  const goToHome = () => {
    Actions.home()
  }
  const signUp = () => {
  	Actions.signup()
  }


  return (

      <View style={styles.buttonView}>
      <Text style={styles.text}> Welcome to Basic for Life </Text> 
      <Text style={styles.textSubtitle}> Because healthcare should always be basic </Text>
      <Button onPress={ goToHome } title="Log In" color="#a74d54" style={styles.buttons}/>
      <Button onPress={ signUp } title="Sign Up" color="#877390"/>
      </View>

    )


};
  const styles = StyleSheet.create({
  		buttonView: {
  			backgroundColor: "#ebe4e7"
  		},
  		text: {
  			color: "#54494d",
  			fontSize: 50,
  			paddingTop: 85,
  			textAlign: "center",
  			paddingLeft: 40

  		},
  		 textSubtitle: {
  			color: "#54494d",
  			fontSize: 20,
  			padding: 10,
  			textAlign: "center"
  		},
  		buttons: {
  			color: "#ebe4e7"
  		}

  })

export default Splash;