import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Splash from '../Splash';

export default class Routes extends React.Component {

  render(){

    return(
      <Router>
        <Scene key = 'root'>
          <Scene key = "splash" component = {Splash} title="splash" initial = {true} />
        </Scene>
      </Router>
    )

  }
}
