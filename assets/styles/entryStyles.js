import { StyleSheet ,Dimensions} from 'react-native'
import colors from './color'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green01,
  },
  text: {
    marginTop: 30,
    marginLeft: 30,
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
    opacity: 0.8,
    marginBottom: 10,
    fontFamily: 'Avenir-Medium'
  },
  image: {
    width: '100%',
    height: '100%',
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
    opacity: 0.8,
  },
  header: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
    opacity: 0.8,
    marginBottom: 15,
    alignItems: 'stretch',
  },
  inputContainer: {
    paddingTop: 2
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 12,
    paddingLeft:10,
    paddingRight: 10,
    width: 300,
    marginLeft: 20
  }
  ,textInput2: {
    backgroundColor: 'white',
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 200,
    fontSize: 12,
    paddingLeft:10,
    paddingRight: 10,
    width: 300,
    marginLeft: 20
  },
  saveButton: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    opacity: .8,
    padding: 15,
    margin: 5,
    justifyContent: 'flex-end',
    width: 100,
    alignContent: "center"
  },
})

export default styles
