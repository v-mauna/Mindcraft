import React from 'react';
import {View, Text, Header } from 'react-native';
import styles from '../../assets/styles/checkinStyles';
import CircleSlider from '../CircleSlider'
import CircularSlider from '../rn-circular-slider/CircularSlider'
import NextArrowButton from '../buttons/nextArrowButton'


export default class MoodMeter extends React.Component{
    static navigationOptions = { title : 'Mindcraft',  headerStyle: {
        backgroundColor: '#72788d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}

      state = {
        value: 0
      }

      goToNext= ()=> {
        
        alert(this.state.value)
      }

      render(){
          return(
              <View style = {styles.wrapper}>
                  <View style={styles.container}>
                      <Text style = {styles.header}> How are you feeling today? </Text>
                  <CircleSlider 
                    value={25}
                    btnRadius={50}
                    dialRadius ={150}
                    dialWidth={10}
                    textSize={20}
                    onValueChange={(value) => {
                           if (value <72) return "great"
                           else if (value <144) return "good"
                           else if (value < 216) return "okay"
                           else if (value < 288) return "bad"
                           else return "awful"
                          }
                    }
		            />
                    <NextArrowButton style = {styles.nextButton} handlePress = {this.goToNext}/>
                  </View>
              </View>
          )
      }
}
