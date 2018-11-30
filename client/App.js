import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import Splash from './components/Splash'
import FacebookLogin from './components/FacebookLogin'
import SignIn from './components/SignIn'
import ProfileSettings from './components/ProfileSettings'
import Restrictions from './components/Restrictions'
import Search from './components/Search'
import Results from  './components/Results'


const App = createSwitchNavigator (
    {
      Splash,
      FacebookLogin,
      SignIn,
      ProfileSettings,
      Restrictions,
      Search,
      Results,
    },
    {
      initialRouteName: "Splash"
    }
  );

export default App;
