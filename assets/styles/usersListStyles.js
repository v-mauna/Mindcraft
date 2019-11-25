import {StyleSheet} from 'react-native'
import {sanFranciscoWeights} from 'react-native-typography'
import { systemWeights } from 'react-native-typography'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color:'black',
      fontSize: 20,
      opacity: 0.8,
      marginBottom: 20,
      textTransform: 'uppercase'
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
    textTransform: 'uppercase',
    color:'white',
    fontWeight: '800',
    opacity: .8,
    marginBottom: 15,
    alignItems: "stretch"
  }
 
  });

export default styles