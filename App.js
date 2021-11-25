import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./components/Navigation";
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
