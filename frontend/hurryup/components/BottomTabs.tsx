import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../app/(tabs)/Home";
import Search from "../app/(tabs)/Search";
import Cart from "../app/(tabs)/Cart";
import Orders from "../app/(tabs)/Orders";
import Profile from "../app/(tabs)/Profile";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = "home-outline";
            else if (route.name === "Search") iconName = "search-outline";
            else if (route.name === "Cart") iconName = "cart-outline";
            else if (route.name === "Orders") iconName = "list-outline";
            else if (route.name === "Profile") iconName = "person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
