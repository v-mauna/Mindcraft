import React from 'react'
import { View } from 'react-native'
import { loadUser } from '../storage/userStorage'

class AuthLoading extends React.Component {
  componentDidMount() {
    this.checkId()
  }

  checkId = async () => {
    const user = await loadUser()
    console.log("AUTH USER", user)

    if (user.id !== null) {
      this.props.navigation.navigate('Home')
    } else {
      this.props.navigation.navigate('Login')
    }
  }

  render() {
    return (
      <View>

      </View>
    )
  }
}

export default AuthLoading
