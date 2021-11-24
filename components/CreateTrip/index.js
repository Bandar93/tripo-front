import { observer } from "mobx-react";
import React from "react";
import { Text } from "react-native";
import { useState } from "react";;
import { FormControl , Input , Button , useToast } from "native-base";
import tripStore from "../../Stores/tripStore";


const CreateTrip= ({ navigation }) => {
  const toast = useToast()
  const [trip, setTrip] = useState({
    name: "",
    description: "",
  });


  // const handleAdd = () => {
  //     tripStore.addTrip(newTrip);
  //   };

    const handleSubmit = () => {
      tripStore.addTrip(trip, navigation ,toast);
   }


  return (
            <FormControl>
              <FormControl.Label>Trip name</FormControl.Label>
              <Input onChangeText={(value) => setTrip({ ...trip,name : value })}/>
              <FormControl.Label>description</FormControl.Label>
              <Input onChangeText={(value) => setTrip({ ...trip,description : value })} />
              <Button onPress={handleSubmit}>add trip</Button>
            </FormControl>
            
             
   
  );
};

export default observer(CreateTrip);