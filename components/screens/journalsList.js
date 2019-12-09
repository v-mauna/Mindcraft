import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Separator,
} from 'react-native'
import styles from '../../assets/styles/journalsListStyles'
import { gotAllEntries } from '../../redux/actions/journalActions'
import { loadUser } from '../storage/userStorage'
import { connect } from 'react-redux'

class JournalsList extends React.Component {
  static navigationOptions = {
    title: 'Past Entries',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 28,
    },
  }
  constructor() {
    super()
  }
  async componentDidMount() {
    const user = await loadUser()
    console.log('user', user.id)
    await this.props.allEntries(user.id)
  }

  render() {
    const entries = this.props.journals
    console.log('entries', entries)
    return (
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/heads.jpg')}
      >
        <View style={styles.container}>
          <Text style={styles.description}>Choose an Entry </Text>
          {entries.map(entry => {
            return (
              <TouchableOpacity
                key={entry.id}
                style={styles.list}
                onPress={() =>
                  this.props.navigation.navigate('Journal', { entry })
                }
              >
                <View>
                  <Text style={styles.listText}>{entry.date.slice(0, 10)}</Text>
                  <Text style={styles.listText}>Mood: {entry.mood}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </ImageBackground>
    )
  }
}

mapStateToProps = state => {
  return {
    journals: state.journalsReducer.journals,
  }
}

mapDispatchToProps = dispatch => {
  return {
    allEntries: id => dispatch(gotAllEntries(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalsList)
