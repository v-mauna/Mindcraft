import React from 'react'
import { View } from 'react-native'
import { loadUser } from '../storage/userStorage'

class NewDay extends React.Component {
  componentDidMount = async () => {
    this.checkLast()
  }

  checkLast = async () => {
    const user = await loadUser()
    let lastEntry = await fetch(`https://mindcraft-api.herokuapp.com/api/entries/time/${user.id}`)
    lastEntry = await lastEntry.json()
    let today = new Date()

    if (JSON.stringify(lastEntry.date).split('T')[0] < JSON.stringify(today).split('T')[0]) {
      this.props.navigation.navigate('Home')
    } else {
      this.props.navigation.navigate('JournalEntry')
    }
  }
  render() {
    return <View></View>
  }
}
export default NewDay

JSON.Date
