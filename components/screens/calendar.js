import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Calendar with selectable date and arrows</Text>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
        />
        <Text style={styles.text}>Calendar with marked dates and hidden arrows</Text>
        <Calendar
          style={styles.calendar}
          current={'2019-05-16'}
          minDate={'2012-05-10'}
          maxDate={'2020-05-29'}
          firstDay={1}
          markedDates={{
            '2019-05-23': {selected: true, marked: true},
            '2019-05-24': {selected: true, marked: true, dotColor: 'green'},
            '2019-05-25': {marked: true, dotColor: 'red'},
            '2019-05-26': {marked: true},
            '2019-05-27': {disabled: true, activeOpacity: 0}
          }}
          // disabledByDefault={true}
          hideArrows={true}
        />
      </ScrollView>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});