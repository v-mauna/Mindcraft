import React from 'react'
import { View, TextInput, ImageBackground, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text } from 'react-native'
import styles from '../../assets/styles/signupStyles'

class Signup extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    handleSignup = () => {
        this.props.signUp()
        this.props.navigation.navigate('Login')
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

export default Signup