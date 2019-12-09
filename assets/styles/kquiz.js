import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
    fontFamily: 'Avenir-Medium',
    alignItems: 'stretch',
    textAlign: 'center',
    backgroundColor: 'black',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5
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
    marginTop: 30,
    fontSize: 22,
    fontFamily: 'Avenir-Medium',
    textAlign: 'center',
    color: 'white',
    width: '100%',
    fontWeight: '800',
    backgroundColor: 'black',
    padding: 10,
  },
  answer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '80%',
  },
  yesno: {
    margin: 20,
    justifyContent: 'space-between',
    backgroundColor: 'black',
    borderWidth: 1,
  },
  question: {
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
    fontFamily: 'Avenir-Medium',
    alignItems: 'stretch',
    textAlign: 'justify',
    backgroundColor: 'white',
    padding: 10,
  },
  questioncontainer: {
    width: '85%',
    backgroundColor: 'white',
    marginBottom: 60,
    borderWidth: 1,
    borderColor: 'black'
  },
  response: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Avenir-Medium',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'stretch',
    backgroundColor: 'white',
    textAlign: 'justify'

  },
  descriptionA: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Avenir-Medium',
    alignItems: 'stretch',
    textAlign: 'justify',
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 2,
    borderColor: 'black'
    },
    results: {
      marginTop: 60
    }
})

export default styles
