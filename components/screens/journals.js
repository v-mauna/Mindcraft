import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../../assets/styles/journalStyles'

export default class Journals extends React.Component{
    static navigationOptions = { title : 'Journals',  headerStyle: {
        backgroundColor: '#72788d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}

      render(){
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/brain.jpg')}>
                  <View style={styles.container}>
                  <View style={styles.card}>
                      <TouchableOpacity style={styles.text} onPress={()=>this.props.navigation.navigate('DailyCheckIn')}>
                      <Text style={styles.text}> Complete Daily Check-In</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.text} onPress={()=>this.props.navigation.navigate('JournalEntry')}>
                      <Text style={styles.text}> Make a new entry</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.text} onPress={()=>this.props.navigation.navigate('JournalsList')}>
                      <Text style={styles.text}> View my Previous Entries</Text>
                      </TouchableOpacity>
                      </View>
                      </View>
              </ImageBackground>
              
          )
      }
}
