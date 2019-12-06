import React from 'react'
import {
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'
import styles from '../../assets/styles/levelStyles'
import { connect } from 'react-redux'
import { loadUser, saveUser } from '../storage/userStorage'
import { gotOneLevel, gotAllLevels } from '../../redux/actions/levelActions'

class LevelPage extends React.Component {
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

  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 28,
    },
  }

  componentDidMount = async () => {
    let userInfo = await loadUser()
    this.setState(userInfo)
    let nextLevel = this.checkLevel()
    let levels = await fetch(
      `https://mindcraft-api.herokuapp.com/api/levels/${nextLevel}`
    )
    levels = await levels.json()
    this.setState({ levels: levels })
    console.log(this.state)
    this.updateLevel()
  }

  isNull = action => {
    if (action === null) {
      return 0
    } else {
      return action
    }
  }

  checkLevel() {
    if (this.state.userLevel === null) {
      return 1
    } else {
      return this.state.userLevel + 1
    }
  }

  updateLevel = async () => {
    if (
      this.state.totalJournalEntries >= this.state.levels.entries &&
      this.state.totalMeditations >= this.state.levels.meditations &&
      this.state.totalQuizzes >= this.state.levels.quizzes
    ) {
      console.log('HEY, YOU WIN!! ')
      let nextLevel = this.checkLevel()
      this.setState({ userLevel: nextLevel })
      await saveUser(this.state)
      let userInfo = await loadUser()
      this.setState(userInfo)
    }
  }

  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/brain2.png')}
      >
        <ScrollView ref={ref => (this.scrollView = ref)}>
          <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            enabled
          >
            <Text style={styles.level}>LEVEL {this.state.userLevel}</Text>
            <Text style={styles.header}>
              You've completed {this.isNull(this.state.totalJournalEntries)} out
              of {this.isNull(this.state.levels.entries)} daily check-ins.
            </Text>
            <View style={styles.journals}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('MoodRating')}
              >
                <Text style={styles.text}>Check-In Now?</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.header}>
              You've completed {this.isNull(this.state.totalMeditations)} out of{' '}
              {this.isNull(this.state.levels.meditations)} meditations
            </Text>
            <View style={styles.journals}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Meditations')}
              >
                <Text style={styles.text}>Explore Meditations</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.header}>
              You've completed {this.isNull(this.state.totalQuizzes)} out of{' '}
              {this.isNull(this.state.levels.quizzes)} quizzes
            </Text>
            <View style={styles.journals}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Quiz')}
              >
                <Text style={styles.text}>Take A Quiz</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    )
  }
}

const mapState = state => ({
  levels: state.levelReducer,
})

const mapDispatch = dispatch => ({
  getOneLevel: id => dispatch(gotOneLevel(id)),
  getAllLevels: () => dispatch(gotAllLevels()),
})

export default connect(mapState, mapDispatch)(LevelPage)
