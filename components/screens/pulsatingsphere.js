import PulsatingCircle from "react-native-pulsating-circle";
import React, { useState } from "react";
import { Text } from "react-native";

export default class  PulsatingSphere extends React.Component {

  handlePress = () => {
    this.startAnimation();
    // this.stopAnimation();
    // this.refs.myCircle.toggleAnimation();
  };
render(){
  return (
    <PulsatingCircle
      delay={4000}
      mainBackgroundColor={"transparent"}
      mainCircleBorder={5}
      mainCircleColor={"#6cdbd2"}
      mainCircleSize={200}
      pulseCircleBorder={5}
      pulseCircleColor={"#6cdbd2"}
      pulseCircleSize={200}
      playAnimation={true}
      toggleOnPress={false}
    >
      <Text>press to start</Text>
    </PulsatingCircle>
  );
}
}




