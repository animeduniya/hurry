import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const products = [
  { id: 1, name: "Apple", price: "₹99/kg", image: "https://source.unsplash.com/100x100/?apple" },
  { id: 2, name: "Banana", price: "₹50/kg", image: "https://source.unsplash.com/100x100/?banana" },
  { id: 3, name: "Milk", price: "₹60/L", image: "https://source.unsplash.com/100x100/?milk" },
];

export default function Search() {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for products..."
        onChangeText={(text) => setQuery(text)}
      />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  searchBar: { height: 40, borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  productCard: { flexDirection: "row", padding: 10, backgroundColor: "#f8f8f8", marginBottom: 10, borderRadius: 8 },
  image: { width: 60, height: 60, marginRight: 10 },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { color: "green" },
});
