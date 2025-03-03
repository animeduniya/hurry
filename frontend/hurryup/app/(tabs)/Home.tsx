import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const categories = [
  { id: 1, name: "Fruits", image: "https://source.unsplash.com/100x100/?fruits" },
  { id: 2, name: "Vegetables", image: "https://source.unsplash.com/100x100/?vegetables" },
  { id: 3, name: "Dairy", image: "https://source.unsplash.com/100x100/?milk" },
  { id: 4, name: "Snacks", image: "https://source.unsplash.com/100x100/?snacks" },
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to HurryUp!</Text>
      
      {/* Category List */}
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Product List */}
      <FlatList
        data={[1, 2, 3, 4, 5]}
        numColumns={2}
        renderItem={() => (
          <View style={styles.productCard}>
            <Image source={{ uri: "https://source.unsplash.com/100x100/?grocery" }} style={styles.image} />
            <Text style={styles.productName}>Fresh Apples</Text>
            <Text style={styles.price}>₹99/kg</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addText}>ADD</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  categoryCard: { alignItems: "center", marginRight: 10 },
  image: { width: 80, height: 80, borderRadius: 10 },
  categoryText: { marginTop: 5, fontSize: 14 },
  productCard: { flex: 1, padding: 10, margin: 5, backgroundColor: "#f8f8f8", borderRadius: 10 },
  productName: { fontWeight: "bold" },
  price: { color: "green" },
  addButton: { backgroundColor: "#FFCC00", padding: 5, borderRadius: 5, alignItems: "center" },
  addText: { fontWeight: "bold" },
});
