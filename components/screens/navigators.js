import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import {
  createAppContainer,
  DrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Provider } from 'react-redux'
import HomePage from './home'
import Journals from './journals'
import JournalEntry from './journalEntryForm'
import Meditations from './meditations'
import SingleMeditation from './singleMeditation'
import SingleJournal from './singleJournal'
import UsersList from './usersList'
import Login from './loginForm'
import Signup from './signUpForm'
import Icon from 'react-native-vector-icons/Ionicons'
import AuthLoading from './authLoading'

export const authNavigator = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
})

export const HomeNavigator = createStackNavigator({
  Home: { screen: HomePage },
  Journals: { screen: Journals },
  Meditations: { screen: Meditations },
  SingleMeditation: { screen: SingleMeditation },
  UsersList: { screen: UsersList },
})

export const MeditationsNavigator = createStackNavigator(
  {
    Home: { screen: HomePage },
    Meditations: { screen: Meditations },
    SingleMeditation: { screen: SingleMeditation },
  },
  { initialRouteName: 'Meditations' }
)

export const JournalsNavigator = createStackNavigator({
  Journals: {screen: Journals},
  Journal: {screen: SingleJournal},
  JournalEntry: {screen: JournalEntry},
  Home: {screen: HomePage},
})

export const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    Meditations: MeditationsNavigator,
    Journals: JournalsNavigator,
    Login: authNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        tintColor = 'black'
        if (routeName === 'Home') {
          iconName = `ios-home`
        } else if (routeName === 'Meditations') {
          iconName = `ios-leaf`
        } else if (routeName === 'Journals') {
          iconName = `ios-book`
        } else if (routeName === 'Login') {
          iconName = `ios-key`
        }
        return <Icon name={iconName} size={20} color={tintColor} />
      },
      tabBarOptions: {
        activeTintColor: '#636b61',
        inactiveTintColor: '#636b61',
      },
    }),
  }
)
const MainNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      Login: authNavigator,
      App: BottomTabNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
)
// export const SwitchNavigator = createSwitchNavigator(
//   {
//     AuthLoading: AuthLoading,
//     Login: authNavigator,
//     App: BottomTabNavigator
//   },
//   {
//     initialRouteName: 'AuthLoading'
//   }
// );

export default MainNavigator
