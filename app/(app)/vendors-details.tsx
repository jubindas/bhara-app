import { router, useLocalSearchParams } from "expo-router";

import { ArrowLeft, Heart, Share2 } from "lucide-react-native";

import React, { useState } from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Vendors = {
  name: string;
  desc: string;
  mobile_number: string;
};

const vendorsData: Vendors[] = [
  {
    name: "A1 Auto Shine",
    desc: "Premium exterior & interior deep cleaning service",
    mobile_number: "+91 9876543210",
  },
  {
    name: "Clean & Drive Pro",
    desc: "Foam wash, vacuuming, waxing & polishing",
    mobile_number: "+91 9123456789",
  },
  {
    name: "Speed Garage",
    desc: "Full car servicing, oil change, engine tune-up",
    mobile_number: "+91 9988776655",
  },
  {
    name: "AutoFix Center",
    desc: "Brake check, filter replacement & engine inspection",
    mobile_number: "+91 8877665544",
  },
];

export default function VendorsDetails() {
  const { name } = useLocalSearchParams();

  const [visibleNumbers, setVisibleNumbers] = useState<number[]>([]);

  const toggleNumber = (index: number) => {
    setVisibleNumbers((prev) =>
      prev.includes(index)
        ? prev.filter((id) => id !== index)
        : [...prev, index]
    );
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <ArrowLeft size={22} color="#1A1A1A" />
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
        data={vendorsData}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 18 }}
        ListEmptyComponent={
          <Text style={styles.noData}>No Vendors Available</Text>
        }
        renderItem={({ item, index }) => {
          const isVisible = visibleNumbers.includes(index);

          return (
            <View style={styles.vendorCard}>
              <Text style={styles.vendorName}>{item.name}</Text>

              <Text style={styles.vendorDesc} numberOfLines={2}>
                {item.desc}
              </Text>

              <View style={styles.bottomRow}>
                <TouchableOpacity
                  style={styles.callBtn}
                  onPress={() => toggleNumber(index)}
                >
                  <Text style={styles.callBtnText}>
                    {isVisible ? "Hide Number" : "Show Number"}
                  </Text>
                </TouchableOpacity>

                {isVisible && (
                  <Text style={styles.vendorMobile}>{item.mobile_number}</Text>
                )}
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

  vendorCard: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    borderWidth: 1,
    borderColor: "#E4E6EB",
  },

  vendorName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
  },

  vendorDesc: {
    fontSize: 14,
    color: "#555",
    marginTop: 6,
    lineHeight: 20,
  },

  bottomRow: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  callBtn: {
    backgroundColor: "#2D6AE7",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  callBtnText: {
    color: "#FFF",
    fontWeight: "700",
  },

  vendorMobile: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },

  noData: {
    marginTop: 40,
    textAlign: "center",
    color: "#777",
    fontSize: 16,
  },
});
