import {StyleSheet} from 'react-native'
import colors from './color'

const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      flex: 1,
    },
    scrollViewWrapper: {
      marginTop: 70,
      flex: 1
    },
    avoidView: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 20,
      flex:1
     },
     inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        color: colors.white,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '100%'
    },
     welcomeWrapper: {
        flex: 1,
        display: "flex",
        marginTop: 30,
        padding: 20
      },
    loginHeader: {
      fontSize: 28,
      color: colors.white,
      fontWeight: "300",
      marginBottom: 40,
      textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    },
    nextButtonWrapper: {
        alignItems: "flex-end",
        right: 20,
        bottom: 50
    }
  });

  export default styles