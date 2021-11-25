import { observer } from "mobx-react";
import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { baseURL } from "../../Stores/api";

const TripItem = ({ trip, navigation }) => {
  return (
    <View>
      <Text
        style={{
          position: "absolute",
          top: 10,
          left: 31,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20,
          color: "#5E5E5A",
          width: 15,
          fontWeight: "bold",
          fontVariant: ["small-caps"],
          textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 2,
        }}
      >
        {trip.name}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        <Image
          source={{ uri: baseURL + trip.image }}
          alt="Wrong IP!"
          style={{
            height: "90%",
            width: "90%",
            borderRadius: 30,
            margin: 30,
            padding: 30,
            opacity: 0.7,
            borderColor: "black",
            borderTopWidth: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default observer(TripItem);
