import { Ionicons } from "@expo/vector-icons";

import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function PullCar() {
  const [pickup, setPickup] = useState("");

  const [drop, setDrop] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pull Car Service</Text>
      <Text style={styles.subtitle}>Book your journey instantly</Text>

      <View style={styles.card}>
        <View style={styles.inputWrapper}>
          <Ionicons name="location-outline" size={20} color="#444" />
          <TextInput
            style={styles.input}
            placeholder="Enter Pickup Location"
            value={pickup}
            onChangeText={setPickup}
            placeholderTextColor="#777"
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.inputWrapper}>
          <Ionicons name="flag-outline" size={20} color="#444" />
          <TextInput
            style={styles.input}
            placeholder="Enter Drop Location"
            value={drop}
            onChangeText={setDrop}
            placeholderTextColor="#777"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Find Pull Car</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#96D5FF",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1A1A1A",
  },

  subtitle: {
    fontSize: 16,
    marginTop: 6,
    color: "#3A3A3A",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 14,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    paddingVertical: 6,
  },

  divider: {
    height: 1,
    backgroundColor: "#E4E4E4",
    marginVertical: 10,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#1A1A1A",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
