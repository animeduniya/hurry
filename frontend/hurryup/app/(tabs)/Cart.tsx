import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const cartItems = [
  { id: 1, name: "Apple", price: "₹99/kg", image: "https://source.unsplash.com/100x100/?apple", qty: 1 },
  { id: 2, name: "Milk", price: "₹60/L", image: "https://source.unsplash.com/100x100/?milk", qty: 2 },
];

export default function Cart() {
  const [cart, setCart] = useState(cartItems);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.qty}>Qty: {item.qty}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { flexDirection: "row", padding: 10, backgroundColor: "#f8f8f8", marginBottom: 10, borderRadius: 8 },
  image: { width: 60, height: 60, marginRight: 10 },
  details: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { color: "green" },
  qty: { color: "gray" },
  checkoutButton: { backgroundColor: "#FFCC00", padding: 15, alignItems: "center", borderRadius: 5 },
  checkoutText: { fontWeight: "bold" },
});
