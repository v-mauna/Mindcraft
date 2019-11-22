import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity} from 'react-native';
import styles from '../../assets/styles/journalStyles'

export default class Journals extends React.Component{
    static navigationOptions = { title : 'Mindcraft',  headerStyle: {
        backgroundColor: '#72788d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}

      render(){
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/tiles.jpg')}>
                  <View style={styles.container}>
                      <Text style={styles.header}>Journals</Text>
                  </View>
              </ImageBackground>
              
          )
      }
}
