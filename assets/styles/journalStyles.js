import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center'
    },
    text:{
      color:'white',
      fontSize: 20,
      fontFamily: 'Avenir-Medium',
      fontWeight: '900',
      justifyContent: 'center',
      alignContent: 'center'
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
  },
  header: {
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "white",
    fontWeight: "800",
    marginBottom: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center",
  },
  card: {
    width: 300,
    maxWidth: '80%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: .25,
    backgroundColor: '#FE5F55',
    opacity: .8,
    padding: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 30,
    alignItems: 'center'
  }
 
  });

export default styles