import React, { Component } from "react";
import propTypes from "prop-types";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import colors from "../../assets/styles/color";


export default class RoundedButton extends Component {
    render() {
      const { text, color, backgroundColor, onPress } = this.props;
      return (
        <TouchableHighlight style={[{ backgroundColor }, styles.wrapper]}
        onPress={onPress}
        >
        <View style={styles.ButtonTextWrapper}>
          <Text style={[{ color }, styles.buttonText]}>{text}</Text>
          </View>
        </TouchableHighlight>
      );
    }
  }
  RoundedButton.propTypes = {
    text: propTypes.string.isRequired,
    textColor: propTypes.string,
    backgroundColor: propTypes.string
  };  

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
        display: "flex",
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom: 15,
        alignItems: "center"
      },
    buttonText: {
      fontSize: 16,
      width: "100%",
      textAlign: "center"
    }
  });