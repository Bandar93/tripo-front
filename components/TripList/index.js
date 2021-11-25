import { observer } from "mobx-react";
import React from "react";
import { View } from "react-native";
import TripItem from "./TripItem";
import tripStore from "../../Stores/tripStore";
import { Button, useToast, ScrollView, VStack, Text, Image } from "native-base";
import authStore from "../../Stores/authStore";
import MIcon from "react-native-vector-icons/MaterialIcons";
import AIcon from "react-native-vector-icons/AntDesign";
import { FloatingAction } from "react-native-floating-action";
import { actions } from "../FloatingButton";
import Profile from "../Profile";

const TripList = ({ navigation }) => {
  const toast = useToast();
  const logout = () => {
    authStore.logOut(toast, navigation);
  };
  const tripList = tripStore.trip.map((trip) => (
    <TripItem trip={trip} navigation={navigation} key={trip._id} />
  ));
  // const handleAdd = () => {
  //   navigation.navigate("CreateTrip");
  // };

  return (
    <View
      style={{
        // alignItems: "center, stretch",
        flexDirection: "row",
        flex: 1,
      }}
    >
      {/* <VStack
        style={{
          borderColor: "black",
          borderRightWidth: 1,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            fontWeight: "bold",
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 3,
          }}
        >
          {" "}
          Tripo List{" "}
        </Text>
        <Text>_____________</Text>
        <AIcon
          style={{ color: "black", padding: 15 }}
          name="profile"
          size={27}
          onPress={() => navigation.navigate("Profile")}
        />
        <AIcon
          style={{ color: "green", padding: 15 }}
          name="pluscircleo"
          size={27}
          onPress={handleAdd}
        /> */}
      {/* <MIcon
        style={{ color: "red", padding: 15, opacity: 0.8 }}
        name="logout"
        size={27}
        onPress={logout}
      /> */}

      {/* <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          alt="broken cat uri!"
          style={{
            width: 70,
            height: 70,
            marginTop: "350%",
            borderRadius: "50%",
          }}
        />
      </VStack> */}

      <ScrollView
        horizontal={true}
        style={{
          marginLeft: 20,
        }}
      >
        {tripList}
      </ScrollView>
      <FloatingAction
        actions={actions}
        color="grey"
        onPressItem={(name) => {
          navigation.navigate(name);
        }}
        position="left"
      />
      <MIcon
        style={{
          color: "red",
          padding: 15,
          opacity: 0.8,
          position: "absolute",
          textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 3,
        }}
        name="logout"
        size={27}
        onPress={logout}
      />
    </View>
  );
};

export default observer(TripList);
