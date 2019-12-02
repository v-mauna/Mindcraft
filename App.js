import React from 'react';
import { Provider} from 'react-redux'
import store from './components/redux/store'
import MainNavigator from './components/screens/navigators'

export default function App() {

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );

  }

