import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";
import styles from "../../assets/styles/singleQuiz";
import {
  gotOneQuiz,
  changeQuestion,
  incrementCorrectAnswers,
  answerCorrectly
} from "../../redux/actions/quizActions";
import { connect } from "react-redux";
import { loadUser } from "../storage/userStorage";

class SingleQuestion extends Component {
constructor(){
  super()
  this.state={
    correctCount: 5
  }
}
  checkAnswer(userAnswer, testAnswer) {

    if (userAnswer === testAnswer) {
      this.props.incrementCorrectAnswers();
      this.props.answerCorrectly();

  }
}



  render(){
    console.log('########## correct count single question', this.props.quizInfo.correctCount)
    //
    // console.log("question in singlequestion",this.props.question)
    return(
      // <ScrollView style={styles.container}>
          <View style={styles.container}>
    <Text style={styles.text}> {this.props.question.text}</Text>

      <TouchableOpacity
              onPress={() => this.checkAnswer("Yes", this.props.question.answer)}
            >
              <Text style={styles.text}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.checkAnswer("No", this.props.question.answer)}
            >
              <Text style={styles.text}> No</Text>
            </TouchableOpacity>
            </View>
            // </ ScrollView>

    )

}
}
const mapStateToProps = state => {
  return {
    quizInfo: state.quizReducer,
    correctCount: state.correctCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOneQuiz: id => dispatch(gotOneQuiz(id)),
    changeQuestion: question => dispatch(changeQuestion(question)),
    incrementCorrectAnswers: () => dispatch(incrementCorrectAnswers()),
    answerCorrectly: () => dispatch(answerCorrectly())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestion);
