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

export default class PulsatingSphere extends React.Component {
  state = {
    size: new Animated.Value(200),
    timeToRun: this.props.timeToRun
  };

  checkTime = ()=> {
    const animatedStyles = {
      width: this.state.size,
      height: this.state.size
    };
    if (this.props.timeToRun > 0) {
      return (

          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View
              style={[styles.circle, animatedStyles]}
            ></Animated.View>
          </TouchableWithoutFeedback>

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
  render() {

    console.log("time to run:", this.timeToRun);
    return  <View style={styles.container}>{this.checkTime()}</View>;
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
