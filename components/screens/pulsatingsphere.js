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

import { connect } from "react-redux";
import { getTime, TimeToBe, setTimeLeft } from "../redux/actions/singleMeditationActions";


class PulsatingSphere extends React.Component {
  state = {
    size: new Animated.Value(200),
    // time: this.props,
    // timeLeft: this.props
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

  startCountdown = () => {
    let timeToReduce=this.props.time
    setInterval(() => {
      if (timeToReduce < 0) {
        this.stopFunction();
      } else {
        console.log("time to reduce in sphere component:", timeToReduce);

        timeToReduce -= 1000;
        this.props.setTimeLeft(timeToReduce)
        console.log("time left in sphere", this.props.timeLeft)
      }
    }, 1000);
  };

  stopAnimation = () => {
    Animated.timing(this.state.size).stop();
  };

  stopFunction = () => {
    clearInterval(this.startCountdown);

  };

  handlePress = () => {
    this.startAnimation();
    this.startCountdown();
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
    timeLeft: state.singleMeditationReducer.timeLeft
  };
};

const mapDispatch = dispatch => ({
  getTime: () => dispatch(getTime()),
  TimeToBe: newTime => dispatch(TimeToBe(newTime)),
  setTimeLeft: time => dispatch(setTimeLeft(time))
});

export default connect(mapStateToProps, mapDispatch)(PulsatingSphere);
