import React from "react";
import { View, Text, Button } from "react-native";

export default function CartScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Cart</Text>
      <Text style={{ fontSize: 20 }}>{item.name}</Text>
      <Text style={{ fontSize: 18, color: "green" }}>₹{item.price}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
