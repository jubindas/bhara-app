import useLocation from "@/hooks/useLocation";

import Services from "@/screens/services";

import { MaterialIcons } from "@expo/vector-icons";

import {
  ActivityIndicator,
  Image,
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
      <View style={styles.header}>
        <View style={styles.locationWrapper}>
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
          <MaterialIcons name="shopping-cart" size={45} color="#fff" />
        </View>

        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={22} color="#777" />
          <TextInput
            placeholder="Search services..."
            placeholderTextColor="#979090ff"
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
    paddingHorizontal: 16,
    backgroundColor: "rgba(0,0,0,0.45)",
    borderRadius: 16,
    width: "65%",
  },

  locationIconWrapper: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
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
    color: "#ffffffff",
    fontSize: 18,
    fontWeight: "700",
  },

  locationSub: {
    color: "#ffffffff",
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
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    elevation: 4,
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
    borderRadius: 16,
    marginTop: -60,
  },
});
