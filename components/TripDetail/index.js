
import { observer } from "mobx-react";
import { Center, Spinner } from "native-base";
import React from "react";
import { View, Text, Image, Button } from "react-native";
import { baseURL } from "../../Stores/api";
import tripStore from "../../Stores/tripStore";
import addTrip from "../../Stores/tripStore";
import deleteTrip from "../../Stores/tripStore";

const TripDetail = ({ navigation, route }) => {
  if (tripStore.isLoading) return <Spinner />;
  const trip = route.params.trip;
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Name: {trip.name}
        {"\n"}
        Description: {trip.description}
        {"\n"}
        Owner: {trip.owner.username}
      </Text>
      <Image
        source={{ uri: baseURL + trip.image }}
        style={{
          height: 500,
          width: "100%",
          borderRadius: 50,
          opacity: 0.4,
          borderWidth: 5,
        }}
      />

      <Button onPress={addTrip}>Add trip</Button>

      <Button onPress={deleteTrip}>delete trip</Button>
    </View>
  );
};

export default observer(TripDetail);

