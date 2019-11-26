import PulsatingCircle from "react-native-pulsating-circle";
import React, { useState } from "react";
import { Text, Animated, View, Stylesheet, TouchableWithoutFeedback} from "react-native";



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
export default class  PulsatingSphere extends React.Component {
constructor(props) {
  super(props);

  this._animation = new Animated.Value(0)
}

constructor(props) {
  super(props);

  this.state = {
    snowflakes: [
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0)
    ]
  }
}

componentWillMount() {
  this._animation = new Animated.Value(0)
}
}


