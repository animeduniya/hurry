import React from "react";
import { SafeAreaView } from "react-native";
import BottomTabs from "./components/BottomTabs";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BottomTabs />
    </SafeAreaView>
  );
}
