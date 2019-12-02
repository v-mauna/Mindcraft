import React,{Component} from 'react';
import { 
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  ImageBackground
} from 'react-native';
import styles from '../../assets/styles/quizzesStyles'
import {gotAllQuizzes} from '../../redux/actions/quizActions'
import  {connect} from 'react-redux'

class Quizzes extends Component{
    static navigationOptions = { title: 'Mindcraft',headerStyle: {
        backgroundColor: '#72788d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}
    constructor(){
        super()
    }

    async componentDidMount(){
      await this.props.getQuizzes()
    }

    render(){
        let quizzesList = this.props.quizList
        console.log('data',quizzesList)
        return(
            <ImageBackground style={styles.image} source={require('../../assets/images/red.jpg')}>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}> Quizzes</Text>
                {quizzesList.map(quiz=>(
                    <TouchableOpacity key={quiz.id} quiz={quiz} onPress={()=>{this.props.navigation.navigate('Quiz',{quiz})}}>
                    <View key={quiz.id}>
                    <Text style={styles.text}>{quiz.name}</Text>
                    </View>
                    </TouchableOpacity>
                ))}
            </View>
            </ScrollView>
            </ImageBackground>
        )
        
    }
}

const mapStateToProps = state => {
    return {
       quizList: state.quizzesReducer.quizzes
}
}

const mapDispatchToProps = dispatch =>{
    return{
        getQuizzes: () =>dispatch(gotAllQuizzes())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Quizzes)