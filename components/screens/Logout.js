import React from 'react'
import { View, AsyncStorage } from 'react-native'

class Logout extends React.Component {
  componentDidMount() {
    this.logout()
  }

  logout = async () => {
      await AsyncStorage.clear()
      this.props.navigation.navigate('AuthLoading')
  }

  render() {
    return (
      <View>

      </View>
    )
  }
}

export default Logout
