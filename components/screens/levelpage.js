import React from 'react'
import { ImageBackground, KeyboardAvoidingView, Text } from 'react-native'
import styles from '../../assets/styles/userProfileStyle'
import {connect} from 'react-redux'
import { loadUser} from '../storage/userStorage'
import {gotOneLevel, gotAllLevels} from '../../redux/actions/levelActions'
class LevelPage extends React.Component {
  static navigationOptions = { title : 'Profile',  headerStyle: {
    backgroundColor: '#72788d',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },}

    constructor(){
        super()
        this.state = {
          id: null,
          name: "",
          totalJournalEntries: 0,
          totalMeditations: 0,
          totalQuizzes: 0,
          userLevel: 0
        }
    }

    componentDidMount = async() => {
      let userInfo = await loadUser()
      // let past = new Date(userInfo.createdAt).toISOString().split('T')[0]
      // let today = new Date().toISOString().split('T')[0]
      this.setState(userInfo)
      console.log("STATE!!", await this.props.getAllLevels())
    }

    isNull = (action) => {
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

    render() {
      console.log(this.isNull(this.state.totalJournalEntries))
        return (
            <ImageBackground style={styles.image} source={require('../../assets/images/bamboo.jpg')}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <Text style={styles.header}>Welcome Back</Text>
            <Text style={styles.header}>You have completed {this.isNull(this.state.totalJournalEntries)} journal entries</Text>
            <Text style={styles.header}>You have completed {this.isNull(this.state.totalMeditations)} meditations</Text>
            <Text style={styles.header}>You have completed {this.isNull(this.state.totalQuizzes)} quizzes</Text>
            </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const mapState = state => ({
    levels: state.levelReducer
  })

  const mapDispatch = dispatch => ({
    getOneLevel: id => dispatch(gotOneLevel(id)),
    getAllLevels: () => dispatch(gotAllLevels())
  })

  export default connect(mapState, mapDispatch)(LevelPage)
