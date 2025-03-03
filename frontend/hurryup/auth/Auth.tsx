import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { getAuth, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "yourapp.firebaseapp.com",
  projectId: "yourapp",
  storageBucket: "yourapp.appspot.com",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Auth() {
  const [user, setUser] = useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential).then((result) => setUser(result.user));
    }
  }, [response]);

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Image source={{ uri: user.photoURL }} style={styles.profilePic} />
          <Text style={styles.text}>Welcome, {user.displayName}</Text>
        </>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  profilePic: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  text: { fontSize: 18, fontWeight: "bold" },
  button: { backgroundColor: "#4285F4", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
