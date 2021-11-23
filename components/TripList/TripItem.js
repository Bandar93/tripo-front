import { observer } from "mobx-react";

import React from "react";
import { View, Text, Image } from "react-native";
import { baseURL } from "../../Stores/api";

const TripItem = ({ trip, navigation }) => {
  return (
    <View>
      <Text
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 50,
          marginLeft: 50,
          color: "#5E5E5A",
        }}
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        {trip.name}
      </Text>
      <Image
        source={{ uri: baseURL + trip.image }}
        style={{
          height: "80%",
          width: "90%",
          borderRadius: 30,
          margin: 40,
          padding: 30,
          opacity: 0.8,
          borderColor: "black",
          borderTopWidth: 5,
        }}
      />
    </View>
  );
};

export default observer(TripItem);
