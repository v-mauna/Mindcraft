import {StyleSheet} from 'react-native'
import colors from './color'

const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center'
    },
    scrollViewWrapper: {
      marginTop: 70,
      flex: 1,
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
        fontFamily: 'Avenir-Medium',
        fontWeight: '600',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 20
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
      fontSize: 25,
      color: 'white',
      marginBottom: 40,
      textAlign: 'center',
      fontFamily: 'Avenir-Medium',
      fontWeight: '800',
      alignContent: 'center',
      justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 10,
        paddingVertical: 5,
        alignItems: 'center',
        borderColor: 'white',
        justifyContent: 'center',
        alignSelf:'center',
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        fontFamily: 'Avenir-Medium',
        fontWeight: '800',
        color: 'white'

    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Avenir-Medium',
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonSignup: {
        fontSize: 12,
        fontFamily: 'Avenir-Medium',
        alignContent: 'center',
        justifyContent: 'center'
    },
    nextButtonWrapper: {
        alignItems: "flex-end",
        right: 20,
        bottom: 50
    }
  });

  export default styles