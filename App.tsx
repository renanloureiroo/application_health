import React from "react";
import { StatusBar } from "expo-status-bar";
import { HomeScreen } from "./app/screens/Home";
import { FormScreen } from "./app/screens/Form";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <FormScreen />
    </SafeAreaProvider>
  );
}
