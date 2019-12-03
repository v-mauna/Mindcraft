import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native'
import styles from '../../assets/styles/singleQuiz'
import {gotOneQuiz} from '../../redux/actions/quizActions'
import {connect} from 'react-redux'
import {loadUser} from '../storage/userStorage'

 class Quiz extends Component {
    static navigationOptions = { title : 'Mindcraft',  headerStyle: {
        backgroundColor: '#72788d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}
    constructor(){
        super()
        this.state={
                user: {},
                quiz: {},
                correctCount: 0,
                activeQuestionIndex: 0,
                answered: false,
                answerCorrect: false

        }
    }
    answer(correct){
        this.setState(
          state => {
            const nextState = { answered: true };

            if (correct) {
              nextState.correctCount = state.correctCount + 1;
              nextState.answerCorrect = true;
            } else {
              nextState.answerCorrect = false;
            }

            return nextState;
          },
          () => {
            setTimeout(() => this.nextQuestion(), 750);
          }
        );
      };

    async componentDidMount(){
      this.user = await loadUser()
      console.log('thisUser', this.user)
      const userId = this.user.id
      console.log('userId', userId)
      const currentQuiz = this.props.getOneQuiz(userId)
      this.setState({quiz: currentQuiz})
    }

    render(){
      console.log('State User', this.state.user)
      const curQuiz = this.props.quizInfo
      console.log('current quiz from props', curQuiz)
        return(
            <ImageBackground style={styles.image} source={require('../../assets//images/oceanReef.jpg')}>
            <ScrollView>
            <View style={styles.container}>
                {/* <Text style={styles.text}> {th.name}</Text> */}
                {/* <Text>{thisQuiz.questions.map((question,id)=>{
                        return(
                            <Text key={id} style={styles.text}>{question.text}</Text>
                    )
                })}</Text> */}


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
  return{
      getOneQuiz: (id) => dispatch(gotOneQuiz(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz)
