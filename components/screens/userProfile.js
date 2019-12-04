import React from 'react'
import { ImageBackground, KeyboardAvoidingView, Text } from 'react-native'
import styles from '../../assets/styles/userProfileStyle'
import {signup} from '../../redux/actions/authActions'
import {connect} from 'react-redux'
import { loadUser} from '../storage/userStorage'

class Profile extends React.Component {
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
        }
    }

    componentDidMount = async() => {
      let userInfo = await loadUser()
      let past = userInfo.createdAt.split('T')[0]
      let today = JSON.stringify(new Date()).split('T')[0]
      console.log("PAST", past, "TODAY", today)
      this.setState(userInfo)
    }

    isNull = (action) => {
      if (action === null) {
        return 0
      } else {
        return action
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
    user: state.authReducer
  })

  const mapDispatch = dispatch => ({
    signup: (email, password) => dispatch(signup(email, password))
  })

  export default connect(mapState, mapDispatch)(Profile)
