import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity} from 'react-native';
import styles from '../../assets/styles/meditationStyles'

export default class JournalsList extends React.Component{
    static navigationOptions = { title : 'Journal Entries',  headerStyle: {
        backgroundColor: '#72788d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}

      render(){
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/tea.jpg')}>
                  <View style={styles.container}>
                      <Text style={styles.header}>Journal Entries</Text>
               
                  </View>
              </ImageBackground>
              
          )
      }
}


