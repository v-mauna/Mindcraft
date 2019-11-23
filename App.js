import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer,DrawerNavigator} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Provider} from 'react-redux'
import HomePage from './components/screens/home'
import Journals from './components/screens/journals'
import Meditations from './components/screens/meditations'
import SingleMeditation from './components/screens/singleMeditation'
import SingleJournal from './components/screens/singleJournal'
import UsersList from './components/screens/usersList'
import store from './components/redux/store'
import { View,ActivityIndicator } from 'react-native';

const HomeNavigator = createStackNavigator({
    Home: {screen: HomePage},
    Journals: {screen: Journals},
    Meditations: {screen: Meditations},
    SingleMeditation: {screen: SingleMeditation},
    UsersList: {screen: UsersList}
})

const MeditationsNavigator = createStackNavigator({
  Home: {screen: HomePage},
  Meditations: {screen: Meditations},
  SingleMeditation: {screen: SingleMeditation}
},{initialRouteName:'Meditations'})

const JournalsNavigator = createStackNavigator({
  Journals: {screen: Journals},
  Journal: {screen: SingleJournal},
  Home: {screen: HomePage},
})
const BottomTabNavigator = createBottomTabNavigator({
  Home : HomeNavigator,
  Meditations: MeditationsNavigator,
  Journals: JournalsNavigator
})

let RootStack = createAppContainer(BottomTabNavigator)

export default class App extends React.Component{
 
  render(){
    return(
      <Provider store={store}>
        <RootStack/>
      </Provider>
    )
  }
}
// export default function App() {

//   return (
//       <HomePage/>
//   );
// }

// export default createAppContainer(BottomTabNavigator)