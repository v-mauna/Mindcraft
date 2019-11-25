import React from 'react';
import { Provider} from 'react-redux'
import store from './components/redux/store'
import MainNavigator from './components/screens/navigators'
import HomePage from './components/screens/home'
import Journals from './components/screens/journals'
import Meditations from './components/screens/meditations'
import SingleMeditation from './components/screens/singleMeditation'
import LoggedOut from './components/screens/loggedOut'
import Login from './components/screens/loginForm'
import Signup from './components/screens/signUpForm'
import Drawer from './components/screens/drawer'
import JournalEntry from './components/screens/journalEntryForm'


export default function App() {

  return (
    <Provider store={store}>
      <Login/>
    </Provider>
  );
  }
