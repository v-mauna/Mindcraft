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
    title: 'Mindcraft',
    headerStyle: {
      backgroundColor: '#72788d',
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
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/tiles.jpg')}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Hi, How Are You?</Text>
        </View>
        <ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Your Feelings"
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.mood}
              onChangeText={this.handleMoodChange}
            />
          </View>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={this.handleSubmit}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}
