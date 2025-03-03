import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Profile</Text>
      <Text style={styles.info}>👤 Name: John Doe</Text>
      <Text style={styles.info}>📧 Email: john@example.com</Text>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  info: { fontSize: 16, marginBottom: 10 },
  logoutButton: { backgroundColor: "red", padding: 10, borderRadius: 5 },
  logoutText: { color: "white", fontWeight: "bold" },
});
