import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LayoutPanelLeft } from "lucide-react-native";

import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useRouter } from "expo-router";

export default function Services() {
  const router = useRouter();
  const categories = [
    { title: "Cars", icon: "car-sports", color: "#4d90e7" },
    { title: "Bikes", icon: "motorbike", color: "#ff7a5c" },
    { title: "Electrician", icon: "lightning-bolt-outline", color: "#ffb300" },
    { title: "Plumber", icon: "wrench", color: "#42a5f5" },
    { title: "Carpenter", icon: "hammer", color: "#8d6e63" },
    { title: "AC Repair", icon: "air-conditioner", color: "#26c6da" },
  ];

  return (
    <View style={styles.Container}>
      <View style={styles.titleRow}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <LayoutPanelLeft size={20} color="#4d90e7" />
          <Text style={styles.title}>Services</Text>
        </View>

        <Text style={styles.viewAll}>View All</Text>
      </View>

      <View style={styles.gridContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() =>
              router.push(`/service-details?id=${index}&name=${item.title}`)
            }
          >
            <View style={[styles.iconBox, { backgroundColor: item.color }]}>
              <MaterialCommunityIcons
                name={item.icon as any}
                size={30}
                color="#fff"
              />
            </View>
            <Text style={styles.label}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 12,
  },

  titleRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4d90e7",
  },

  viewAll: {
    fontSize: 14,
    color: "#0027c2",
    fontWeight: "600",
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "32%",
    height: 130,
    backgroundColor: "#fff",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});
