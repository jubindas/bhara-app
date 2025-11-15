import { useRouter } from "expo-router";

import { LayoutPanelLeft } from "lucide-react-native";

import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Services() {
  
  const router = useRouter();

  const categories = [
    { title: "Cars", image: require("@/assets/icons2-img/car.png") },
    { title: "Bikes", image: require("@/assets/icons2-img/bike.png") },
    {
      title: "Electrician",
      image: require("@/assets/icons2-img/electrician.png"),
    },
    { title: "Plumber", image: require("@/assets/icons2-img/plumber.png") },
    { title: "Carpenter", image: require("@/assets/icons2-img/carpenter.png") },
    { title: "Make Up", image: require("@/assets/icons2-img/makeup.png") },
  ];

  //   const categories = [
  //   { title: "Cars", image: require("@/assets/icons-img/car.png") },
  //   { title: "Bikes", image: require("@/assets/icons-img/bike.png") },
  //   { title: "Electrician", image: require("@/assets/icons-img/electrician.png") },
  //   { title: "Plumber", image: require("@/assets/icons-img/plumber.png") },
  //   { title: "Carpenter", image: require("@/assets/icons-img/carpenter.png") },
  //   { title: "Make Up", image: require("@/assets/icons-img/makeup.png") },
  // ];

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
            <View style={styles.iconWrapper}>
              <Image source={item.image} style={styles.iconImage} />
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
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 8,
    paddingBottom: 6,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  iconWrapper: {
    width: 70,
    height: 70,
    borderRadius: 18,
    backgroundColor: "#f5f7fa", 
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    overflow: "hidden",
  },

  iconImage: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});
