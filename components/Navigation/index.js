import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Home"
import Signup from '../Home/Signup';

const Navigation = () => {
    const { Navigator, Screen} = createStackNavigator();
    return (
        
        <Navigator initialRouteName="Home">
            <Screen name="Home" component={Home} />
            <Screen name="Signup" component={Signup}/>
        </Navigator>
        
    )
}

export default Navigation
