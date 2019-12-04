/* eslint-disable react/display-name */
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomePage from '../components/screens/home'
import Journals from '../components/screens/journals'
import JournalEntry from '../components/screens/journalEntryForm'
import Meditations from '../components/screens/meditations'
import SingleMeditation from '../components/screens/singleMeditation'
import SingleJournal from '../components/screens/singleJournal'
import Quizzes from '../components/screens/quizzes'
import Login from '../components/screens/loginForm'
import Signup from '../components/screens/signUpForm'
import Icon from 'react-native-vector-icons/Ionicons'
import AuthLoading from '../components/screens/authLoading'
import Logout from '../components/screens/Logout'
import Profile from '../components/screens/userProfile'
import Quiz from '../components/screens/singleQuiz'
import NewDay from '../components/screens/newDay'
import MoodTracker from '../components/screens/moodRating'
import SleepTracker from '../components/screens/sleepTracker'

export const authNavigator = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
})

export const HomeNavigator = createStackNavigator({
  Home: { screen: HomePage },
  Journals: { screen: Journals },
  Meditations: { screen: Meditations },
  SingleMeditation: { screen: SingleMeditation },
  Quizzes: {screen: Quizzes},
  Quiz: {screen: Quiz},
  Profile: {screen: Profile},
  DailyCheckIn: {screen: MoodTracker},
  SleepTracker: { screen: SleepTracker },

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

export const CheckInNavigator = createStackNavigator(
  {
  Home: {screen: HomePage},
  MoodRating: { screen: MoodTracker },
  SleepTracker: { screen: SleepTracker },
  JournalEntry: {screen: JournalEntry},
},
{ initialRouteName: 'MoodRating' }
)

export const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    Meditations: MeditationsNavigator,
    'Check-In': CheckInNavigator,
    Journals: JournalsNavigator,
    Logout: Logout
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
        } else if (routeName === 'Logout') {
          iconName = `ios-key`
        } else if (routeName ==='Check-In') {
          iconName = 'ios-add'
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
export default MainNavigator
