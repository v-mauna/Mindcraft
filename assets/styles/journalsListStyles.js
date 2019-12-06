import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent: 'center',
      marginTop: 30
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
    marginLeft: 20,
    marginRight: 20,
    fontFamily: "Avenir-Medium",
    color: "white",
    backgroundColor: "black",
    fontWeight: "800",
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  list: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: "Avenir-Medium",
    color: "white",
    backgroundColor: "red",
    opacity: .8,
    fontWeight: "800",
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  }
 
  });

export default styles