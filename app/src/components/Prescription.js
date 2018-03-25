import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Body, Container } from 'native-base';
import FooterTabs from './FooterTabs';
import { Font } from 'expo';

export default class Prescription extends React.Component {
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
    console.log(this.state.fontLoaded)
    return(
      <View style={styles.view}>
        <View style={styles.header}>
          { this.state.fontLoaded ? (
            <Text style={styles.headerText}>Prescriptions</Text>
          ) : null
          }
        </View>
        <View>
        <Card style={[styles.card]}>
          <CardItem style={styles.cardItem}>
            <Body style={[styles.cardBody]}>
            { this.state.fontLoaded ? (
              <Text style={styles.medicineText}>
                Levora
              </Text>
          ) : null
          }
          { this.state.fontLoaded ? (
              <Text style={styles.prescriptionText}>
                last fill: 1/17/18
              </Text>
          ) : null
          }
            </Body>
          </CardItem>
        </Card>
        <Card style={[styles.card]}>
          <CardItem style={styles.cardItem}>
            <Body style={[styles.cardBody]}>
            { this.state.fontLoaded ? (
              <Text style={styles.medicineText}>
                Accutane
              </Text>
            ) : null
            }
            { this.state.fontLoaded ? (
              <Text style={styles.prescriptionText}>
                last fill: 2/5/18
              </Text>
            ) : null
            }
            </Body>
          </CardItem>
        </Card>
        <Card style={[styles.card]}>
          <CardItem style={styles.cardItem}>
            <Body style={[styles.cardBody]}>
            { this.state.fontLoaded ? (
              <Text style={styles.medicineText}>
                Ibuprofen 800mg
              </Text>
            ) : null
            }
            { this.state.fontLoaded ? (
              <Text style={styles.prescriptionText}>
                last fill: 12/10/17
              </Text>
            ) : null
            }
            </Body>
          </CardItem>
        </Card>
          { this.state.fontLoaded ? (
            <Text style={styles.orderText}>
              Order Now >
            </Text>
          ) : null
          }
        </View>
        <FooterTabs />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    height: "100%",
    backgroundColor: "#F5F2F4",

  },
  header:{
    borderBottomWidth: 3.5,
    borderColor: '#cc4945',
    paddingTop: 50,
    paddingBottom:10,
    marginLeft: 40,
    marginRight: 40,
  },
  headerText: {
    fontSize: 30,
    fontFamily: "SofiaProSemiBold",
    color: "#54494d",
  },
  subHeader: {
    fontSize: 20,
    paddingTop: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  subHeaderText: {
    fontFamily: "SofiaProLight",
    color: "#cc4945",
    fontSize: 20,
    paddingTop: 30,
    borderBottomWidth: 3.5,
  },
  card: {
    marginTop: 20,
    marginRight: 40,
    marginLeft: 40,
    backgroundColor: "#f0f0f6",
    paddingTop: 30,
    paddingBottom: 50,
    borderRadius: 10,
  },
  cardBody: {
    justifyContent: 'center',
    backgroundColor: "#f0f0f6",
  },
  cardItem:{
    backgroundColor: "#f0f0f6",
  },
  medicineText: {
    fontSize: 18,
    fontFamily: "SofiaProSemiBold",
    color: "#cc4945",
    marginBottom: 7,
  },
  prescriptionText: {
    fontSize: 14,
    fontFamily: "SofiaProLight",
    color: "#cc4945",
  },
  orderText: {
    marginTop: 100,
    fontFamily: "SofiaProSemiBold",
    color: "#cc4945",
    fontSize: 25,
    textAlign: "center",


  }
});