import { router } from "expo-router";
import { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("@/assets/bhara-img/carSignup.png")}
          style={styles.topImage}
          imageStyle={{ opacity: 0.85 }}
        />

        <View style={styles.card}>
          <Text style={styles.title}>Welcome Back</Text>

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#8e8e8e"
            value={phone}
            onChangeText={setPhone}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#8e8e8e"
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={styles.link}>Dont have an account? Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/(app)/(tabs)/index")}>
            <Text style={styles.skip}>Skip for now →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  topImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "50%",
    width: "100%",
    marginTop: 30,
  },

  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 20,

    elevation: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 10,

    marginTop: "65%",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 25,
    color: "#333",
  },

  input: {
    backgroundColor: "#f5f5f5",
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e2e2e2",
  },

  btn: {
    backgroundColor: "#4687f0ff",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#6d85e4ff",
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  link: {
    marginTop: 20,
    color: "#4a6cf7",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },

  skip: {
    marginTop: 18,
    textAlign: "center",
    fontSize: 15,
    color: "#777",
    fontWeight: "500",
  },
});
