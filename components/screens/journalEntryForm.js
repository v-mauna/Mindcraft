import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native'
import styles from '../../assets/styles/entryStyles'
import { TextInput } from 'react-native-gesture-handler'
import { loadSettings, saveSettings } from '../storage/entryStorage'
import {connect} from 'react-redux'
import {createdEntry} from '../../redux/actions/journalActions'
import {loadUser, saveUser} from '../storage/userStorage'

class JournalEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myMood: this.props.navigation.getParam('moodRating', 'okay'),
      hoursSlept: this.props.navigation.getParam('hours', '0'),
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

  static navigationOptions = {
    title: 'Daily Journal',
    headerStyle: {
      backgroundColor: '#72788d',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  handleSubmit() {

    this.user.totalJournalEntries++
    const id = this.user.id
    const journal = {
      hoursSlept: this.state.hoursSlept,
      mood: this.state.myMood,
      favorite: this.state.favorite,
      least: this.state.least,
      entry: this.state.entry,
      userId: id
    }
    this.props.createdEntry(id, journal)
    this.setState(
      {
        myMood: '',
        hoursSlept: '',
        favorite: '',
        least: '',
        entry: ''
  });
  saveUser(this.user)
    this.props.navigation.navigate('Home')
  }

  render() {
    console.log("mood: ",this.state.myMood)
    return (
      <KeyboardAvoidingView style={styles.container} behavior = 'padding'>
        <ScrollView>
        <Text style={styles.text}>How are you feeling today?</Text>
          <TextInput
              style={styles.textInput}
              placeholder='Mood'
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.myMood}
              onChangeText={(text)=>this.setState({myMood:text})}
            />
          <Text style={styles.text}>What was your favorite moment today?</Text>
          <TextInput
              style={styles.textInput}
              placeholder='Favorite'
              onBlur={Keyboard.dismiss}
              value={this.state.favorite}
              onChangeText={(text)=>this.setState({favorite:text})}
            />
          <Text style={styles.text}>What was your least favorite?</Text>
          <TextInput
              style={styles.textInput}
              placeholder='Least Favorite'
              onBlur={Keyboard.dismiss}
              value={this.state.least}
              onChangeText={(text)=>this.setState({least:text})}
            />
            <Text style={styles.text}>How any hours of sleep did you get last night?</Text>
          <TextInput
              style={styles.textInput}
              placeholder='Hours Slept'
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.hoursSlept}
              onChangeText={(text)=>this.setState({hoursSlept: text})}
            />
          <View style={styles.inputContainer}>
          <Text style={styles.text}>Share away...</Text>

            <TextInput
              multiline
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
      </KeyboardAvoidingView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createdEntry: (userId, journal) => dispatch(createdEntry(userId, journal))
})

export default connect( null, mapDispatchToProps)(JournalEntry)
