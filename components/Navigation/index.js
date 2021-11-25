import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../Home/Signin";
import Signup from "../Home/Signup";
import TripList from "../TripList";
import TripDetail from "../TripDetail";
import Profile from "../Profile";
import CreateTrip from "../CreateTrip";
import { Image } from "react-native";
import { Container } from "native-base";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="TripList">
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen name="Signup" component={Signup} />
      <Screen
        name="TripList"
        component={TripList}
        options={{
          title: "Tripo's Trips List",
          headerStyle: { backgroundColor: "#F6F2EB" },
          headerTintColor: "#5E5E5A",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={{
          title: " ",
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Update Your Profile",
          headerTintColor: "white",
          headerTitleStyle: {
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: -7, height: 1 },
            textShadowRadius: 4,
          },
          headerBackground: () => (
            <Image
              resizeMode="cover"
              source={{
                uri: "https://c0.wallpaperflare.com/preview/78/461/309/moleskine-journal-notebook-writing.jpg",
              }}
              style={{
                height: 80,
                width: "100%",
              }}
            />
          ),
        }}
      />
      <Screen
        name="CreateTrip"
        component={CreateTrip}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Create a Trip",
          headerTintColor: "white",
          headerTitleStyle: {
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 2,
          },
          headerBackground: () => (
            <Image
              resizeMode="cover"
              source={{ uri: "https://wallpaperaccess.com/full/1318082.jpg" }}
              style={{
                height: 80,
                width: "100%",
              }}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default Navigation;
