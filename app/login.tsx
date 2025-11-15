import axios from "axios";

import { BASE_URL } from "@/constants/url";

import { useAuth } from "@/hooks/useAuth";

import { router } from "expo-router";

import { useState } from "react";

import { Eye, EyeOff } from "lucide-react-native";

import {
  Alert,
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

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();

  const handleLogin = async () => {
    if (!phone || !password) {
      return Alert.alert("Error", "Please enter both phone and password");
    }

    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/login`, {
        phone,
        password,
      });

      console.log("Login response:", res.data);

      const token = res.data?.token;

      if (!token) {
        return Alert.alert("Error", "Token not received from server");
      }

      await login(token);

      Alert.alert("Success", "Logged in successfully!");

      router.replace("/(app)/(tabs)");
    } catch (error: any) {
      console.log("Login Error:", error.response?.data || error);

      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Invalid phone or password";

      Alert.alert("Login Failed", message.toString());
    } finally {
      setLoading(false);
    }
  };

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

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#8e8e8e"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeButton}
            >
              {showPassword ? (
                <EyeOff size={22} color="#555" />
              ) : (
                <Eye size={22} color="#555" />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={styles.btnText}>
              {loading ? "Logging in..." : "Login"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={styles.link}>Dont have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 10,
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
  },

  eyeButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },

  btn: {
    backgroundColor: "#4687f0ff",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
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
});
