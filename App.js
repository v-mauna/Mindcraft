import React from 'react';
import { StyleSheet, Text, View,AppRegistry } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer,DrawerNavigator} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomePage from './components/screens/home'
import Journals from './components/screens/journals'
import Meditations from './components/screens/meditations'
import SingleMeditation from './components/screens/singleMeditation'
import LoggedOut from './components/screens/loggedOut'
import Login from './components/screens/loginForm'
import Signup from './components/screens/signUpForm'
import Drawer from './components/screens/drawer'


export default function App() {

  return (
      <Login/>
  );
}
// const HomeNavigator = createStackNavigator({
//     Home: {screen: HomePage},
//     Journals: {screen: Journals},
//     Meditations: {screen: Meditations},
//     SingleMeditation: {screen: SingleMeditation}
// })

// const BottomTabNavigator = createBottomTabNavigator({
//   Home : HomeNavigator
// })


// export default createAppContainer(BottomTabNavigator)