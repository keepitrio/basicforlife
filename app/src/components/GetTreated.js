import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Body, Container } from 'native-base';
import FooterTabs from './FooterTabs';
import { Font } from 'expo';

export default class GetTreated extends React.Component {
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
            <Text style={styles.headerText}>Get Treated</Text>
          ) : null
          }
        </View>
        <View style={styles.subHeader}>
          { this.state.fontLoaded ? (
            <Text style={styles.subHeaderText}> I think I have a ...</Text>
            ) : null
          }
        </View>
        <View style= {styles.treatedBlock}>
          { this.state.fontLoaded ? (
            <Text style={styles.problemText}> Menstrual Problem </Text>
            ) : null
          }
          { this.state.fontLoaded ? (
            <Text style={styles.symptomsText}> Acne, cramps, bloating </Text>
            ) : null
          }
        </View>
        <View style= {styles.treatedBlock}>
          { this.state.fontLoaded ? (
            <Text style={styles.problemText}> Yeast Infection </Text>
            ) : null
          }
          { this.state.fontLoaded ? (
            <Text style={styles.symptomsText}> Vaginal itching, burning and discharge </Text>
            ) : null
          }
        </View>
        <View style= {styles.treatedBlock}>
          { this.state.fontLoaded ? (
            <Text style={styles.problemText}> Urinary Tract Infection (UTI) </Text>
            ) : null
          }
          { this.state.fontLoaded ? (
            <Text style={styles.symptomsText}> Burning, frequent urination </Text>
            ) : null
          }
        </View>
        <View style= {styles.treatedBlock}>
          { this.state.fontLoaded ? (
            <Text style={styles.problemText}> Skin Issue </Text>
            ) : null
          }
          { this.state.fontLoaded ? (
            <Text style={styles.symptomsText}> Rashe, mole, acne... </Text>
            ) : null
          }
        </View>
        <View style= {styles.treatedBlock}>
          { this.state.fontLoaded ? (
            <Text style={styles.problemText}> Cold and Flu </Text>
            ) : null
          }
          { this.state.fontLoaded ? (
            <Text style={styles.symptomsText}> Congestion, cough, fever... </Text>
            ) : null
          }
        </View>
        <View style= {styles.treatedBlock}>
          { this.state.fontLoaded ? (
            <Text style={styles.problemText}> Allergies </Text>
            ) : null
          }
          { this.state.fontLoaded ? (
            <Text style={styles.symptomsText} > Congestion, sneezing, itchy eyes </Text>
            ) : null
          }
        </View>
        <FooterTabs style={styles.footer} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    height: "100%",
    backgroundColor: '#F5F2F4'
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
  },
  subHeader: {
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
  treatedBlock:{
    marginTop: 20,
    marginRight: 40,
    marginLeft: 40,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
  },
  problemText:{
    fontFamily: "SofiaProSemiBold",
    fontSize: 18,
    color: "#54494d",
    marginBottom: 7,
  },
  symptomsText:{
    fontFamily: "SofiaProLight",
    fontSize: 14,
    color: "#54494d",
    marginBottom: 7,
  }
});
