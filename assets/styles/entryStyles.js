import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    opacity: 0.8,
    marginBottom: 20,
    textTransform: 'uppercase',
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
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: '800',
    opacity: 0.8,
    marginBottom: 15,
    alignItems: 'stretch',
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft:20,
    paddingRight: 20
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default styles
