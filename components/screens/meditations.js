import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity} from 'react-native';
import styles from '../../assets/styles/meditationStyles'
import CircularProgressBar from './circularProgressBar'

export default class Meditations extends React.Component{
    static navigationOptions = { title : 'Mindcraft',  headerStyle: {
        backgroundColor: '#72788d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}

      render(){
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/candles.jpg')}>
                  <View style={styles.container}>
                      <Text style={styles.text}>Meditations</Text>
                      <TouchableOpacity style={styles.text} onPress={()=>this.props.navigation.navigate('SingleMeditation')}>
                          <Text style={styles.text}> Meditation One</Text>
                      </TouchableOpacity>
               
                  </View>
              </ImageBackground>
              
          )
      }
}
