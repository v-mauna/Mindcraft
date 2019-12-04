import { StyleSheet, Dimensions } from "react-native";
import colors from './color'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 20,
  },
  
  text: {
    color: colors.white,
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
    color: "white",
    fontWeight: "800",
    marginBottom: 20,
    alignItems: "stretch",
    textAlign: 'center'
  },
  textcontainer: {
    padding: 12,
    alignItems: "center"
  },
});

export default styles;
