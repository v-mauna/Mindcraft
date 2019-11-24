import React from 'react';
import { Provider} from 'react-redux'
import store from './components/redux/store'
import MainNavigator from './components/screens/navigators'


export default class App extends React.Component{
 
  render(){
    return(
      <Provider store={store}>
        <MainNavigator />
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