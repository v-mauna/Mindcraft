import React, { Component } from 'react'
import {
  Button,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Flatlist,
} from 'react-native'
import styles from '../../assets/styles/kquiz'
import {
  gotOneQuiz,
  changeQuestion,
  incrementCorrectAnswers,
  answerCorrectly,
  getQuestionsLength,
} from '../../redux/actions/quizActions'
import { updateUsersQuizzes } from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import { loadUser } from '../storage/userStorage'
import SingleQuestion from './singlequestion'
import { FlatList } from 'react-native-gesture-handler'
import QuizStats from './quizstats'

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 28,
    },
  }
  constructor() {
    super()
    this.state = {
      user: {},
      quiz: {},
      questions: [],
      totalQuestionCount: 0,
      correctCount: 1,
      activeQuestionIndex: 0,
      answered: false,
      answerCorrect: false,
    }

    this.nextQuestion = this.nextQuestion.bind(this)
  }

  //function to check the answer and render button next
  //if the answer is correct a- chnage state, show button
  //if not - display try again

  nextQuestion() {
    //change index to the following index:
    const nextIndex = state.activeQuestionIndex + 1
    //assign nextQuestion
    const nextQuestion = this.questions[nextIndex]
    //change the state using redux:
    this.props.changeQuestion(nextQuestion)
  }

  async componentDidMount() {
    this.user = await loadUser()
    const userId = this.user.id
    this.questions = await this.props.getOneQuiz(userId)
    this.setState({ questions: this.props.quizInfo.quiz['test-questions'] })
    const questionsLength = this.state.questions.length
    this.setState({ totalQuestionCount: questionsLength })
    this.currentQuiz = this.props.quizInfo.quiz
    this.currentIndex = this.state.activeQuestionIndex
    this.question = this.state.questions[currentIndex]
  }

  handlePress() {
    if (this.user) {
      let newNumQuizzes = this.user.totalQuizzes + 1
      this.props.updateUsersQuizzes(this.user.id, newNumQuizzes)
      this.props.getQuestionsLength(this.state.questions.length)
      this.props.navigation.navigate('QuizStats')
    }
  }

  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/abstractBrain.jpg')}
      >
        <View style={styles.wrapper}>
          <ScrollView ref={ref => (this.scrollView = ref)}>
            <View style={styles.container}>
              <Text style={styles.description}>Instructions</Text>
              <View style={styles.container}>
                <Text style={styles.descriptionA}>
                  {' '}
                  {this.props.quizInfo.quiz.description}
                </Text>
              </View>

              {this.state.questions.map((question, id) => {
                return (
                  <View style={styles.questioncontainer} key={id}>
                    <SingleQuestion question={question} />
                  </View>
                )
              })}

              <TouchableOpacity
                style={styles.description}
                onPress={() => this.handlePress()}
              >
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => {
  return {
    quizInfo: state.quizReducer,
    correctCount: state.correctCount,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOneQuiz: id => dispatch(gotOneQuiz(id)),
    changeQuestion: question => dispatch(changeQuestion(question)),
    incrementCorrectAnswers: () => dispatch(incrementCorrectAnswers()),
    answerCorrectly: () => dispatch(answerCorrectly()),
    updateUsersQuizzes: (id, quizzes) =>
      dispatch(updateUsersQuizzes(id, quizzes)),
    getQuestionsLength: length => dispatch(getQuestionsLength(length)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
