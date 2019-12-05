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


  checkPercentage(correct, total){
    const percentage=correct/total*100
    if(percentage>90){
      return <Text>Brilliant! You've answered {this.props.correctCount} out of {this.props.questionsLength} correctly </Text>
    }
    else if(percentage>50){
      return <Text>Good job. You've answered {this.props.correctCount} out of {this.props.questionsLength} correctly </Text>
    }
    else{
      return <Text>You've answered {this.props.correctCount} out of {this.props.questionsLength} correctly </Text>
    }
  }




render(){

  return(
    <ImageBackground
    style={styles.image}
    source={require("../../assets//images/oceanReef.jpg")}
  >
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {this.checkPercentage()}
        <View style={{flex: 1, alignItems: "center"}}><TouchableOpacity
      onPress={() => this.props.navigation.navigate("Home")}
    >
      <Text> Home </Text>
    </TouchableOpacity></View>
      </View>

        </ScrollView>
      </ImageBackground>
  )
}

}


const mapStateToProps = state => {

  return {
    questionsLength: state.quizReducer.questionsLength,
    correctCount: state.quizReducer.correctCount
  };
};



export default connect(mapStateToProps, null)(QuizStats);
