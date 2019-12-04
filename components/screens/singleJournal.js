import React from 'react';
import {View, Text,ImageBackground ,ScrollView} from 'react-native';
import styles from '../../assets/styles/singleJournalStyles'
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
          console.log('this Journal',thisJournal)
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/evergreens.jpg')}>
                  <ScrollView>
                  <View style={styles.container}>
                                {thisJournal &&
                                (<View style={styles.card}>
                                <View>
                                <Text style={styles.text}>
                                    Date: {thisJournal[0].date.slice(0,10)}
                                </Text>
                                <Text style={styles.text}> 
                                Entry: {thisJournal[0].entry}
                                </Text>
                                </View>
                                <View>
                                <Text style={styles.text}>
                                Your Favorite Moment: {thisJournal[0].favorite}</Text>
                                </View>
                                <View>
                                <Text style={styles.text}>Your Least Favorite Moment: {thisJournal[0].least}</Text>
                                </View>
                                </View>
                                )
                                }           

                  </View>
                  </ScrollView>
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
