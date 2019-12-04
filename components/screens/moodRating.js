import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import CircularSlider from '../rn-circular-slider/CircularSlider'
import styles from '../../assets/styles/checkinStyles'
import NextArrowButton from '../buttons/nextArrowButton'
import SleepTracker from './sleepTracker'
import {withNavigation} from 'react-navigation';

console.disableYellowBox = true

class MoodTracker extends Component {
  
  static navigationOptions = { title : 'Mindcraft',  headerStyle: {
    backgroundColor: '#72788d',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },}
 
  constructor(props){
    super(props)
    this.state = {
      value: 50
    }
  }

  displayEmojii(value) {
    if (value > 80 ){
      return 'Great'
    }
    else if (value > 60 ){
      return 'Good'
    }
    else if (value > 40 ){
      return 'Okay'
    }
    else if (value > 20 ){
      return 'Bad'
    }
    else return 'Awful'
  }

  goToNext (){
    // alert("Go to Next")
    // this.props.navigation.navigate('SleepTracker')
    // console.log(this.state.value)

  }

  static navigationOptions = {
    title: 'Mood',
    headerStyle: {
      backgroundColor: '#72788d',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    const  value  = this.state.value
    return (
      <View style = {styles.wrapper}>
      <View style={styles.container}>
      <View >
        <Text style={styles.header}>How are you feeling today?</Text>
        <CircularSlider
          step={2}
          min={10}
          max={100}
          value={value}
          onChange={value => this.setState({ value })}
          contentContainerStyle={styles.contentContainerStyle}
          strokeWidth={10}
          buttonBorderColor="#3FE3EB"
          buttonFillColor="#fff"
          buttonStrokeWidth={10}
          openingRadian={Math.PI / 4}
          buttonRadius={10}
          linearGradient={[{ stop: '0%', color: '#FF003B' }, { stop: '100%', color: '#00FF47' }]}
        >
          <Text style={styles.moodValue}>{this.displayEmojii(value)}</Text>
        </CircularSlider>
        <TouchableOpacity style={styles.header} onPress={()=>this.props.navigation.navigate('SleepTracker', {moodRating: this.displayEmojii(value)})}><Text style={styles.header}>Submit</Text></TouchableOpacity>
        {/* <NextArrowButton style = {styles.nextButton} handlePress = {this.goToNext}/> */}
      </View>
      </View>
      </View>
    );
  }
}

export default withNavigation(MoodTracker)