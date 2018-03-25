import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Body, Container } from 'native-base';
import FooterTabs from './FooterTabs';
import { Font } from 'expo';

export default class Home extends React.Component {
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
      <View style= {styles.view}>
        <View>
        { this.state.fontLoaded ? (
          <Text style={styles.header}>My Care</Text>
        ) : null
        }
        <Container style={styles.homeList1}>
          <Text style={styles.homeListText}>Reminders</Text>
          <Text>Messages</Text>
        </Container>
        <Container style={styles.homeList2}>
          <Text style={styles.homeListText}>Alert</Text>
          <Text>Calendar</Text>
        </Container>
        <Container style={styles.cardContainer}>
          <Card style={[styles.card, styles.getTreated]}>
            <CardItem style={styles.getTreated}>
              <Body style={[styles.cardBody, styles.getTreated]}>
                <Text onPress={Actions.getTreated} style={styles.cardText}>
                  Get Treated Now
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={[styles.card, styles.videoChat]}>
            <CardItem style={styles.videoChat}>
              <Body style={[styles.cardBody, styles.videoChat]}>
                <Text onPress={Actions.videoChat} style={styles.cardText}>
                  Video chat with a doctor
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={[styles.card, styles.scheduleAppointment]}>
            <CardItem style={styles.scheduleAppointment}>
              <Body style={[styles.cardBody, styles.scheduleAppointment]}>
                <Text onPress={Actions.scheduleAppointment} style={styles.cardText}>
                  Schedule office appointment
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Container>
        </View>
        <FooterTabs />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    height: "100%",
  },
  header: {
    fontSize: 30,
    paddingTop: 85,
    paddingLeft: 40,
    fontFamily: "SofiaProSemiBold"
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
  cardContainer: {
    marginTop: 65
  },
  card: {
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 30,
    paddingBottom: 80,
    borderRadius: 10
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
  },
  getTreated: {
    backgroundColor: '#a74d54'
  },
  videoChat: {
    backgroundColor: '#877390'
  },
  scheduleAppointment: {
    backgroundColor: '#e3847c'
  },
  cardText: {
    color: 'white'
  }
});
