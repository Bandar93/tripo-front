import { observer } from 'mobx-react-lite'
import {  Spinner } from 'native-base';
import React from 'react'
import { View, Text } from 'react-native'
import { baseURL } from '../../Stores/api'
import tripStore from '../../Stores/tripStore'
import TripList from '../TripList'
const TripDetail = ({navigation , route}) => {
    if(tripStore.isLoading) return <Spinner />
    const trip = route.parms.trip;
    return (
        <View>
            <Text>{trip.name}</Text>
            <Image source={{uri: baseURL + trip.image}}
            style={{width:50, height:50}} />
            <TripList trips={trip.trips} />
        </View>
    )
}

export default observer(TripDetail)
