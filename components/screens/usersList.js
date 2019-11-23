import React,{Component} from 'react';
import { 
  TouchableOpacity,
  Text,
  AsyncStorage,
  View,
  ActivityIndicator,
} from 'react-native';
import styles from '../../assets/styles/usersListStyles'
import PropTypes from 'prop-types'
import {fetchingUsersSuccess,fetchUsers} from '../redux/actions/userActions'
import  {connect} from 'react-redux'

class UsersList extends Component{
    constructor(){
        super()
    }

    async componentDidMount(){
        await this.props.fetchUsers()
       
    }

    render(){
        const data = this.props.users
        console.log('data',data)
        return(
            <View style={styles.container}>
                <Text> UsersList</Text>
                {/* {data.map(obj=>(
                    <View key={obj.id}>
                    <Text>{obj.firstName}</Text>
                    <Text>{obj.lastName}</Text>
                    <Text>{obj.email}</Text>
                    <TouchableOpacity style={styles.header} onPress={this.saveUser}>
                    <Text style={styles.hesader}> Click here to save user</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.header} onPress={()=>{this.getUser}}>
                    <Text style={styles.hesader}> Click here to get user</Text>
                </TouchableOpacity>
                    </View>
                ))} */}
            </View>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchUsers: () =>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersList)