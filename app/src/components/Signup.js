
import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Font } from 'expo';
import { AppRegistry, TextInput } from 'react-native';

export default class Signup extends React.Component {
	constructor () {
		super()
		this.state = {
			fontLoaded: false,
			userName: "Rio",
			userInsurance: "Kaiser"
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


	  render() {
		  return (

		      <View style={styles.buttonView}>
		      	{ this.state.fontLoaded ? (
		  			<Text style={styles.textSubtitle}>Name: </Text>
		  		) : null
		  		}
		  		{ this.state.fontLoaded ? (
		  			<TextInput onChangeText={(userName) => this.setState({userName})}
		  			value={this.state.userName} style={styles.textSubtitle}
		  			/>
		  		) : null
		  		}
		  		{ this.state.fontLoaded ? (
		  			<Text style={styles.textSubtitle}>Insurance Provider: </Text>
		  		) : null
		  		}
		  		{ this.state.fontLoaded ? (
		  			<TextInput onChangeText={(userInsurance) => this.setState({userInsurance})}
		  			value={this.state.userInsurance} style={styles.textSubtitle}
		  			/>
		  		) : null
		  		}


		      </View>

		    )
		};

};
		  const styles = StyleSheet.create({
		  		buttonView: {
		  			backgroundColor: "#F5F2F4",
		  			paddingTop: 200

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

		  		}

		  });
// export default Splash;