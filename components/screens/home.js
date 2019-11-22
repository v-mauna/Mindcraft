import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity} from 'react-native';
import styles from '../../assets/styles/homeStyles'

export default class HomePage extends React.Component{
    static navigationOptions = { title : 'Mindcraft',  headerStyle: {
        backgroundColor: '#7a89c2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}

      render(){
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/aboveTheClouds.jpg')}>
                  <View style={styles.container}>
                      <Text style={styles.header}>Home Page</Text>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Journals')}>
                          <Text style={styles.header}>Journals</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Meditations')}>
                          <Text style={styles.header}>Meditations</Text>
                      </TouchableOpacity>
                  </View>
              </ImageBackground>
              
          )
      }
}
