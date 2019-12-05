import React from 'react'
import { View } from 'react-native'
import { loadUser } from '../storage/userStorage'

class NewDay extends React.Component {

  constructor(){
    super()
    this.state = {
      lastEntry: {}
    }
  }

  componentDidMount = async () => {
    this.checkLast()
  }

  checkLast = async () => {
    const user = await loadUser()
    let lastEntry = await fetch(`https://mindcraft-api.herokuapp.com/api/entries/time/${user.id}`)
    // this.setState(lastEntry)
    // // lastEntry = await lastEntry.json()
    // console.log(this.state.lastEntry)
    let past = new Date().toISOString().split('T')[0]
    let today = new Date().toISOString().split('T')[0]
    console.log("PAST", past, "TODAY", today)

    if (today <= past) {
      this.props.navigation.navigate('Home')
    } else {
      this.props.navigation.navigate('DailyCheckIn')
    }
  }
  render() {
    return <View></View>
  }
}
export default NewDay

JSON.Date
