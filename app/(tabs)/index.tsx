import Services from "@/screens/services";

import { MaterialIcons } from "@expo/vector-icons";

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require("@/assets/bhara-img/hero.png")}
        style={styles.hero}
        resizeMode="cover"
      >
        <View style={styles.locationWrapper}>
          <MaterialIcons name="location-on" size={30} color="#fff" />
          <View>
            <Text style={styles.locationMain}>Nazira</Text>
            <Text style={styles.locationSub}>Sivasagar, Assam - 785685</Text>
          </View>
        </View>

        <View style={styles.cart}>
          <MaterialIcons name="shopping-cart" size={40} color="#fff" />
        </View>

        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={22} color="#777" />
          <TextInput
            placeholder="Search services..."
            placeholderTextColor="#979090ff"
            style={styles.input}
          />
        </View>
      </ImageBackground>

      <View style={{ paddingHorizontal: 10 }}>
        <Services />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 400,
    width: "100%",
  },

  locationWrapper: {
    position: "absolute",
    top: 40,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  locationMain: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 2,
  },

  locationSub: {
    color: "#eee",
    fontSize: 12,
    marginRight: 20,
  },

  cart: {
    position: "absolute",
    top: 50,
    right: 20,
  },

  searchBar: {
    position: "absolute",
    top: 120,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(243, 243, 243, 0.9)",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 5,
  },

  input: {
    marginLeft: 10,
    fontSize: 16,
    width: "90%",
    color: "#000000ff",
  },
});
