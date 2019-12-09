import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    color: "black",
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    fontWeight: "800",
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
    width: '85%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: .25,
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 30,
    marginTop: 40,
    alignContent: 'center',
    borderWidth: 2
  },
  text2: {
    color: "black",
    fontSize: 18,
    fontFamily: "Avenir-Medium",
    marginBottom: 15,
    marginLeft: 20
  },
});

export default styles;
