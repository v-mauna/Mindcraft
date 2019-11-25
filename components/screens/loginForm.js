import React, { Component } from "react";
import { View, Text, TextInput, ImageBackground, KeyboardAvoidingView, ScrollView, TouchableOpacity, Button } from "react-native";
import styles from '../../assets/styles/loginStyles'
import colors from "../../assets/styles/color";
import InputField from "../form/inputField";
import NextArrowButton from "../buttons/nextArrowButton"
import RoundedButton from "../buttons/RoundedButton";

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleLogin = () => {
        // this.props.login()
        this.props.navigation.navigate('Home')
    }

    render() {
        
        return (
            <ImageBackground style={styles.image} source={require('../../assets/images/cabin.jpg')}>
            <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
              <View style={styles.scrollViewWrapper}>
              <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Welcome to MindCraft</Text>
            <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    autoCapitalize='none'
                    placeholderTextColor = 'white'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Password'
                    placeholderTextColor = 'white'
                    secureTextEntry={true}
                />
                <RoundedButton text="Login" color = "white" backgroundColor= 'blue' onPress = {this.handleLogin}/>
                <RoundedButton text="Create Account" color = "white" backgroundColor= '#FFA611' />
            {/* <InputField 
              labelText="EMAIL ADDRESS" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="email" 
              customStyle={{marginBottom:30}} 
                
            />
            <InputField 
              labelText="PASSWORD" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="password"  
              customStyle={{marginBottom:30}}

            /> */}
          </ScrollView>
               </View>
             </KeyboardAvoidingView>
             </ImageBackground>
          );
        }
      }