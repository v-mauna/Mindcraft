import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Picker,
  StyleSheet,
  Button
} from "react-native";
import { connect } from "react-redux";

import styles from "../../assets/styles/meditationStyles";
import PulsatingSphere from "./pulsatingsphere";
import {
  getTime,
  TimeToBe,
  setLeftTime,
  startTimer,
  tickTimer
} from "../redux/actions/singleMeditationActions";
import { updateUser } from "../redux/actions/userActions";
import { loadUser, saveUser } from "../storage/userStorage";

class Timer extends React.Component {
  componentWillUnmount() {
    clearInterval(this.startCountdown);
  }

  startCountdown = setInterval(() => {
    if (this.props.timeLeft === 0) {
      this.stopFunction();
    } else {
      this.props.setLeftTime(this.props.timeLeft - 1000);
    }
  }, 1000);

  stopFunction = () => {
    clearInterval(this.startCountdown);
  };

  render() {
    let minutes = Math.floor(this.props.timeLeft / 60000);
    let seconds = Math.floor((this.props.timeLeft - minutes * 60000) / 1000);
    return (
      <View style={styles.textcontainer}>
        <Text style={styles.text}>
         just breathe for: {minutes} min {seconds} sec
        </Text>

      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    time: state.singleMeditationReducer.time,
    timeLeft: state.singleMeditationReducer.timeLeft,
    timeWentOff: state.singleMeditationReducer.timeWentOff
  };
};

const mapDispatch = dispatch => ({
  getTime: () => dispatch(getTime()),
  TimeToBe: newTime => dispatch(TimeToBe(newTime)),
  updateUser: userId => dispatch(updateUser(userId)),
  loadUser: () => dispatch(loadUser()),
  saveUser: user => dispatch(saveUser(user)),
  checkTimer: time => dispatch(checkTimer(time)),
  setLeftTime: time => dispatch(setLeftTime(time)),
  tickTimer: () => dispatch(tickTimer()),
  startTimer: () => dispatch(startTimer())
});

export default connect(mapStateToProps, mapDispatch)(Timer);
