import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from '../../assets/styles/homeStyles'

class HomePage extends React.Component{
    static navigationOptions = ({navigation}) => {
    return {
        title : 'Mindcraft',
        headerStyle: {
        backgroundColor: '#72788d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => (
        <TouchableOpacity
        onPress={() => navigation.navigate('SOS')}>
          <Text style= {styles.SOS}>SOS</Text>
        </TouchableOpacity>
      ),
    }
}
      render(){
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/home.jpg')}>
                  <ScrollView>
                  <View style={styles.container}>
                      <Text style={styles.header}>Welcome</Text>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Meditations')}>
                          <Text style={styles.text}>Explore Meditations</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Journals')}>
                       <Text style={styles.text}>View My Journals</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Quiz')}>
                          <Text style={styles.text}>Take A Quiz</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                          <Text style={styles.text}>User Profile</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('DailyCheckIn')}>
                          <Text style={styles.text}>Daily Check-in</Text>
                      </TouchableOpacity>
                      </View>
                  </View>
                  </ScrollView>
              </ImageBackground>
          )
      }
}


export default withNavigation(HomePage)
