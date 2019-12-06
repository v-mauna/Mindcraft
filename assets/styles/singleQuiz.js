import {StyleSheet, Dimensions} from 'react-native';
import colors from './color';

const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      flex: 1,
      backgroundColor: colors.green01,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20
    },
    text:{
      color: colors.white,
      fontSize: 20,
      fontFamily: 'Avenir-Medium',
      fontWeight: '800',
      marginBottom: 15
    },
    response:{
      color:'black',
      fontSize: 20,
      fontFamily: 'Avenir-Medium',
      fontWeight: '800',
      marginBottom: 15
    },
    image: {
      width: '100%',
      height: '100%'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
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
    fontFamily: 'Avenir-Medium',
    color: colors.white,
    fontWeight: '800',
    marginBottom: 20,
    alignItems: "stretch",
    textAlign: 'center'
  }
 
  });

export default styles