import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../Home/Signin";
import Signup from "../Home/Signup";
import TripList from "../TripList";
import TripDetail from "../TripDetail";

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
        }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={{
          title: "Details",
          headerStyle: { backgroundColor: "#F6F2EB" },
          headerTintColor: "#5E5E5A",
          headerTitleAlign: "center",
        }}
      />
    </Navigator>
  );
};

export default Navigation;
