import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Splash from '../Splash';
import Home from '../Home';
import Prescription from '../Prescription';
import HealthRecord from '../HealthRecord';

export default class Routes extends React.Component {

  render(){

    return(
      <Router>
        <Scene key='root'>
          <Scene key="splash" component={ Splash } title="Splash" initial={true} />
          <Scene key="home" component={ Home } title="Home" />
          <Scene key="record" component={ HealthRecord } title="Healthrecord"  />
          <Scene key="prescription" component={ Prescription } title="Prescription" />
        </Scene>
      </Router>
    )

  }
}
