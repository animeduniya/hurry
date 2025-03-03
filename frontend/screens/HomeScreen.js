import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Blinkit Clone</Text>
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Cart", { item })}>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 10 }} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                <Text style={{ fontSize: 16, color: "green" }}>₹{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
