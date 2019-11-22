import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'

export default class Drawer extends Component{
    navigateToScreen= (route)=>{
        const navigate = NavigationActions.navigate({
            routeName: route
        })
        this.props.navigation.dispatch(navigate)
    }
    render () {
        return (
          <View style={styles.container}>
            <ScrollView>
            <Button
             raised
             icon={{name: 'trash-o', type: 'font-awesome', size: 20}}
             title='Home'
             buttonStyle={styles.button}
             onPress={this.navigateToScreen('Home')}/>
            <Button
             raised
             icon={{name: 'umbrella', type: 'font-awesome', size: 20}}
             title='Journals'
             buttonStyle={styles.button}
             onPress={this.navigateToScreen('Meditaitions')}/>
            <Button
             raised
             icon={{name: 'user-circle', type: 'font-awesome', size:20}}
             title='Journals'
             buttonStyle={styles.button}
             onPress={this.navigateToScreen('Journals')}/>
            </ScrollView>
          </View>
        );
      }
    }

    Drawer.propTypes = {
      navigation: PropTypes.object
    }

