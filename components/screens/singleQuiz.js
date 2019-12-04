import React, { Component } from 'react'
import {
  Button,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import styles from '../../assets/styles/singleQuiz'
import { gotOneQuiz } from '../../redux/actions/quizActions'
import { connect } from 'react-redux'
import { loadUser } from '../storage/userStorage'
import { throws } from 'assert'

class Quiz extends Component {
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
  constructor() {
    super()
    this.state = {
      user: {},
      quiz: {},
      questions: [],
      totalQuestionCount: 0,
      correctCount: 0,
      currentQuestion: {},
      activeQuestionIndex: 0,
      answered: false,
      answerCorrect: false,
    }
    this.answer = this.answer.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.initialState = this.initialState.bind(this)
  }

  answer(userAnswer, testAnswer) {
    this.setState(
      state => {
        const nextState = { answered: true }
        if(userAnswer === testAnswer){
          nextState.correctCount = state.correctCount + 1
          nextState.answerCorrect = true
        } else {
          nextState.answerCorrect = false
        }
        return nextState
      }
    )
  }

  nextQuestion(){
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;
       const current = state.questions[nextIndex]
      if (nextIndex >= state.totalQuestionCount) {
        this.props.navigation.popToTop();
      }
      return {
        currentQuestion: current,
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  }

  async componentDidMount() {
    await this.initialState()
  }

  async initialState() {
    this.user = await loadUser()
    const userId = this.user.id
    await this.props.getOneQuiz(userId)
    this.setState({currentQuestion: this.props.quizInfo.quiz['test-questions'][0]})
    this.setState({questions: this.props.quizInfo.quiz['test-questions']} )
    const questionsLength = this.state.questions.length
    this.setState({totalQuestionCount: questionsLength})
  }

  render() {
    const currentQuiz = this.props.quizInfo.quiz
    // const currentIndex = this.state.activeQuestionIndex
    // console.log('QUESTIONS', this.SOMETHING)
    // console.log('currentIdx', currentIndex)
    // const questions = this.props.quizInfo.quiz['test-questions'];
    // const question = questions[this.state.activeQuestionIndex];
    console.log("QUESTIONS", this.state.currentQuestion)

    return (
      <ImageBackground
        style={styles.image}
        source={require('../../assets//images/oceanReef.jpg')}>
        <ScrollView style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.text}> {currentQuiz.description}</Text>
                  {/* <Text style={styles.text}>
                    {}
                    </Text>
                  <TouchableOpacity onPress={()=>this.answer('Yes', question.answer)}>
                    <Text style={styles.text}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.answer('No', question.answer)}>
                  <Text style={styles.text}> No</Text>
                  </TouchableOpacity> */}
            </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => {
  return {
    quizInfo: state.quizReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOneQuiz: id => dispatch(gotOneQuiz(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
