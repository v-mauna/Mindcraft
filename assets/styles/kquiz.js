import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
    fontFamily: 'Avenir-Medium',
    margin: 20,
    alignItems: 'stretch',
    textAlign: 'center',
    backgroundColor: 'black'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Avenir-Medium',
    color: 'black',
    fontWeight: '800',
    alignItems: 'stretch',
    backgroundColor: 'white',
    width: '85%',
  },
  journals: {
    width: '85%',
    alignItems: 'stretch',
    backgroundColor: 'black',
    marginBottom: 30,
    borderWidth: 2
  },
  description: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    width: '100%',
    backgroundColor: 'black',
    padding: 20,
    marginBottom: 30,
  },
  answer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '80%'
  },
  yesno: {
    flex: 1,
    margin: 20,
    justifyContent: 'space-between',
    borderWidth: 2,
    backgroundColor: 'black'
  },
  question: {
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
    fontFamily: 'Avenir-Medium',
    alignItems: 'stretch',
    textAlign: 'justify',
    backgroundColor: 'white',
    padding: 10
  },
  questioncontainer: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 40
  },
  response: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Avenir-Medium',
    margin: 20,
    alignItems: 'stretch',
    textAlign: 'center',
    backgroundColor: 'white'
  },
})

export default styles
