import React from 'react';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Splash from './components/Splash'
import FacebookLogin from './components/FacebookLogin'
import SignIn from './components/SignIn'
import ProfileSettings from './components/ProfileSettings'
import Restrictions from './components/Restrictions'
import Search from './components/Search'
import Results from  './components/Results'



const SplashStack = createSwitchNavigator (
  {
    Splash,
    FacebookLogin,
    Restrictions,
    SignIn,
  },
  {
    initialRouteName: 'Splash'
  }
)

SplashStack.navigationOptions = {
  header: null,
};

const App = createStackNavigator (
    {
      SplashStack,
      Search,
      Results,
    },
    {
      initialRouteName: "SplashStack"
    }
);

export default App;
