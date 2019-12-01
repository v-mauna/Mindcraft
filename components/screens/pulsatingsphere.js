import PulsatingCircle from "react-native-pulsating-circle";
import React, { useState } from "react";
import {
  Text,
  Animated,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Easing
} from "react-native";
import {startCountdown} from "./timer"
import { connect } from "react-redux";
import {
  getTime,
  TimeToBe,
  setLeftTime,
  startTimer,
  tickTimer
} from "../redux/actions/singleMeditationActions";



class PulsatingSphere extends React.Component {
  state = {
    size: new Animated.Value(200)
  };

  checkTime = () => {
    const animatedStyles = {
      width: this.state.size,
      height: this.state.size
    };
    if (this.props.time > 0) {
      return (
        <View>
          <TouchableWithoutFeedback onPress={this.handlePress}>
            <Animated.View
              style={[styles.circle, animatedStyles]}
            ></Animated.View>
          </TouchableWithoutFeedback>
        </View>
      );
    } else {
      return <Text style={styles.text}>Please select time to start</Text>;
    }
  };

  startAnimation = () => {
    Animated.timing(this.state.size, {
      delay: 1000,
      toValue: 0,
      easing: Easing.linear,
      duration: 7000
    }).start(() => {
      Animated.timing(this.state.size, {
        toValue: 200,
        easing: Easing.linear,
        duration: 6000
      }).start(() => this.startAnimation());
    });
  };

  stopAnimation = () => {
    Animated.timing(this.state.size).stop();
  };



  handlePress = () => {
    this.startAnimation();
    startCountdown;
    this.props.startTimer();

  };



  resetAll = () => {
    this.props.setLeftTime(0);
    this.props.TimeToBe(0);
    this.props.tickTimer();
  };

  render() {
    return <View style={styles.container}>{this.checkTime()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    opacity: 0.3,
    backgroundColor: "blue",
    borderRadius: 200 / 2
  }
});

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
  setLeftTime: time => dispatch(setLeftTime(time)),
  tickTimer: () => dispatch(tickTimer()),
  startTimer: () => dispatch(startTimer()),

});

export default connect(mapStateToProps, mapDispatch)(PulsatingSphere);
