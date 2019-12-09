import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity} from 'react-native';
import styles from '../../assets/styles/checkinStyles'
import Bedtime from './bedtime'

export default class SleepTracker extends React.Component{
    static navigationOptions = {
        title: 'Sleep Tracker',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 28
        },
      }

      render(){
          return(
              <View style = {styles.wrapper}>
                  <View style={styles.container}>
                      <Bedtime />

                  </View>
              </View>
          )
      }
}
