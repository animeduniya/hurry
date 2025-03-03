import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const orders = [
  { id: 1, name: "Apple", status: "Delivered", date: "Mar 1, 2025" },
  { id: 2, name: "Milk", status: "Out for Delivery", date: "Mar 2, 2025" },
];

export default function Orders() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order History</Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.status}>{item.status}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  orderCard: { padding: 10, backgroundColor: "#f8f8f8", marginBottom: 10, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: "bold" },
  status: { color: "blue" },
  date: { color: "gray" },
});
