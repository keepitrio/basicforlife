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
          <Scene key="splash" component={ Splash } hideNavBar={true} initial={true}/>
          <Scene key="home" component={ Home }  hideNavBar={true}/>
          <Scene key="getTreated" component={GetTreated} hideNavBar={true} />
          <Scene key="videoChat" component={VideoChat} hideNavBar={true}/>
          <Scene key="scheduleAppointment" component={ScheduleAppointment} hideNavBar={true}/>
          <Scene key="record" component={ HealthRecord } hideNavBar={true}/>
          <Scene key="prescription" component={ Prescription } hideNavBar={true}/>
          <Scene key="signup" component={ Signup } hideNavBar={true}/>
        </Scene>
      </Router>
    )

  }
}
