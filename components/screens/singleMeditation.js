import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Picker,
  StyleSheet
} from "react-native";
import styles from "../../assets/styles/meditationStyles";
import PulsatingSphere from "./pulsatingsphere";

export default class SingleMeditation extends React.Component {
  constructor() {
    super();
    this.state = { timeToRun: "0" };
  }

  static navigationOptions = {
    title: "Mindcraft",
    headerStyle: {
      backgroundColor: "#72788d"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/water.jpg")}
      >
        <View style={currentStyles.textcontainer}>
          <Text style={styles.text}>...breathe in...breathe out</Text>
        </View>
        <View style={currentStyles.container}>
          <PulsatingSphere timeToRun={this.state.timeToRun} />
        </View>
        <View style={currentStyles.pickercontainer}>
          <View style={currentStyles.textcontainer}>
            <Text style={styles.text}>
              Time to meditate: {this.state.timeToRun / 6000} min
              {"\n"} Set the time:
            </Text>
          </View>
          <Picker
            selectedValue={this.state.time}
            onValueChange={value => this.setState({ timeToRun: value })}
          >
            <Picker.Item label="1 minute" value="60000" />
            <Picker.Item label="2 minutes" value="12000" />
            <Picker.Item label="3 minutes" value="18000" />
            <Picker.Item label="5 minutes" value="300000" />
          </Picker>
        </View>
      </ImageBackground>
    );
  }
}

const currentStyles = StyleSheet.create({
  pickercontainer: {
    flex: 1,
    alignContent: "flex-start",
    borderWidth: 2,
    borderColor: "purple"
  },
  container: {
    borderWidth: 2,
    borderColor: "black",
    flex: 0.7,
    padding: 20,
    margin: 10
    // alignContent: "flex-end"
    // marginTop: 10,
    // marginLeft: 10
  },
  textcontainer: {
    padding: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "pink"
  }
});
