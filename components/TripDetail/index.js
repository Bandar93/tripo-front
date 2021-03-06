import { observer } from "mobx-react";
import { Spinner, Button } from "native-base";
import React from "react";
import { View, Text, Image } from "react-native";
import { baseURL } from "../../Stores/api";
import tripStore from "../../Stores/tripStore";

const TripDetail = ({ navigation, route }) => {
  if (tripStore.isLoading) return <Spinner />;
  const trip = route.params.trip;

  const Delete = () => {
    tripStore.deleteTrip(trip._id, navigation);
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {trip.name}
      </Text>
      <Image
        source={{ uri: baseURL + trip.image }}
        alt="Wrong IP!"
        style={{
          height: 500,
          width: "100%",
          borderRadius: 50,
          opacity: 0.8,
          borderWidth: 5,
          ShadowColor: "rgba(0, 0, 0, 0.75)",
          ShadowOffset: { width: -1, height: 1 },
          ShadowRadius: 3,
        }}
      />
      <Text
        style={{
          fontSize: 20,
        }}
      >
        {trip.description}
      </Text>
      <Text
        style={{
          fontSize: 15,
          opacity: 0.6,
        }}
      >
        {" "}
        Traveller: {trip.owner.username}
      </Text>

      <Button onPress={Delete}>delete trip</Button>
    </View>
  );
};

export default observer(TripDetail);
