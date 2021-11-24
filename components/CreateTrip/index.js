import { observer } from "mobx-react";
import React from "react";
import { Text } from "react-native";
import { useState } from "react";;
import { FormControl , Input , Button } from "native-base";
import tripStore from "../../Stores/tripStore";


const CreateTrip= ({ navigation }) => {
  const [trip, setTrip] = useState({
    name: "",
    discription: "",
  });


  // const handleAdd = () => {
  //     tripStore.addTrip(newTrip);
  //   };

    const handleSubmit = () => {
      tripStore.addTrip(trip);
   }


  return (
            <FormControl>
              <FormControl.Label>Trip name</FormControl.Label>
              <Input/>
              <FormControl.Label>discription</FormControl.Label>
              <Input/>
              <Button onPress={handleSubmit}>add trip</Button>
            </FormControl>
            
             
   
  );
};

export default observer(CreateTrip);