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
  answerCorrectly,
  tickAnswerSelected
} from "../../redux/actions/quizActions";
import { connect } from "react-redux";
import { loadUser } from "../storage/userStorage";

class QuizStats extends Component {


render(){
  console.log('count:', this.props)
  // console.log('questionsLength:', this.props.quizInfo.questionsLength)
  return(
    <ImageBackground
    style={styles.image}
    source={require("../../assets//images/oceanReef.jpg")}
  >
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text>hello world</Text>
      </View>
        </ScrollView>
      </ImageBackground>
  )
}

}


// const mapStateToProps = state => {
//   return {
//     quizInfo: state.quizReducer,
//     correctCount: state.correctCount
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // getOneQuiz: id => dispatch(gotOneQuiz(id)),
//     // changeQuestion: question => dispatch(changeQuestion(question)),
//     // incrementCorrectAnswers: () => dispatch(incrementCorrectAnswers()),
//     // answerCorrectly: () => dispatch(answerCorrectly())
//   };
// };

export default connect(null, null)(QuizStats);
