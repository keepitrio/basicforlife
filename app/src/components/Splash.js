import React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Font } from 'expo';

export default class Splash extends React.Component {
	constructor () {
		super()
		this.state = {
			fontLoaded: false,
		}
	}
	async componentDidMount() {
		await Font.loadAsync({
			'SofiaProLight': require('../../assets/fonts/SofiaProLight.ttf'),
	      'SofiaProRegular': require('../../assets/fonts/SofiaProRegular.ttf'),
	      'SofiaProSemiBold': require('../../assets/fonts/SofiaProSemiBold.ttf'),
	      'SofiaProUltraLight': require('../../assets/fonts/SofiaProUltraLight.ttf')
		});
		this.setState({ fontLoaded: true});
	}

	// const Splash = () => {

	  // const goToHome = () => {
	  //   Actions.home()
	  // }
	  // const signUp = () => {
	  // 	Actions.signup()
	  // }

	  render() {
		  return (
		  	<View style={styles.background}>
			  <Image source={require('../../assets/images/home_login_splash.png')} style={styles.logo}/>
		      <View style={styles.buttonView}>
		  		{ this.state.fontLoaded ? (
				  	<Text style={styles.textSubtitle}> Basic for Life: Because healthcare should always be basic </Text>
		  		) : null
		  		}
		  		{ this.state.fontLoaded ? (
		  			<Button onPress={ Actions.home } title="Log In" color="#a74d54" />
		  		) : null
		  		}
				{ this.state.fontLoaded ? (
			      <Button onPress={ Actions.signup } title="Sign Up" color="#877390" />
		  		) : null
		  		}


		      </View>
		     </View>
		    )
		};

};
		  const styles = StyleSheet.create({
		  		buttonView: {
					backgroundColor: "#F5F2F4",
		  			paddingTop: 20,
		  			marginLeft: 50,
		  			marginRight: 50

		  		},
		  		background: {
		  			height: "100%",
		  			backgroundColor: "#F5F2F4"
		  		},
		  		text: {
		  			color: "#54494d",
		  			fontSize: 50,
		  			textAlign: "center",
		  			paddingTop: 85,
		  			paddingLeft: 40,
		  			fontFamily: "SofiaProSemiBold"

		  		},
		  		 textSubtitle: {
		  			color: "#54494d",
		  			fontSize: 20,
		  			padding: 10,
		  			fontFamily: "SofiaProSemiBold",
		  			textAlign: "center",
		  		},
		  		buttons: {
		  			color: "#ebe4e7",
		  			fontFamily: "SofiaProSemiBold"

				  },
				  logo: {
					  width: "100%",
					  height: "50%"
				  }

		  });
// export default Splash;
