import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";
import usePushNotifications from "./notifications/PushNotifications";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import LiveTracking from "./pages/LiveTracking";
import * as Location from "expo-location";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const theme = useTheme();
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  return (
    <View style={theme === "dark" ? styles.darkContainer : styles.lightContainer}>
      <Text style={theme === "dark" ? styles.darkText : styles.lightText}>🚀 Welcome to HurryUp</Text>
      <Text style={styles.smallText} onPress={getLocation}>📍 Get My Location</Text>
      {location && <Text>Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}</Text>}
    </View>
  );
}

export default function App() {
  usePushNotifications();

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const icons = {
                Home: "home",
                Search: "search",
                Cart: "cart",
                Orders: "list",
                Profile: "person",
                Tracking: "map",
              };
              return <Ionicons name={icons[route.name]} size={size} color={color} />;
            },
            tabBarStyle: { backgroundColor: "#000" },
            tabBarActiveTintColor: "#ffcc00",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Orders" component={Orders} />
          <Tab.Screen name="Tracking" component={LiveTracking} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  darkContainer: { flex: 1, backgroundColor: "#121212", justifyContent: "center", alignItems: "center" },
  lightContainer: { flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" },
  darkText: { color: "#fff", fontSize: 20 },
  lightText: { color: "#000", fontSize: 20 },
  smallText: { color: "#007AFF", fontSize: 16, marginTop: 10 },
});
