import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export default function usePushNotifications() {
  useEffect(() => {
    async function registerForPushNotifications() {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        const { status: newStatus } = await Notifications.requestPermissionsAsync();
        if (newStatus !== "granted") return;
      }

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log("Expo Push Token:", token);
    }

    if (Platform.OS !== "web") {
      registerForPushNotifications();
    }
  }, []);
}
