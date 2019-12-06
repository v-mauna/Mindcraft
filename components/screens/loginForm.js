import React, { Component } from "react";
import { View, Text, TextInput, ImageBackground, KeyboardAvoidingView, ScrollView, TouchableOpacity, Button } from "react-native";
import styles from '../../assets/styles/loginStyles'
import RoundedButton from "../buttons/RoundedButton";
import authReducer from '../../redux/actions/authActions'
import {auth} from '../../redux/actions/authActions'
import {connect} from 'react-redux'
import {loadUser, saveUser} from '../storage/userStorage'


class Login extends Component {
  static navigationOptions = { title : 'Welcome',  headerStyle: {
    backgroundColor: '#000',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },}
    constructor(){
    super()
      this.state = {
        email: '',
        password: '',
        showMessage: false
    };
    this.logIn = this.logIn.bind(this)
    }

    async logIn() {
      const email = this.state.email
        const password = this.state.password
        if(email === '' || password === ''){
            return Alert.alert('Email and Password are each required fields')
        }else{
        await this.props.userAuth(email, password)
        if (this.props.user.email=== this.state.email) {
          saveUser(this.props.user)
          this.props.navigation.navigate('Home')
        } 
      }
    }

     toggleMessage() {
       this.setState({
         showMessage: !this.state.showMessage
       })
      }

      render(){
        return (
            <ImageBackground style={styles.image} source={require('../../assets/images/login.jpg')}>
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
                    secureTextEntry
                />
                <TouchableOpacity onPress={this.logIn} style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')} 
                style={styles.button}>
                  <Text style={styles.buttonText}>Create an Account</Text>
                </TouchableOpacity>
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

      export default connect(mapState,mapDispatch)(Login)


