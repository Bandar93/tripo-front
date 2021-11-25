import { observer } from "mobx-react";
import React from "react";
import profileStore from "../../Stores/profileStore";

import { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  Button,
  Center,
  useToast,
  Text,
} from "native-base";

const Profile = () => {
  const [profile, setProfile] = useState({
    bio: "",
  });
  const handelSubmit = () => {
    profileStore.profileUpdate(profile);
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
            Username
          </Text>
          <Input
            onChangeText={(value) => setProfile({ ...profile, bio: value })}
          />
          <Button
            style={{
              marginTop: 10,
              backgroundColor: "black",
            }}
            onPress={handelSubmit}
          >
            Update
          </Button>
        </FormControl>
      </Box>
    </Center>
  );
};

export default observer(Profile);
