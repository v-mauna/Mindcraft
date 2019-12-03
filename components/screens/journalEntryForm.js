import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Keyboard,
} from 'react-native'
import styles from '../../assets/styles/entryStyles'
import { TextInput } from 'react-native-gesture-handler'
import { loadSettings, saveSettings } from '../storage/entryStorage'
import {connect} from 'react-redux'
import {createEntry} from '../../redux/actions/entryActions'
import {loadUser} from '../storage/userStorage'

class JournalEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: '',
      hoursSLept: '',
      favorite: '',
      least: '',
      entry: ''
   }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const initialState = await loadSettings()
    this.setState(initialState)
    this.user = await loadUser()
  }

  componentWillUnMount(){
    this.setState(
      {
    state: {}
  })
  }

  static navigationOptions = {
    title: 'Daily Journal',
    headerStyle: {
      backgroundColor: '#4F0147',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  handleSubmit() {
    console.log("this.user: ", this.user)
    console.log("Journal: ", this.state)
    const id = this.user.id
    const journal = this.state
    this.props.createEntry(id, journal)
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>What was your favorite moment today?</Text>
          <TextInput
              style={styles.textInput}
              placeholder='Favorite'
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.favorite}
              onChangeText={(text)=>this.setState({favorite:text})}
            />
          <Text style={styles.text}>What was your least favorite?</Text>
          <TextInput
              style={styles.textInput}
              placeholder='Least Favorite'
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.least}
              onChangeText={(text)=>this.setState({least:text})}
            />
            <Text style={styles.text}>Did you get enough sleep last night?</Text>
          <TextInput
              style={styles.textInput}
              placeholder='Hours Slept'
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.hoursSLept}
              onChangeText={(text)=>this.setState({hoursSLept: text})}
            />
          <View style={styles.inputContainer}>
          <Text style={styles.text}>Share away...</Text>

            <TextInput
              style={styles.textInput2}
              placeholder="Whatever you want"
              onBlur={Keyboard.dismiss}
              value={this.state.entry}
              onChangeText={(text)=>this.setState({entry:text})}
            />
          </View>
            <TouchableOpacity
              onPress={this.handleSubmit}
            >
              <Text style={styles.text}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createEntry: (userId, journal) => dispatch(createEntry(userId, journal))
})

export default connect( null, mapDispatchToProps)(JournalEntry)