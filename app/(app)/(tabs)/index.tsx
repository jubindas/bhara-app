import React, { useState } from "react";

import { useLocationContext } from "@/context/LocationContext";

import ManualLocationModal from "@/screens/ManualLocationModal";

import Services from "@/screens/services";

import { MaterialIcons } from "@expo/vector-icons";


import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {

  const locationCtx = useLocationContext();

  const {
    finalLocation = {
      city: "",
      district: "",
      state: "",
      pincode: "",
    },
    manualLocation = {
      city: "",
      district: "",
      state: "",
      pincode: "",
    },
    setManualLocation = () => {},
    loading = false,
  } = locationCtx ?? {};

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.locationWrapper}
          activeOpacity={0.7}
          onPress={() => setModalVisible(true)}
        >
          {loading ? (
            <View style={styles.loaderCircle}>
              <ActivityIndicator size="small" color="#000" />
            </View>
          ) : (
            <View style={styles.locationIconWrapper}>
              <MaterialIcons name="location-on" size={39} color="#fff" />
            </View>
          )}

          <View>
            <Text style={styles.locationMain}>
              {loading ? "Loading..." : finalLocation.city}
            </Text>

            {!loading && (
              <Text style={styles.locationSub}>
                {finalLocation.district}, {finalLocation.state} -{" "}
                {finalLocation.pincode}
              </Text>
            )}
          </View>

          <MaterialIcons
            name="keyboard-arrow-down"
            size={22}
            color="#fff"
            style={{ marginLeft: "auto", marginTop: 20 }}
          />
        </TouchableOpacity>

        <View style={styles.cart}>
          <MaterialIcons name="shopping-cart" size={45} color="#fff" />
        </View>

        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={22} color="#777" />
          <TextInput
            placeholder="Search services..."
            placeholderTextColor="#9a8c8cff"
            style={styles.input}
          />
        </View>
      </View>

      <Image
        source={require("@/assets/bhara-img/image4.png")}
        style={styles.banner}
        resizeMode="cover"
      />

      <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
        <Services />
      </View>

      <ManualLocationModal
        visible={modalVisible}
        initialData={manualLocation}
        onClose={() => setModalVisible(false)}
        onSave={(data) => setManualLocation(data)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#96D5FF",
    paddingBottom: 90,
    paddingTop: 40,
    paddingHorizontal: 20,
    position: "relative",
  },

  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.45)",
    borderRadius: 16,
    width: "75%",
  },

  locationIconWrapper: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
  },

  loaderCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  locationMain: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  locationSub: {
    color: "#fff",
    fontSize: 13,
    marginTop: 2,
  },

  cart: {
    position: "absolute",
    top: 45,
    right: 20,
  },

  searchBar: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.93)",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
  },

  input: {
    marginLeft: 10,
    fontSize: 16,
    width: "90%",
    color: "#000",
  },

  banner: {
    width: "100%",
    height: 220,
    borderRadius: 29,
    marginTop: -60,
  },
});
