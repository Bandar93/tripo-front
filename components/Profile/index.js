
import { observer } from "mobx-react";
import React from 'react'
import profileStore from '../../Stores/profileStore'
import {  Button, Input, FormControl, Center }  from "native-base"
import { useState } from "react"




const Profile = () => {

const findpforile = profileStore.profile

const [profile, setProfile] = useState(findpforile)
const handelSubmit = () => {
    profileStore.profileUpdate(profile); 
}
    return (
        
        <Center>
            <FormControl>

            <FormControl.Label>Bio</FormControl.Label>
            <Input value={profile.bio}
             onChangeText={(value) => setProfile({...profile, bio: value})} />
            </FormControl>
            <Button onPress={handelSubmit}>Update</Button>
        </Center>
        
    )
}

export default observer(Profile);
