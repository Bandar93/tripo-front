import { observer } from 'mobx-react'
import {  Spinner } from 'native-base';
import React from 'react'
import { View, Text, Image } from 'react-native'
import { baseURL } from '../../Stores/api'
import tripStore from '../../Stores/tripStore'

const TripDetail = ({navigation , route}) => {
    if(tripStore.isLoading) return <Spinner />
    const trip = route.params.trip;
    return (
        <View>
            <Text>{trip.name}</Text>
            <Text>{trip.owner.username}</Text>
            <Image source={{uri: baseURL + trip.image}}
            style={{width:50, height:50}} />
            <Text>{trip.description}</Text>
        </View>
    )
}

export default observer(TripDetail)
