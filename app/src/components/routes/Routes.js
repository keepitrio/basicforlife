import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Splash from '../Splash';
import Home from '../Home';
import Prescription from '../Prescription';
import HealthRecord from '../HealthRecord';
import GetTreated from '../GetTreated';
import VideoChat from '../VideoChat';
import ScheduleAppointment from '../ScheduleAppointment';
import Signup from '../Signup';

export default class Routes extends React.Component {

  render(){
    return(
      <Router>
        <Scene key='root'>
          <Scene key="splash" component={ Splash } initial={true} hideNavBar={true} />
          <Scene key="home" component={ Home } />
          <Scene key="getTreated" component={GetTreated} />
          <Scene key="videoChat" component={VideoChat} />
          <Scene key="scheduleAppointment" component={ScheduleAppointment} />
          <Scene key="record" component={ HealthRecord } />
          <Scene key="prescription" component={ Prescription } />
          <Scene key="signup" component={ Signup } />
        </Scene>
      </Router>
    )

  }
}
