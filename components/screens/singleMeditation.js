import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Picker
} from "react-native";
import styles from "../../assets/styles/meditationStyles";
import PulsatingSphere from "./pulsatingsphere";

export default class SingleMeditation extends React.Component {
    constructor(props){
        super(props)
        this.state = { time: '0' }
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
        <View style={styles.container}>
          <Text style={styles.text}>...breathe in...breathe out</Text>

          <PulsatingSphere
            onPress={() => this.handlePress()}

          />

        <Text>Set the time:</Text>
        <Picker
          selectedValue={this.state.time}
          style={{ height: 50, width: 100 }}
          onValueChange={value => this.setState({ time: value })}
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
