import {StyleSheet} from 'react-native'
import colors from './color'

const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      flex: 1,
      backgroundColor: colors.green01,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    header: {
      fontSize: 28,
      color: colors.white,
      fontWeight: "300",
      marginBottom: 40,
      textAlign: 'center'
    },
    nextButton: {
    alignItems: "flex-end",
    bottom: 50
    },

    contentContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    moodValue: {
      fontWeight: '500',
      fontSize: 32,
      color: '#3FE3EB'
    },
    nextButton: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginBottom: 36
  }
 
  });

export default styles