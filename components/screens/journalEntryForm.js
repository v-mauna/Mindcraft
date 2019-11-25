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

export default class JournalEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = { mood: '' }
    this.handleMoodChange = this.handleMoodChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const initialState = await loadSettings()
    this.setState(initialState)
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

  handleMoodChange(mood) {
    this.setState({ mood })
  }

  handleSubmit() {
    saveSettings(this.state)
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
              value={this.state.mood}
              onChangeText={this.handleMoodChange}
            />
          <Text style={styles.text}>What was your least favorite?</Text>
          <TextInput
              style={styles.textInput}
              placeholder='Least Favorite'
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.mood}
              onChangeText={this.handleMoodChange}
            />
            <Text style={styles.text}>Did you get enough sleep last night?</Text>
          <TextInput
              style={styles.textInput}
              placeholder='Hours Slept'
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.mood}
              onChangeText={this.handleMoodChange}
            />
          <View style={styles.inputContainer}>
          <Text style={styles.text}>Share away...</Text>

            <TextInput
              style={styles.textInput2}
              placeholder="Whatever you want"
              onBlur={Keyboard.dismiss}
              value={this.state.mood}
              onChangeText={this.handleMoodChange}
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
