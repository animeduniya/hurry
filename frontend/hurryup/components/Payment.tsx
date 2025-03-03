import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import RazorpayCheckout from "react-native-razorpay";

export default function Payment() {
  const handlePayment = () => {
    const options = {
      description: "Grocery Payment",
      image: "https://yourlogo.com/logo.png",
      currency: "INR",
      key: "rzp_test_yourapikey", // Replace with your Razorpay API Key
      amount: 5000, // 50 INR
      name: "HurryUp",
      prefill: {
        email: "customer@example.com",
        contact: "9999999999",
        name: "John Doe",
      },
      theme: { color: "#FFCC00" },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        Alert.alert("Success", `Payment ID: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        Alert.alert("Error", error.description);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Complete Your Payment</Text>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pay Now ₹50</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "#FFCC00", padding: 15, borderRadius: 5 },
  buttonText: { fontWeight: "bold" },
});
