import React from 'react'
import {
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native'
import styles from '../../assets/styles/mapStyles'
import { loadUser, saveUser } from '../storage/userStorage'

class Map extends React.Component {
  static navigationOptions = {
    title: 'Mindcraft',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 28
    },
  }

  constructor() {
    super()
    this.state = {
      id: null,
      name: '',
      totalJournalEntries: 0,
      totalMeditations: 0,
      totalQuizzes: 0,
      userLevel: 0,
      levels: {},
    }
  }

  componentDidMount = async () => {
    let userInfo = await loadUser()
    this.setState(userInfo)
  }

  isNull = action => {
    if (action === null) {
      return 0
    } else {
      return action
    }
  }

  handleOnPress(num) {
    if (this.state.userLevel === num) {
      loadUser()
      this.props.navigation.navigate('Profile')
    } else {
      loadUser()
      return
    }
  }

  styleMaybe(num, place) {
    if(this.state.userLevel === num) {
      return [styles.circle, place, styles.active]
    } else if (this.state.userLevel > num){
      return [styles.circle, place, styles.finished]
    } else {
      return [styles.circle, place, styles.inactive]
    }
  }

  render() {
    return (
      <ImageBackground style={styles.image} source={require('../../assets/images/artbrain.jpg')}>
      <ScrollView
      ref={ref => (this.scrollView = ref)}
      onContentSizeChange={(contentWidth, contentHeight) => {
        this.scrollView.scrollToEnd({ animated: true })
      }}
    >
      <View style={styles.wrapper}>

        <TouchableHighlight
          style={this.styleMaybe(8, styles.right)}
          underlayColor="#C8F7F6"
          onPress={() => this.handleOnPress(8)}
        >
          <Text style={styles.levels}>8</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.styleMaybe(7, styles.left)}
          underlayColor="#C8F7F6"
          onPress={() => this.handleOnPress(7)}
        >
          <Text style={styles.levels}>7</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.styleMaybe(6, styles.right)}
          underlayColor="#C8F7F6"
          onPress={() => this.handleOnPress(6)}
        >
          <Text style={styles.levels}>6</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.styleMaybe(5, styles.left)}
          underlayColor="#C8F7F6"
          onPress={() => this.handleOnPress(5)}
        >
          <Text style={styles.levels}>5</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.styleMaybe(4, styles.right)}
          underlayColor="#C8F7F6"
          onPress={() => this.handleOnPress(4)}
        >
          <Text style={styles.levels}>4</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.styleMaybe(3, styles.left)}
          underlayColor="#C8F7F6"
          onPress={() => this.handleOnPress(3)}
        >
          <Text style={styles.levels}>3</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.styleMaybe(2, styles.right)}
          underlayColor="#C8F7F6"
          onPress={() => this.handleOnPress(2)}
        >
          <Text style={styles.levels}>2</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.styleMaybe(1, styles.left)}
          underlayColor="#C8F7F6"
          onPress={() => this.handleOnPress(1)}
        >
          <Text style={styles.levels}>1</Text>
        </TouchableHighlight>


      </View>
      </ScrollView>
      </ImageBackground>
    )
  }
}
export default Map
