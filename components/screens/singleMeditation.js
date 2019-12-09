import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Alert,
  Picker,
  Button
} from "react-native";
import { connect } from "react-redux";
import styles from "../../assets/styles/singleMeditationStyles";
import PulsatingSphere from "../pulsatingsphere";
import {
  getTime,
  TimeToBe,
  setLeftTime,
  startTimer,
  tickTimer
} from "../../redux/actions/singleMeditationActions";
import { updateUser } from "../../redux/actions/userActions";
import singleMeditationReducer from "../../redux/reducers/singleMeditationReducer";
import { loadUser, saveUser } from "../storage/userStorage";
import Timer from "../timer";

class SingleMeditation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  async componentDidMount() {
    this.user = await loadUser();
    this.props.tickTimer();
  }

  componentWillUnmount() {
    this.resetAll();
  }

  static navigationOptions = {
    title: "Meditation",
    headerStyle: {
      backgroundColor: "black"
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
      return (
        <View>
          <Text style={styles.text}>Simply select time to start</Text>
        </View>
      );
    } else if (this.props.timeLeft > 0 && this.props.time > 0) {
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
      if (
        this.props.timeLeft === 0 &&
        this.props.timeWentOff === true &&
        this.props.time > 0
      ) {
        this.props.updateUser(this.user.id, newNumberOfMeditations);
          Alert.alert('Great job!');
          return this.props.navigation.navigate('Profile')
      }
    }
  };

  onValueChange(value) {
    if (value !== this.props.time) {
      this.props.TimeToBe(value);
    }
  }

  displayPicker = () => {
    if (this.props.timeWentOff === false) {
      return (
        <View>
          <Picker
            selectedValue={this.props.time}
            onValueChange={value => {
              this.props.TimeToBe(value);
              this.props.setLeftTime(value);
            }}
            style={styles.pickercontainer}
          >
            <Picker.Item style={styles.pickercontainer}label="Choose your meditation length:" value={0} color="white"/>
            <Picker.Item style={styles.pickercontainer} label="Just Breathe" value={10000} color="white"/>
            <Picker.Item  style={styles.pickercontainer} label="1 minute" value={60000} color="white"/>
            <Picker.Item style={styles.pickercontainer} label="3 minutes" value={180000} color="white"/>
            <Picker.Item style={styles.pickercontainer} label="5 minutes" value={300000} color="white"/>
            <Picker.Item style={styles.pickercontainer} label="7 minutes" value={420000} color="white"/>
            <Picker.Item style={styles.pickercontainer} label="10 minutes" value={600000} color="white"/>
            <Picker.Item style={styles.pickercontainer} label="15 minutes" value={900000} color="white"/>
          </Picker>
        </View>
      );
    }
  };

  showTimer = () => {
    if (this.props.timeWentOff === true) {
      return <Timer />;
    }
  };
  render() {
    return (
        <View style={styles.container}>

        <View style={styles.singlemeditationcontainer}>
          <Button
            title="start over"
            style={styles.button}
            onPress={this.resetAll}
          />
        <View  style={styles.timeCcontainer}></View>{this.showTimer()}
          <View style={styles.Spherecontainer}>{this.renderSphere()}</View>
          <View style={styles.pickercontainer}>
            {this.displayPicker()}
            {this.updateMeditations()}
          </View>
        </View>
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
  updateUser: (userId, meditations) => dispatch(updateUser(userId, meditations)),
  loadUser: () => dispatch(loadUser()),
  saveUser: user => dispatch(saveUser(user)),
  checkTimer: time => dispatch(checkTimer(time)),
  setLeftTime: time => dispatch(setLeftTime(time)),
  tickTimer: () => dispatch(tickTimer()),
  startTimer: () => dispatch(startTimer())
});

export default connect(mapStateToProps, mapDispatch)(SingleMeditation);
