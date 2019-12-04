import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Flatlist
} from "react-native";
import styles from "../../assets/styles/singleQuiz";
import {
  gotOneQuiz,
  changeQuestion,
  incrementCorrectAnswers,
  answerCorrectly
} from "../../redux/actions/quizActions";
import {updateUsersQuizzes} from "../../redux/actions/userActions";
import { connect } from "react-redux";
import { loadUser } from "../storage/userStorage";
import SingleQuestion from "./singlequestion"
import { FlatList } from "react-native-gesture-handler";
import QuizStats from './quizstats'

class Quiz extends Component {
  static navigationOptions = {
    title: "Mindcraft",
    headerStyle: {
      backgroundColor: "#72788d"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  constructor() {
    super();
    this.state = {
      user: {},
      quiz: {},
      questions: [],
      totalQuestionCount: 0,
      correctCount: 1,
      activeQuestionIndex: 0,
      answered: false,
      answerCorrect: false
    };

    this.nextQuestion = this.nextQuestion.bind(this);
  }


  //function to check the answer and render button next
  //if the answer is correct a- chnage state, show button
  //if not - display try again


  nextQuestion() {
    //change index to the following index:
    const nextIndex = state.activeQuestionIndex + 1;
    //assign nextQuestion
    const nextQuestion = this.questions[nextIndex];
    //change the state using redux:
    this.props.changeQuestion(nextQuestion);
  }

  async componentDidMount() {
    this.user = await loadUser();
    const userId = this.user.id;
    this.questions = await this.props.getOneQuiz(userId);
    this.setState({ questions: this.props.quizInfo.quiz["test-questions"] });
    const questionsLength = this.state.questions.length;
    this.setState({ totalQuestionCount: questionsLength });
    this.currentQuiz = this.props.quizInfo.quiz;
    this.currentIndex = this.state.activeQuestionIndex;
    this.question = this.state.questions[currentIndex];
  }

handlePress(){
  console.log('journal entries in handle press:', this.user.totalJournalEntries)

  let newNumQuizzes=this.user.totalQuizzes+1
  this.props.updateUsersQuizzes(this.user.id, newNumQuizzes)
  this.props.navigation.navigate("Home")
}


  render() {

    return (

      <ImageBackground
        style={styles.image}
        source={require("../../assets//images/oceanReef.jpg")}
      >
        <ScrollView style={styles.container}>
          <View style={styles.container}>


{this.state.questions.map((question, id)=> {
  return <SingleQuestion question={question} key ={id}/>
})}
<Button onPress={()=>this.handlePress()} title="submit"> </Button>
          </View>
        </ScrollView>
      </ImageBackground>
    );
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
    answerCorrectly: () => dispatch(answerCorrectly()),
    updateUsersQuizzes: (id, quizzes) => dispatch(updateUsersQuizzes(id, quizzes))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
