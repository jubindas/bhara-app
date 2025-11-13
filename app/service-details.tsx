import axios from "axios";

import { useLocalSearchParams } from "expo-router";

import { useEffect, useState } from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { BASE_URL } from "@/constants/url";

export default function ServiceDetails() {
  
  const { id, name } = useLocalSearchParams();

  const [subCategory, setSubCategory] = useState<any[]>([]);

  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    const fetchcategories = async () => {
      const response = await axios.get(`${BASE_URL}/sub-categories`);
      setSubCategory(response.data);

      const filtered = response.data.filter(
        (item: any) => String(item.category_id) === String(id)
      );

      setFilteredData(filtered);
    };

    fetchcategories();
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{name}</Text>
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <View style={styles.row}>
                <View style={styles.iconBox}>
                  <Text style={styles.iconText}>🚗</Text>
                </View>

                <View style={styles.textBox}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Text style={styles.cardDesc}>{item.description}</Text>

                  <Text style={styles.cardMobile}>+91 9878987676</Text>
                </View>

                <Text style={styles.arrow}>›</Text>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={{ marginTop: 20, fontSize: 16, color: "#666" }}>
              No sub-categories found.
            </Text>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#8dbeffff",
  },
  titleWrapper: {
    width: 300,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    borderRadius: 18,
    marginTop: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    alignItems: "center",
  },

  cardMobile: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },

  titleText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000000ff",
  },

  cardContainer: {
    backgroundColor: "#fff",
    padding: 15,
    paddingBottom: 40,
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 30,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#eef5ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  iconText: {
    fontSize: 26,
    marginBottom: 5,
  },

  textBox: {
    flex: 1,
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  cardDesc: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  arrow: {
    fontSize: 28,
    color: "#aaa",
    marginLeft: 10,
  },

  badgeWrapper: {
    marginTop: 10,
  },
  badge: {
    backgroundColor: "#2C6CBF",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
});
