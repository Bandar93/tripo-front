import { observer } from 'mobx-react'
import React from 'react'
import { View, Text , Image } from 'react-native'
import { baseURL } from '../../Stores/api'



const TripItem = ({trip,navigation}) => {
    
    return (
        <View>
            <Text onPress={() => navigation.navigate("TripDetail",{trip: trip}) } >{trip.name} </Text>

            <Image 
            source={{uri: baseURL + trip.image}}
            style={{width:50, height:50}}
            />
            
            
        </View>
    )
}

export default observer(TripItem);

