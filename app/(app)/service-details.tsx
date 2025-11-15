import { router, useLocalSearchParams } from "expo-router";

import { ArrowLeft, Heart, Share2 } from "lucide-react-native";

import React from "react";

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type ServiceItem = {
  id: number;
  title: string;
  desc: string;
  icon: string;
};

export default function ServiceDetails() {
  const { name } = useLocalSearchParams();

  const staticData: Record<string, ServiceItem[]> = {
    Cars: [
      {
        id: 1,
        title: "Car Wash",
        desc: "Complete exterior and interior deep cleaning with vacuuming, polishing, and shine finish.",
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
  };

  const items = staticData[name as keyof typeof staticData] || [];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <ArrowLeft size={22} color="#1A1A1A" style={{ marginTop: 3 }} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{name}</Text>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Share2 size={22} color="#1A1A1A" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Heart size={22} color="#E63946" />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 18 }}
        ListEmptyComponent={
          <Text style={styles.noData}>No services found.</Text>
        }
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <View style={styles.row}>
                <Image
                  source={require("@/assets/bhara-img/image2.png")}
                  style={styles.image}
                />

                <View style={styles.textBox}>
                  <Text style={styles.title}>{item.title}</Text>

                  <Text
                    style={styles.desc}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.desc}
                  </Text>

                  <TouchableOpacity
                    style={styles.vendorBtn}
                    onPress={() => {
                      router.push({
                        pathname: "/(app)/vendors-details",
                        params: {
                          name: name,
                        },
                      });
                    }}
                  >
                    <Text style={styles.vendorBtnText}>Vendors</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.arrow}>›</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F7FB" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 18,
    paddingHorizontal: 18,
    backgroundColor: "#FFFFFF",
    elevation: 4,
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    height: 100,
  },

  backBtn: {
    backgroundColor: "#E3E6F2",
    padding: 10,
    borderRadius: 10,
  },

  headerTitle: {
    flex: 1,
    marginLeft: 14,
    fontSize: 24,
    fontWeight: "700",
    color: "#1A1A1A",
  },

  rightIcons: { flexDirection: "row" },

  iconBtn: {
    marginLeft: 12,
    backgroundColor: "#F1F4FF",
    padding: 8,
    borderRadius: 10,
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 20,
    marginBottom: 18,
    elevation: 3,
    borderColor: "#E6ECF5",
    borderWidth: 1,
  },

  row: { flexDirection: "row", alignItems: "center" },

  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginRight: 14,
  },

  textBox: { flex: 1 },

  title: { fontSize: 18, fontWeight: "700", color: "#1A1A1A" },

  desc: { fontSize: 14, color: "#555", marginTop: 4, lineHeight: 20 },

  noData: { marginTop: 40, fontSize: 16, textAlign: "center", color: "#555" },

  vendorBtn: {
    marginTop: 8,
    backgroundColor: "#2D6AE7",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  vendorBtnText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },

  arrow: { fontSize: 26, color: "#bbb" },
});
