// import React from 'react'
// import { createSwitchNavigator, createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack';
// import HomePage from '../components/screens/home'
// import Login from '../components/screens/loginForm'
// import Signup from '../components/screens/signUpForm'
// import Profile from '../components/screens/Profile'
// import Journals from '../components/screens/journals'
// import Meditations from '../components/screens/meditations'

// import { createBottomTabNavigator } from 'react-navigation-tabs'

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

// const AppStack = createStackNavigator({ Home: HomePage, Journals: Journals, Meditations: Meditations, SingleMeditation: SingleMeditation });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

// export default createAppContainer(
//     createSwitchNavigator(
//       {
//         AuthLoading: AuthLoadingScreen,
//         App: AppStack,
//         Auth: AuthStack,
//       },
//       {
//         initialRouteName: 'AuthLoading',
//       }
//     )
//   );