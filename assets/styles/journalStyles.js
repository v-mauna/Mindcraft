import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      marginLeft: 20,
      marginTop: 10

    },
    text:{
      color:'black',
      fontSize: 20,
      opacity: 0.8,
      marginBottom: 10,
      fontFamily: 'Avenir-Medium',
      fontWeight: '800'
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
  }
 
  });

export default styles