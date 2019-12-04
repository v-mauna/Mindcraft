import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity} from 'react-native';
import styles from '../../assets/styles/meditationStyles'
import {gotOneEntry} from '../../redux/actions/journalActions'
import {loadUser} from '../storage/userStorage'
import {connect} from 'react-redux'

class SingleJournal extends React.Component{
    static navigationOptions = { title : 'Mindcraft',  headerStyle: {
        backgroundColor: '#72788d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}
      async componentDidMount(){
          const user = await loadUser()
          console.log('user',user)
          const userId = user.id
          const entry= this.props.navigation.getParam('entry')
          console.log('entry', entry)
          const entryId = entry.id
          await this.props.getEntry(userId, entryId)

      }

      render(){
          const thisJournal = this.props.singleJournal
          console.log('this Journal', thisJournal)
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/evergreens.jpg')}>
                  <View style={styles.container}>
                      <Text style={styles.text}>Single Journal Page</Text>
                      {/* {thisJournal.map(journal=>{
                          return(
                            <Text>Date
                            <Text>{journal.date.slice(0,10)}</Text>
                            <Text>Entry</Text>
                              <Text>{journal.entry}</Text>
                              <Text>Favorite Moment</Text>
                              <Text>{journal.favorite}</Text>
                              </Text>
                          )
                      })} */}
                    
                  </View>
              </ImageBackground>
              
          )
      }
}

mapStateToProps = state => {
    return {
        singleJournal: state.oneJournalReducer.journal
    }
}

mapDispatchToProps = dispatch => {
    return {
        getEntry: (userId, entryId) =>dispatch(gotOneEntry(userId,entryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleJournal)
