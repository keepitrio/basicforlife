import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Splash from '../Splash';
import Home from '../Home';
import Prescription from '../Prescription';
import HealthRecord from '../HealthRecord';
import GetTreated from '../GetTreated';
import VideoChat from '../VideoChat';
import ScheduleAppointment from '../ScheduleAppointment';

export default class Routes extends React.Component {

  render(){

    return(
      <Router>
        <Scene key='root'>
          <Scene key="splash" component={ Splash } title="Splash" />
          <Scene key="home" component={ Home } title="Home" initial={true} />
          <Scene key="getTreated" component={GetTreated} title="Get Treated" />
          <Scene key="videoChat" component={VideoChat} title="Video Chat" />
          <Scene key="scheduleAppointment" component={ScheduleAppointment} title="Schedule Appointment " />
          <Scene key="record" component={ HealthRecord } title="Health Record"  />
          <Scene key="prescription" component={ Prescription } title="Prescription" />
        </Scene>
      </Router>
    )

  }
}
