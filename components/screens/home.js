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
                      <Text style={styles.header}>Welcome</Text>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Journals')}>
                       <Text style={styles.text}>Journals</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Meditations')}>
                          <Text style={styles.text}>Meditations</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('JournalEntry')}>
                          <Text style={styles.header}>Journal Entry</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('UsersList')}>
                          <Text style={styles.text}>Users List</Text>
                      </TouchableOpacity>
                      </View>
                  </View>
            
              </ImageBackground>

          )
      }
}
