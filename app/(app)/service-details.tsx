import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useLocalSearchParams } from "expo-router";

import React from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ServiceDetails() {

  const { name } = useLocalSearchParams();

  const staticData: any = {
    Cars: [
      {
        id: 1,
        title: "Car Wash",
        desc: "Exterior & interior deep cleaning",
        icon: "car-wash",
      },
      {
        id: 2,
        title: "Car Service",
        desc: "Engine service & oil change",
        icon: "car-wrench",
      },
      {
        id: 3,
        title: "Wheel Alignment",
        desc: "Alignment and wheel balancing",
        icon: "tire",
      },
    ],
    Bikes: [
      {
        id: 1,
        title: "Bike Wash",
        desc: "Foam wash + shine polish",
        icon: "motorbike",
      },
      {
        id: 2,
        title: "Bike Repair",
        desc: "Full servicing and tune-up",
        icon: "tools",
      },
    ],
    Electrician: [
      {
        id: 1,
        title: "Fan Repair",
        desc: "Installation & repair services",
        icon: "fan",
      },
      {
        id: 2,
        title: "Switch Board",
        desc: "Fix wiring & switchboard issues",
        icon: "flash",
      },
    ],
    Plumber: [
      {
        id: 1,
        title: "Pipe Leakage",
        desc: "Leakage fix & pipeline repair",
        icon: "pipe-leak",
      },
      {
        id: 2,
        title: "Tap Repair",
        desc: "Kitchen/bath taps repair",
        icon: "water",
      },
    ],
    Carpenter: [
      {
        id: 1,
        title: "Furniture Repair",
        desc: "Door, chair, table fixing",
        icon: "hammer",
      },
    ],
    "AC Repair": [
      {
        id: 1,
        title: "AC Service",
        desc: "Deep cleaning + gas check",
        icon: "air-conditioner",
      },
      {
        id: 2,
        title: "AC Installation",
        desc: "Window & Split installation",
        icon: "tools",
      },
    ],
  };

  const items = staticData[name as any] || [];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{name}</Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 18 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.row}>
              <View style={styles.iconBox}>
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={26}
                  color="#2D6AE7"
                />
              </View>

              <View style={styles.textBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                <Text style={styles.phone}>📞 +91 9878987676</Text>
              </View>

              <Text style={styles.arrow}>›</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.noData}>No services found.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F7FB" },

  header: {
    paddingVertical: 18,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1A1A1A",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,

    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },

    borderWidth: 1,
    borderColor: "#E8E8E8",
  },

  row: { flexDirection: "row", alignItems: "center" },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#EAF0FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  textBox: { flex: 1 },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
  },

  desc: {
    fontSize: 14,
    color: "#555",
    marginTop: 3,
  },

  phone: {
    marginTop: 6,
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
  },

  arrow: {
    fontSize: 26,
    color: "#B5B5B5",
    marginLeft: 10,
  },

  noData: {
    marginTop: 40,
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
});
