import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 20,
    justifyContent: 'center'

  },
  text: {
    color: "black",
    fontSize: 20,
    opacity: 0.8,
    fontFamily: "Avenir-Medium",
    fontWeight: "800",
    marginBottom: 15
  },
  image: {
    width: "100%",
    height: "100%"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 180,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 2,
    opacity: 0.8
  },
  header: {
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "black",
    fontWeight: "800",
    marginBottom: 20,
    alignItems: "stretch"
  },
  card: {
    width: 300,
    maxWidth: '80%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: .25,
    backgroundColor: 'white',
    opacity: .5,
    padding: 20,
    borderRadius: 5,
    marginBottom: 30,
    marginTop: 20,
    marginLeft: 30,
    alignContent: 'center',
  }
});

export default styles;
