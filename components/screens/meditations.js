import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity} from 'react-native';
import styles from '../../assets/styles/meditationStyles'

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
              <ImageBackground style={styles.image} source={require('../../assets/images/br2.jpeg')}>
                  <View style={styles.container}>
                      <Text style={styles.header}>What would you like to do today?</Text>
                      <View>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('SingleMeditation')}>
                          <Text style={styles.header}> Just breathe and relax</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.header} onPress={()=>this.props.navigation.navigate('SingleMeditation')}>
                          <Text style={styles.header}>Relieve stress and anxiety</Text>
                      </TouchableOpacity>
                      </View>
                  </View>
              </ImageBackground>
              
          )
      }
}
