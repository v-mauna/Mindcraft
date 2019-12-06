import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity,Separator} from 'react-native';
import styles from '../../assets/styles/journalsListStyles'
import {gotAllEntries} from '../../redux/actions/journalActions'
import {loadUser} from '../storage/userStorage'
import {connect} from 'react-redux'

class JournalsList extends React.Component{
    static navigationOptions = { title : 'Journal Entries',  headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}
      constructor(){
          super()
      }
      async componentDidMount(){
          const user = await loadUser()
          console.log('user',user.id)
          await this.props.allEntries(user.id)

      }

      render(){
          const entries = this.props.journals
          console.log('entries', entries)
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/heads.jpg')}>
                  <View style={styles.container}>
                      <Text style={styles.list}>Choose an Entry </Text>
                      <Text  style={styles.list}>Date:</Text>
                      {entries.map(entry=>{
                          return(
                              <TouchableOpacity key={entry.id} onPress={()=>this.props.navigation.navigate('Journal',{entry})}>
                              <View>
                            <Text  style={styles.list}>{entry.date.slice(0,10)}</Text>
                            </View>
                              </TouchableOpacity>
                          )
                      })}
               
                  </View>
              </ImageBackground>
              
          )
      }
}

mapStateToProps = state =>{
    return{
        journals: state.journalsReducer.journals
    }
}


mapDispatchToProps = dispatch => {
    return {
        allEntries: (id) => dispatch(gotAllEntries(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(JournalsList)