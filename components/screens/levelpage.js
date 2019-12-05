import React from 'react'
import { ImageBackground, KeyboardAvoidingView, Text } from 'react-native'
import styles from '../../assets/styles/userProfileStyle'
import { connect } from 'react-redux'
import { loadUser, saveUser } from '../storage/userStorage'
import { gotOneLevel, gotAllLevels } from '../../redux/actions/levelActions'
class LevelPage extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#72788d',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
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
    let nextLevel = this.checkLevel()
    let levels = await fetch(`https://mindcraft-api.herokuapp.com/api/levels/${nextLevel}`)
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

  // && (this.state.user.totalQuizzes >= this.state.levels.quizzes)

  updateLevel = async () => {
    while ((this.state.totalJournalEntries >= this.state.levels.entries) && (this.state.totalMeditations >= this.state.levels.meditations) && (this.state.user.totalQuizzes >= this.state.levels.quizzes)
    ) {
      console.log("HEY, YOU WIN!! ")
      let nextLevel = this.checkLevel()
      this.setState({userLevel: nextLevel})
     }
    }


  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/bamboo.jpg')}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <Text style={styles.header}>
            You are currently on Level {this.state.userLevel}
          </Text>
          <Text style={styles.header}>
            You have completed {this.isNull(this.state.totalJournalEntries)} out
            of {this.isNull(this.state.levels.entries)} journal entries
          </Text>
          <Text style={styles.header}>
            You have completed {this.isNull(this.state.totalMeditations)} out of{' '}
            {this.isNull(this.state.levels.meditations)} meditations
          </Text>
          <Text style={styles.header}>
            You have completed {this.isNull(this.state.totalQuizzes)} out of{' '}
            {this.isNull(this.state.levels.quizzes)} quizzes
          </Text>
        </KeyboardAvoidingView>
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
