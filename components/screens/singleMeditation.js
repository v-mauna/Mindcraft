import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity} from 'react-native';
import styles from '../../assets/styles/meditationStyles'
import CircularProgressBar from './circularProgressBar'

export default class SingleMeditation extends React.Component{
    static navigationOptions = { title : 'Mindcraft',  headerStyle: {
        backgroundColor: '#72788d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}

      render(){
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/water.jpg')}>
                  <View style={styles.container}>
                      <Text style={styles.text}>Meditations</Text>
                      <CircularProgressBar   size={120}
                        width={15}
                        fill={100}
                        tintColor="#00e0ff"
                        duration={100000000}
                        backgroundColor="#3d5875"
                        padding={10}
                        renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="10" fill="gray" />}
                        />
               
                  </View>
              </ImageBackground>
              
          )
      }
}
