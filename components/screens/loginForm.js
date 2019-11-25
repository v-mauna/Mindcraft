import React, { Component } from "react";
import { View, Text, TextInput, ImageBackground, KeyboardAvoidingView, ScrollView, TouchableOpacity, Button } from "react-native";
import styles from '../../assets/styles/loginStyles'
import colors from "../../assets/styles/color";
import InputField from "../form/inputField";
import NextArrowButton from "../buttons/nextArrowButton"
import RoundedButton from "../buttons/RoundedButton";
import authReducer from '../redux/actions/authActions'
import {auth} from '../redux/actions/authActions'
import {connect} from 'react-redux'
import {loadUser, saveUser} from '../storage/userStorage'


class Login extends Component {
    constructor(){
    super()
      this.state = {
        email: '',
        password: '',
        showMessage: false
    };
    this.logIn = this.logIn.bind(this)
    }

    componentDidMount= async () => {
      let user = await loadUser()
      console.log("USER", user)
    }

    async logIn() {
      await this.props.userAuth(this.state.email, this.state.password)
        if (this.props.user.email === this.state.email) {
          saveUser(this.state)
          this.props.navigation.navigate('Home')
        } else {
            this.toggleMessage()
        }
      } 

     toggleMessage() {
       this.setState({
         showMessage: !this.state.showMessage
       })
      }

      render(){
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
                <RoundedButton text="Login" color = "white" backgroundColor= 'blue' onPress = {this.logIn}/>
                <RoundedButton text="Create Account" color = "white" backgroundColor= '#FFA611' 
                onPress={()=>this.props.navigation.navigate('Signup')}/>
               <RoundedButton text="Create Account" color = "white" backgroundColor= '#FFA611'
                onPress={()=>this.props.navigation.navigate('Signup')}/>

          </ScrollView>
               </View>
             </KeyboardAvoidingView>
             </ImageBackground>
          );
        }
      }

      const mapState = state => ({
        user: state.authReducer
      })

      const mapDispatch = dispatch => ({
        userAuth: (email, password) => dispatch(auth(email, password))
      })
      

