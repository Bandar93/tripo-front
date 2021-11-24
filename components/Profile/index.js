
import { observer } from "mobx-react";
import React from 'react'
import { View } from 'react-native'
import profileStore from '../../Stores/profileStore'
import {  Button, Input }  from "native-base"
import { useState } from "react"


const Profile = () => {

const [profile, setProfile] = useState({
    bio:"",
    
})
const handelSubmit = () => {
    profileStore.profileUpdate(profile); 
}
    return (
        <View>
            <Input onChangeText={(value) => setProfile({...profile, bio: value})} />
            <Button onPress={handelSubmit}>Update</Button>
            
        </View>
    )
}

export default observer(Profile);
