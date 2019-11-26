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

// export default class  PulsatingSphere extends React.Component {

//   handlePress = () => {
//     startAnimation()
//   }

// render(){
//   return (
//     <PulsatingCircle ref="myCircle"
//       delay={4000}
//       mainBackgroundColor={"transparent"}
//       mainCircleBorder={5}
//       mainCircleColor={"#6cdbd2"}
//       mainCircleSize={200}
//       pulseCircleBorder={5}
//       pulseCircleColor={"#6cdbd2"}
//       pulseCircleSize={200}
//       playAnimation={true}
//       toggleOnPress={false}
//       handlePress={this.startAnimation}
//     >
//       <Text>press to start</Text>
//     </PulsatingCircle>

//   );
// }
// }
export default class PulsatingSphere extends React.Component {


    state = {
      size: new Animated.Value(200),

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
    const animatedStyles = {
      width: this.state.size,
      height: this.state.size
    };
    console.log("time to run:", this.props.timeToRun);
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[styles.circle, animatedStyles]}
          ></Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
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
