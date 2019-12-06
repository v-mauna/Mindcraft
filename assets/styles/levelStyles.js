import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
    fontFamily: 'Avenir-Medium',
    opacity: 0.8,
    margin: 20,
    alignItems: 'stretch',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    fontFamily: 'Avenir-Medium',
    color: 'white',
    fontWeight: '800',
    alignItems: 'stretch',
    backgroundColor: 'black',
    width: '85%',
  },
  journals: {
    width: '85%',
    alignItems: 'stretch',
    backgroundColor: 'white',
    marginBottom: 30,
    borderWidth: 2
  },
  level: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
    width: '100%',
    backgroundColor: 'black',
    paddingTop: 30,
    paddingBottom: 30,
    margin: 10,
  },
})

export default styles
