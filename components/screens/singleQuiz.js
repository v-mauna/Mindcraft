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
        const {navigation} = this.props
        const selectedQuiz = navigation.getParam('quiz')
        await this.props.getOneQuiz(selectedQuiz.id)
    }

    render(){
        const {navigation} = this.props
        const thisQuiz = navigation.getParam('quiz')
        return(
            <ImageBackground style={styles.image} source={require('../../assets//images/oceanReef.jpg')}>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}> {thisQuiz.name}</Text>
                <Text>{thisQuiz.questions.map((question,id)=>{
                        return(
                            <Text key={id} style={styles.text}>{question.text}</Text>
                    )
                })}</Text>


            </View>
            </ScrollView>
            </ImageBackground>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return{
      getOneQuiz: (id) => dispatch(gotOneQuiz(id))
    }
}

export default connect(null,mapDispatchToProps)(Quiz)
