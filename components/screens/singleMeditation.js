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
import singleMeditationReducer from "../redux/reducers/singleMeditationReducer";
import { loadUser, saveUser } from "../storage/userStorage";
import Timer from "./timer"

class SingleMeditation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  async componentDidMount() {
    // this.props.getTime();
    this.user = await loadUser();
    this.props.tickTimer();
  }

  componentWillUnmount() {
    this.resetAll();
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

  checkTimer = time => {
    if (time === 0) {
      return true;
    } else {
      return false;
    }
  };

  renderSphere = () => {
    if (this.props.timeLeft === 0 && this.props.timeWentOff === false) {
      // this.updateMeditations()
      // this.props.setLeftTime("500");
      return (
        <View>
          <Text style={styles.text}>Simply select time to start</Text>
        </View>
      );
    } else if(this.props.timeLeft>0&&this.props.time>0){
      return (
        <View>
          <PulsatingSphere />
        </View>
      );
    }
  };
  resetAll = () => {
    this.props.setLeftTime(0);
    this.props.TimeToBe(0);
    this.props.tickTimer();
  };
  updateMeditations = () => {
    if (this.user) {
      newNumberOfMeditations = this.user.totalMeditations + 1;
      if (this.props.timeLeft === 0 && this.props.timeWentOff === true && this.props.time>0) {
        updateUser(this.user.id, newNumberOfMeditations);

        return <Text style={styles.text}>Great job! </Text>;
      }
    }
  };

  // onPick = (value) => {
  //   console.log('got to onPick function')
  //   this.props.setLeftTime(value);
  //   this.props.TimeToBe(value);
  //   console.log('onPick time after changed time:', this.props.time)

  //   console.log('onPick timeLeft after changed time:', this.props.timeLeft)
  // };

  onValueChange(value) {
    if (value !== this.props.time) {
      this.props.TimeToBe(value);
    }
  }
  displayPicker = () => {
    if (this.props.timeWentOff === false) {
      console.log("got here");
      return (
        <View>
          <Picker
            selectedValue={this.props.time}
            onValueChange={value => {
              this.props.TimeToBe(value);
              this.props.setLeftTime(value);
              console.log("Single meditation props:", this.props);
              console.log("SignleMedittion timeLeft:", this.props.timeLeft);
            }}
          >
            <Picker.Item label="select time to start:" value={0} />
            <Picker.Item label="test for dev 3 sec" value={3000} />
            <Picker.Item label="1 minute" value={60000} />
            <Picker.Item label="3 minutes" value={180000} />
            <Picker.Item label="5 minutes" value={300000} />
            <Picker.Item label="7 minutes" value={420000} />
            <Picker.Item label="10 minutes" value={600000} />
            <Picker.Item label="15 minutes" value={900000} />
          </Picker>
        </View>
      );
    }
  };

  showTimer =()=>{
    if(this.props.timeWentOff===true){
      return (
        <Timer />
        )
    }
  }
  render() {

    console.log("user in render:", this.user);
    console.log("time left in SG:", this.props.timeLeft);
    console.log("time in SG:", this.props.time)
    return (
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/water.jpg")}
      >
<View style={currentStyles.timeContainer}>{this.showTimer()}</View>
        <View style={currentStyles.Spherecontainer}>{this.renderSphere()}</View>

        <View style={currentStyles.pickercontainer}>
          {this.displayPicker()}
          {this.updateMeditations()}
        </View>
      </ImageBackground>
    );
  }
}

const currentStyles = StyleSheet.create({
  pickercontainer: {
    flex: 1,
    alignContent: "flex-start",
    borderColor: "black",
    borderWidth: 3
  },
  Spherecontainer: {
    flex: 0.7,
    padding: 20,
    margin: 10,
    borderColor: "orange",
    borderWidth: 3
  },
  textcontainer: {
    padding: 12,
    alignItems: "center"
  },
  timeContainer:{
    flex: 1,
    borderTopWidth: 3,
    borderColor: "pink",
    padding: 20,
    margin: 10,
  }
});

const mapStateToProps = state => {
  // console.log("state in SG:", state);
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

export default connect(mapStateToProps, mapDispatch)(SingleMeditation);
