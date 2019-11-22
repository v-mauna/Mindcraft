import React from 'react';
import { StyleSheet, Text, View,AppRegistry } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer,DrawerNavigator} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomePage from './components/screens/home'
import Journals from './components/screens/journals'
import Meditations from './components/screens/meditations'
import SingleMeditation from './components/screens/singleMeditation'
import Drawer from './components/screens/drawer'
import JournalEntry from './components/screens/journalEntryForm'


// export default function App() {

//   return (
//       <HomePage/>
//   );
// }
const HomeNavigator = createStackNavigator({
    Home: {screen: HomePage},
    Journals: {screen: Journals},
    Meditations: {screen: Meditations},
    SingleMeditation: {screen: SingleMeditation},
    JournalEntry: {screen: JournalEntry}
})

const BottomTabNavigator = createBottomTabNavigator({
  Home : HomeNavigator
})


export default createAppContainer(BottomTabNavigator)
