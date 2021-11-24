import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Signin from "../Home/Signin"
import Signup from '../Home/Signup';
import TripList from '../TripList';
import TripDetail from '../TripDetail';
import CreateTrip from '../CreateTrip';

const Navigation = () => {
    const { Navigator, Screen} = createStackNavigator();
    return (
        
        <Navigator initialRouteName="TripList">
            <Screen name="Signin" component={Signin} options={{headerShown:false}} />
            <Screen name="Signup" component={Signup}/>
            <Screen name="TripList" component={TripList} />
            <Screen name="TripDetail" component={TripDetail}/> 
            <Screen name="CreateTrip" component={CreateTrip}/> 
        </Navigator>
        
    )
}

export default Navigation
