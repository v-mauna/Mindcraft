import React from 'react'
import { View, Text, ImageBackground, ScrollView } from 'react-native'
import styles from '../../assets/styles/singleJournalStyles'
import { gotOneEntry } from '../../redux/actions/journalActions'
import { loadUser } from '../storage/userStorage'
import { connect } from 'react-redux'

class SingleJournal extends React.Component {
  static navigationOptions = {
    title: 'Mindcraft',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 28,
    },
  }
  async componentDidMount() {
    const user = await loadUser()
    console.log('user', user)
    const userId = user.id
    const entry = this.props.navigation.getParam('entry')
    console.log('entry', entry)
    const entryId = entry.id
    await this.props.getEntry(userId, entryId)
  }

  render() {
    const thisJournal = this.props.singleJournal
    console.log('this Journal', thisJournal)
    return (
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/brain10.jpg')}
      >
        <ScrollView>
          <View style={styles.container}>
            {thisJournal && (
              <View style={styles.card}>
                <View>
                  <Text style={styles.text}>Date:</Text>
                  <Text style={styles.text2}>
                    {' '}
                    {thisJournal[0].date.slice(0, 10)}
                  </Text>
                  <Text style={styles.text}>
                    Entry:
                  </Text>
                  <Text style={styles.text2}>{thisJournal[0].entry}</Text>
                </View>
                <View>
                  <Text style={styles.text}>
                    Favorite Moment:
                  </Text>
                  <Text style={styles.text2}>{thisJournal[0].favorite}</Text>
                </View>
                <View>
                  <Text style={styles.text}>
                    Least Favorite Moment:
                  </Text>
                  <Text style={styles.text2}>{thisJournal[0].least}</Text>
                </View>
                <View>
                  <Text style={styles.text}>Mood: </Text>
                </View>
                <Text style={styles.text2}>{thisJournal[0].mood}</Text>

                <View>
                  <Text style={styles.text}>
                    Sleep:
                  </Text>
                  <Text style={styles.text2}>{thisJournal[0].hoursSlept} hours</Text>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

mapStateToProps = state => {
  return {
    singleJournal: state.oneJournalReducer.journal,
  }
}

mapDispatchToProps = dispatch => {
  return {
    getEntry: (userId, entryId) => dispatch(gotOneEntry(userId, entryId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleJournal)
