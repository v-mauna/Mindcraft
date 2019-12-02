import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity} from 'react-native';
import styles from '../../assets/styles/meditationStyles'
import CircularProgressBar from './circularProgressBar'

export default class SingleJournal extends React.Component{
    static navigationOptions = { title : 'Mindcraft',  headerStyle: {
        backgroundColor: '#72788d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}

      render(){
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/evergreens.jpg')}>
                  <View style={styles.container}>
                      <Text style={styles.text}>Single Journal Page</Text>
                  </View>
              </ImageBackground>
              
          )
      }
}
