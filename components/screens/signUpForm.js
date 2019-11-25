import React from 'react'
import { View, TextInput, ImageBackground, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text } from 'react-native'
import styles from '../../assets/styles/signupStyles'
import {signup} from '../redux/actions/authActions'
import authReducer from '../redux/actions/authActions'
import {connect} from 'react-redux'

class Signup extends React.Component {
    constructor(){
        super()
        this.state = {
        name: '',
        email: '',
        password: ''
        }
        this.handleSignup = this.handleSignup.bind(this)
    }   
    handleSignup = () => {
        this.props.signup(this.state.email, this.state.password)
        this.props.navigation.navigate('HomePage')
    }

    render() {
        return (
            <ImageBackground style={styles.image} source={require('../../assets/images/bluestones.jpg')}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <Text style={styles.Header}>Registration</Text>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    placeholder='Full Name'
                    placeholderTextColor = 'white'
                />
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
                <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const mapState = state => ({
    user: state.authReducer
  })
  
  const mapDispatch = dispatch => ({
    signup: (email, password) => dispatch(signup(email, password))
  })
  
  export default connect(mapState, mapDispatch)(Signup)

