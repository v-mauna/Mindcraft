import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../../assets/styles/color/";
import RoundedButton from "../buttons/RoundedButton";
export default class LoggedOut extends Component {
  render() {
    return (
      <View style={styles.wrapper}> 
        <View style={styles.welcomeWrapper}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/aboveTheClouds.jpg")}
          />
          <Text style={styles.welcomeText}>
            Welcome to MindCraft
          </Text>
          <RoundedButton
             text="Login" 
             textColor={colors.green01}
             backgroundColor={colors.white}
           />
           <RoundedButton text="Create Account" textColor={colors.white} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      display: "flex",
      backgroundColor: colors.green01 
    },
    welcomeWrapper: {
      flex: 1,
      display: "flex",
      marginTop: 30,
      padding: 20
    },
    logo: {
      width: 50,
      height: 50,
      marginTop: 50,
      marginBottom: 40
    },
    welcomeText: {
      fontSize: 30,
      color: colors.white,
      fontWeight: "300",
      marginBottom: 40
    }
  });