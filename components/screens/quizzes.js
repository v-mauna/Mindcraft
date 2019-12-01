import React,{Component} from 'react';
import { 
  TouchableOpacity,
  Text,
  View,
  ScrollView
} from 'react-native';
import styles from '../../assets/styles/usersListStyles'
import {gotAllQuizzes} from '../redux/actions/quizActions'
import  {connect} from 'react-redux'

class Quizzes extends Component{
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
            <ScrollView>
            <View style={styles.container}>
                <Text> Quizzes</Text>
                {quizzesList.map(quiz=>(
                    <TouchableOpacity key={quiz.id} quiz={quiz} onPress={()=>{this.props.navigation.navigate('Quiz',{quiz})}}>
                    <View key={quiz.id}>
                    <Text>{quiz.name}</Text>
                    </View>
                    </TouchableOpacity>
                ))}
            </View>
            </ScrollView>
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