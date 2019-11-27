import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Picker,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import styles from "../../assets/styles/meditationStyles";
import PulsatingSphere from "./pulsatingsphere";

import { getTime, TimeToBe } from "../redux/actions/singleMeditationActions";
import singleMeditationReducer from "../redux/reducers/singleMeditationReducer";

class SingleMeditation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "0",

    };
  }

  componentDidMount() {
    this.props.getTime();
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
          <PulsatingSphere />

        </View>
        <View style={currentStyles.pickercontainer}>
          <View style={currentStyles.textcontainer}>
            <Text style={styles.text}>
              Time to meditate: {this.props.time / 60000} min
              {"\n"} Set the time:
            </Text>
          </View>
          <Picker
            selectedValue={this.props.time}
            onValueChange={value => {
              this.props.TimeToBe(value);
              console.log("this state props:", this.state.props);
              console.log("this props", this.props);
              console.log("after time to be:", this.props.time);
            }}
          >
            <Picker.Item label="select time:" value="0" />
            <Picker.Item label="1 minutes" value="3000" />
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
  },
  textcontainer: {
    padding: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "pink"
  }
});

checkTimer = () =>{
  if(this.props.timeLeft<0){

  }
}


const mapStateToProps = state => {
  console.log('props in single meditation:', this.props)
  return {
    time: state.singleMeditationReducer.time,
    // timeLeft: state.singleMeditationReducer.timeLeft
  };
};

const mapDispatch = dispatch => ({
  getTime: () => dispatch(getTime()),
  TimeToBe: newTime => dispatch(TimeToBe(newTime))
});


export default connect(mapStateToProps, mapDispatch)(SingleMeditation);
