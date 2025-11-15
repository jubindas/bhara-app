import axios from "axios";

import { router } from "expo-router";

import { useState } from "react";

import { BASE_URL } from "@/constants/url";

import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Eye, EyeOff } from "lucide-react-native";

export default function Signup() {
  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async () => {
    if (!name || !phone || !password || !confirmPassword) {
      return Alert.alert("Error", "All fields are required");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Error", "Passwords do not match!");
    }

    if (password.length < 8) {
      return Alert.alert("Error", "Password must be at least 8 characters");
    }

    const payload = {
      name,
      phone,
      password,
      password_confirmation: confirmPassword,
      role: "User",
    };

    console.log("payload sent:", payload);

    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/register`, payload, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("API Response:", res.data);

      Alert.alert("Success", "Account created successfully!");
      router.push("/login");
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.errors ||
        error?.message ||
        "Something went wrong";

      console.log("Register error:", message);

      Alert.alert("Registration Failed", message?.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/bhara-img/carSignup.png")}
        style={styles.topImage}
        imageStyle={{ opacity: 0.85 }}
      />

      <View style={styles.card}>
        <Text style={styles.title}>Create Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#8e8e8e"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#8e8e8e"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
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
              <Eye size={22} color="#555" />
            ) : (
              <EyeOff size={22} color="#555" />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            placeholderTextColor="#8e8e8e"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeButton}
          >
            {showConfirmPassword ? (
              <Eye size={22} color="#555" />
            ) : (
              <EyeOff size={22} color="#555" />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>
            {loading ? "Creating..." : "Sign Up"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  btnText: { color: "white", fontSize: 18, fontWeight: "700" },
  link: {
    marginTop: 20,
    color: "#4a6cf7",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },
});
