import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20
    },
    text:{
    fontSize: 20,
    textTransform: 'capitalize',
    color:'black',
    fontWeight: '800',
    fontFamily: 'Avenir-Medium',
    opacity: .8,
    marginBottom: 25,
    alignItems: "stretch",
    marginBottom: 10
    },
    image: {
      width: '100%',
      height: '100%'
  },
  header: {
    fontSize: 20,
    fontFamily: 'Avenir-Medium',
    color:'white',
    fontWeight: '800',
    opacity: .8,
    marginBottom: 25,
    alignItems: "stretch"
  },
  journals: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'stretch',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: .25,
    backgroundColor: 'white',
    opacity: .5,
    padding: 20,
    borderRadius: 5,
    marginBottom: 30

  }

  });

export default styles
