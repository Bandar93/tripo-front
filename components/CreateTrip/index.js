import { observer } from "mobx-react";
import React from "react";
import { useState } from "react";
import tripStore from "../../Stores/tripStore";
import {
  Box,
  FormControl,
  Input,
  Button,
  Center,
  useToast,
  Text,
} from "native-base";

const CreateTrip = ({ navigation }) => {
  const toast = useToast();
  const [trip, setTrip] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = () => {
    tripStore.addTrip(trip, navigation, toast);
  };

  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <FormControl
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Trip Name
          </Text>
          <Input onChangeText={(value) => setTrip({ ...trip, name: value })} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Description
          </Text>
          <Input
            onChangeText={(value) => setTrip({ ...trip, description: value })}
          />
          <Button
            style={{
              marginTop: 10,
              backgroundColor: "black",
            }}
            onPress={handleSubmit}
          >
            Add Trip
          </Button>
        </FormControl>
      </Box>
    </Center>
  );
};

export default observer(CreateTrip);
