import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Body, Container, Button } from 'native-base';
import FooterTabs from './FooterTabs';
import { Font } from 'expo';

export default class  HealthRecord extends React.Component {
  constructor() {
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

    this.setState({ fontLoaded: true });
  }

  render() {
    return(
      <View style={styles.view}>
        { this.state.fontLoaded ? (
          <Text style={styles.header}>Health Records</Text>
        ) : null
        }
        <Container style={styles.images}>
          <Image source={require('../../assets/images/vaccinations_card.png')} style={styles.card} />
          <Image source={require('../../assets/images/meds-card.png')} style={styles.card} />
          <Image source={require('../../assets/images/allergies-card.png')} style={styles.card} />
          <Image source={require('../../assets/images/scans-card.png')} style={styles.card} />
        </Container>
        <FooterTabs />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#F5F2F4",
    height: "100%"
  },
  header: {
    color: "#54494D",
    fontSize: 30,
    paddingTop: 55,
    fontFamily: "SofiaProSemiBold",
    borderBottomWidth: 3.5,
    borderColor: "#cc4945",
    marginLeft: 40,
    marginRight: 40,
    textAlign: "left",
  },
  homeList1: {
    marginLeft: 40,
    marginTop: 40
  },
  homeList2: {
    left: '50%',
  },
  homeListText: {
    marginBottom: 15
  },
  card: {
    width: 300,
    height: 115,
    marginTop: 20
  },
  images:{
    flex: 1,
    alignItems: "center"
  }
});
