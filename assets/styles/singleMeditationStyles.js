import { StyleSheet, Dimensions } from "react-native";
import colors from './color'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black',

  },
  singlemeditationcontainer:{
    flex: 1,
    justifyContent: "flex-end"
  },
  text: {
    color: "white",
    fontSize: 20,
    opacity: 0.8,
    fontFamily: "Avenir-Medium",
    fontWeight: "800",
    marginBottom: 15,
    justifyContent: 'center',
    alignContent: 'center'
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
    marginLeft: 1,
    marginRight: 1,
    fontFamily: "Avenir-Medium",
    color: "white",
    backgroundColor: "black",
    fontWeight: "800",
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center",
    padding: 2
  },
  pickercontainer: {
    height: "25%",
    alignContent: "flex-start",
    fontFamily: "Avenir-Medium",
    fontSize: 20
  },
  Spherecontainer: {
    height: "55%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  textcontainer: {
    padding: 12,
    alignItems: "center",
    fontFamily: "Avenir-Medium",
  },
  timeContainer: {
    height: "10%",
    padding: 10,
    margin: 10,
    fontFamily: "Avenir-Medium"
  },
  circle: {
    opacity: 0.3,
    backgroundColor: "blue",
    borderRadius: 200 / 2
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  great: {
    padding: 10,
    margin: 10,
    fontFamily: "Avenir-Medium",
    fontSize: 20,
    color: 'white',
    marginLeft: 120

  }
});

export default styles;
