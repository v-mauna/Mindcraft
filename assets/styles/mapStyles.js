import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 200,
    marginRight: 200
  },
  image: {
    width: "100%",
    height: "100%",
  },
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height
      ) / 2,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  active: {
    backgroundColor: '#38DCEA',
    width: Dimensions.get('window').width * 0.275,
    height: Dimensions.get('window').width * 0.275,
    borderWidth: 10,
    borderColor: "black",
    alignSelf: 'center',
  },
  inactive: {
    backgroundColor: '#C8F7F6',
    opacity: .7
  },
  finished: {
    backgroundColor: '#C8F7F6',
    opacity: .7
  },
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
  center: {
    alignSelf: 'center'
  },
  levels: {
    fontSize: 40,
    color: 'black',
  }

})

export default styles
