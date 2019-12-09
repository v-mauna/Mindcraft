import React, { Component } from 'react'
import {
  Button,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import styles from '../../assets/styles/kquiz'
import {
  gotOneQuiz,
  changeQuestion,
  incrementCorrectAnswers,
  answerCorrectly,
  tickAnswerSelected,
} from '../../redux/actions/quizActions'
import { connect } from 'react-redux'
import { loadUser } from '../storage/userStorage'

class QuizStats extends Component {
  checkPercentage(correct, total) {
    const percentage = (this.props.correctCount / this.props.questionsLength) * 100
    if (percentage > 90) {
      return (
        <Text style={styles.descriptionA}>
          Brilliant! You've answered {this.props.correctCount} out of{' '}
          {this.props.questionsLength} correctly!
        </Text>
      )
    } else if (percentage > 60) {
      return (
        <Text style={styles.descriptionA}>
          Good job. You've answered {this.props.correctCount} out of{' '}
          {this.props.questionsLength} correctly{' '}
        </Text>
      )
    } else {
      return (
        <Text style={styles.descriptionA}>
          Unfortunately, you answered {this.props.correctCount} out of{' '}
          {this.props.questionsLength} correctly and this quiz does not count
          toward your progress. Please try again soon!
        </Text>
      )
    }
  }

  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={require('../../assets//images/abstractBrain.jpg')}
      >
        <ScrollView>
          <View style={[styles.container, styles.results]}>
            {this.checkPercentage()}
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}
              >
                <View style={styles.description}>
                  <Text style={styles.text}> Go Home </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => {
  return {
    questionsLength: state.quizReducer.questionsLength,
    correctCount: state.quizReducer.correctCount,
  }
}

export default connect(mapStateToProps, null)(QuizStats)
