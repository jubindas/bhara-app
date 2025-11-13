import axios from "axios";

import { BASE_URL } from "@/constants/url";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useRouter } from "expo-router";

import { LayoutPanelLeft } from "lucide-react-native";

import React, { useEffect, useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Services() {

  const [categories, setCategories] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchcategories = async () => {
      
      const response = await axios.get(`${BASE_URL}/sub-categories`);
      const all = response.data;

      const categoryMap: any = {};
      all.forEach((item: any) => {
        const cat = item.category;
        if (cat && cat.id) categoryMap[cat.id] = cat;
      });

      setCategories(Object.values(categoryMap));
    };

    fetchcategories();
  }, []);

  return (
    <View style={styles.Container}>
      <View style={styles.titleRow}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <LayoutPanelLeft size={20} color="#4d90e7" />
          <Text style={styles.title}>Category</Text>
        </View>

        <Text style={styles.viewAll}>View All</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      >
        {categories.map((cat, index) => {
          const bg = pastelColors[index % 6];
          const iconBg = iconColors[index % 6];

          return (
            <TouchableOpacity
              key={cat.id}
              style={[styles.card, { backgroundColor: bg }]}
              activeOpacity={0.85}
              onPress={() =>
                router.push({
                  pathname: "/service-details",
                  params: { id: cat.id, name: cat.name },
                })
              }
            >
              <View style={[styles.iconBox, { backgroundColor: iconBg }]}>
                <MaterialCommunityIcons name="tools" size={28} color="#fff" />
              </View>

              <Text style={styles.label} numberOfLines={1}>
                {cat.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const pastelColors = [
  "#E3F2FF",
  "#E9F8DB",
  "#FFE8E8",
  "#FFF6DB",
  "#F1E8FF",
  "#E2FFF4",
];

const iconColors = [
  "#4A90E2",
  "#6BBE45",
  "#E94F4F",
  "#F2C94C",
  "#9B51E0",
  "#2CCDB5",
];

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
  },

  titleRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#5585d2ff",
  },

  viewAll: {
    fontSize: 14,
    color: "#0AA174",
    fontWeight: "600",
  },

  horizontalList: {
    paddingLeft: 20,
    paddingRight: 10,
  },

  card: {
    width: 120,
    height: 150,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
    paddingVertical: 10,
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginTop: 5,
    textAlign: "center",
    width: "90%",
  },
});
