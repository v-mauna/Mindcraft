import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer,DrawerNavigator,createSwitchNavigator} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Provider} from 'react-redux'
import HomePage from './home'
import Journals from './journals'
import Meditations from './meditations'
import SingleMeditation from './singleMeditation'
import SingleJournal from './singleJournal'
import UsersList from './usersList'
import Login from './loginForm'
import Icon from "react-native-vector-icons/Ionicons"

export const authNavigator = createStackNavigator({
    Login: {screen: Login},
})

export const HomeNavigator = createStackNavigator({
    Home: {screen: HomePage},
    Journals: {screen: Journals},
    Meditations: {screen: Meditations},
    SingleMeditation: {screen: SingleMeditation},
    UsersList: {screen: UsersList}
})

export const MeditationsNavigator = createStackNavigator({
  Home: {screen: HomePage},
  Meditations: {screen: Meditations},
  SingleMeditation: {screen: SingleMeditation}
},{initialRouteName:'Meditations'})

export const JournalsNavigator = createStackNavigator({
  Journals: {screen: Journals},
  Journal: {screen: SingleJournal},
  Home: {screen: HomePage},
})

export const BottomTabNavigator = createBottomTabNavigator({
  Home : HomeNavigator,
  Meditations: MeditationsNavigator,
  Journals: JournalsNavigator
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      tintColor = 'black';
      if (routeName === 'Home') {
        iconName = `ios-home`
      } else if (routeName === 'Meditations') {
        iconName = `ios-leaf`;
      } else if (routeName === 'Journals') {
        iconName = `ios-book`;
      }
      return <Icon name={iconName} size={20} color={tintColor} />;
    },tabBarOptions: {
      activeTintColor:  '#636b61',
      inactiveTintColor: '#636b61',
    },
  })})
    export default MainNavigator = createAppContainer(BottomTabNavigator)
  export const SwitchNavigator = createSwitchNavigator(
    {
      Login: authNavigator,
      App: BottomTabNavigator
    },
    {
      initialRouteName: 'Login'
    }
  );


 

