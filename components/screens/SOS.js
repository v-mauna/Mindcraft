import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity} from 'react-native';
import styles from '../../assets/styles/helpStyles'

export default class SOS extends React.Component{
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
                      <Text style={styles.header}>US Hotlines:</Text>
                      <Text style = {styles.text}> National Suicide Prevention Lifeline: 800-273-8255</Text>
                      <Text style = {styles.text}> National Domestic Violence Hotline: 800-799-7233 </Text>
                      <Text style = {styles.text}> Trevor Project (LGBT Youth): 866-488-7386 OR {"\n"} Text START to 678678</Text>
                      <Text style = {styles.text}> Trans Lifeline: 877-565-8860</Text>
                      <Text style = {styles.text}> Crisis Text Line: Text HOME to 741741</Text>
                  </View>
              </ImageBackground>
              
          )
      }
}
