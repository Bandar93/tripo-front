import { observer } from 'mobx-react'
import {  Spinner } from 'native-base';
import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import { baseURL } from '../../Stores/api'
import tripStore from '../../Stores/tripStore'

import TripList from '../TripList'
import addTrip  from '../../Stores/tripStore'
import deleteTrip from '../../Stores/tripStore'


const TripDetail = ({navigation , route}) => {



    if(tripStore.isLoading) return <Spinner />
    const trip = route.params.trip;
    return (
        <View>
            <Text>{trip.name}</Text>
            <Text>{trip.owner.username}</Text>
            <Image source={{uri: baseURL + trip.image}}
            style={{width:50, height:50}} />

            
            <Button onPress={addTrip}>Add trip</Button>
            <Button onPress={deleteTrip}>delete trip</Button>

            <Text>{trip.description}</Text>
        </View>
    )
}

export default observer(TripDetail)


