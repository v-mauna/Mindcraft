import React, { Component } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Picker,
  StyleSheet
} from "react-native";
import styles from "../../assets/styles/meditationStyles";
import {connect} from 'react-redux'
import PulsatingSphere from "./pulsatingsphere";
import {getTime, TimeToBe} from '../redux/actions/singleMeditationActions'

class Timer extends Component {

  render() {
    console.log('time to run in timer', this.props)
    return (
      <View></View>
    )
  }
}

const mapStateToProps = state => {
  return {
    time: state.singleMeditationReducer.time
  };
};

const mapDispatch = dispatch => ({
  getTime: () => dispatch(getTime()),
  TimeToBe: newTime => dispatch(TimeToBe(newTime))
});

export default connect(mapStateToProps, mapDispatch)(Timer);
