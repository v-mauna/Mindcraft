import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Picker,
  StyleSheet
} from "react-native";
import styles from "../../assets/styles/meditationStyles";
import { connect } from "react-redux";
import PulsatingSphere from "./pulsatingsphere";
import { getTime, TimeToBe, reduceTime } from "../redux/actions/singleMeditationActions";

class Timer extends Component {

  componentDidMount() {
     this.props.getTime()
     this.props.reduceTime(this.props.time)
  }


  render() {
    console.log("time to run in timer", this.props.time);
    return <View></View>;
  }
}

const mapStateToProps = state => {
  return {
    time: state.singleMeditationReducer.time
  };
};

const mapDispatch = dispatch => ({
  getTime: () => dispatch(getTime()),
  TimeToBe: newTime => dispatch(TimeToBe(newTime)),
  reduceTime: time => dispatch(reduceTime(time))
});

export default connect(mapStateToProps, mapDispatch)(Timer);
