import {StyleSheet} from 'react-native'
// import colors from './color'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bedtimeText: {
      color: '#ff9800',
      marginLeft: 3,
      fontSize: 16,
    },
    wakeText: {
      color: '#ffcf00',
      marginLeft: 3,
      fontSize: 16,
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    time: {
      alignItems: 'center',
      flex: 1,
    },
    timeHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    timeValue: {
      color: 'white',
      fontSize: 35,
      fontWeight: "300",
    },
    sleepTimeContainer: {
      flex: 1,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    header: {
      fontSize: 28,
      color: colors.white,
      fontWeight: "300",
      marginBottom: 40,
      textAlign: 'center'
    },
    nextButton: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 36
    }
  });

  export default styles