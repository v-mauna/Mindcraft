import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#D6D1B1'

    },
    text:{
      color:'white',
      fontSize: 20,
      marginBottom: 10,
      fontFamily: 'Avenir-Medium',
      fontWeight: '900'
    },
    image: {
      width: '100%',
      height: '100%'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 180,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 2,
    opacity: 0.8
  },
  header: {
    fontSize: 20,
    color:'white',
    fontWeight: '800',
    marginBottom: 10,
    fontFamily: 'Avenir-Medium',
    alignItems: "stretch",
    marginLeft: 10,
    marginTop: 15,
  },
  card: {
    width: 300,
    maxWidth: '80%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: .25,
    backgroundColor: '#FE5F55',
    opacity: .5,
    padding: 20,
    borderRadius: 5,
    marginBottom: 30,
    marginTop: 200,
    marginLeft: 30,
    alignContent: 'center',
  }
 
  });

export default styles