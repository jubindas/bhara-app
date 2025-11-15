import useLocation from "@/hooks/useLocation";

import Services from "@/screens/services";

import { MaterialIcons } from "@expo/vector-icons";

import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  
  const { location, loading } = useLocation();

  

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require("@/assets/bhara-img/hero.png")}
        style={styles.hero}
        resizeMode="cover"
      >
        <View style={styles.locationWrapper}>
          {loading ? (
            <View style={styles.loaderCircle}>
              <ActivityIndicator size="small" color="#fff" />
            </View>
          ) : (
            <MaterialIcons name="location-on" size={30} color="#fff" />
          )}

          <View>
            <Text style={styles.locationMain}>
              {loading ? "Detecting location..." : location.city}
            </Text>

            {!loading && (
              <Text style={styles.locationSub}>
                {location.district}, {location.state}
              </Text>
            )}
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
    gap: 8,
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  loaderCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },

  locationMain: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 2,
  },

  locationSub: {
    color: "#eee",
    fontSize: 12,
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
    backgroundColor: "rgba(243,243,243,0.92)",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 5,
  },

  input: {
    marginLeft: 10,
    fontSize: 16,
    width: "90%",
    color: "#000",
  },
});
