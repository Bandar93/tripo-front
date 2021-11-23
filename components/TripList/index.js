import { observer } from "mobx-react";
import React from "react";
import { View } from "react-native";
import TripItem from "./TripItem";
import tripStore from "../../Stores/tripStore";
import { Button, useToast } from "native-base";
import authStore from "../../Stores/authStore";
import Profile from '../Profile';


const TripList = ({navigation}) => {
    const toast = useToast();
    const logout = () => {
        authStore.logOut(toast,navigation);
    }
   const tripList = tripStore.trip.map((trip)=> (
       <TripItem trip={trip} navigation={navigation} key={trip._id} />
       
   ));
 
    
    return (
        <View>
            {tripList}
            <Button onPress={logout} >Log out</Button>
            <Button onPress={Profile} >Profile</Button>
            
            
            
        </View>
    )
    }


export default observer(TripList);
