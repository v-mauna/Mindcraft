import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';

export default class Form extends Component {
    constructor(props){        
      super(props);        
      this.state={            
         email:'',
         password: ''        
      }   
 }

 saveData =async()=>{
    const {email,password} = this.state;

    //save data with asyncstorage
    let loginDetails={
        email: email,
        password: password
    }

    if(this.props.type !== 'Login')
    {
        AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

        Keyboard.dismiss();
        alert("You successfully registered. Email: " + email + ' password: ' + password);
        this.login();
    }
    else if(this.props.type == 'Login')
    {
        try{
            let loginDetails = await AsyncStorage.getItem('loginDetails');
            let ld = JSON.parse(loginDetails);

            if (ld.email != null && ld.password != null)
            {
                if (ld.email == email && ld.password == password)
                {
                    alert('Go in!');
                }
                else
                {
                    alert('Email and Password does not exist!');
                }
            }

        }catch(error)
        {
            alert(error);
        }
    }
}

showData = async()=>{
    let loginDetails = await AsyncStorage.getItem('loginDetails');
    let ld = JSON.parse(loginDetails);
    alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
}

showData = async()=>{
    let loginDetails = await AsyncStorage.getItem('loginDetails');
    let ld = JSON.parse(loginDetails);
    alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});