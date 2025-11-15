import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UserScreen() {
  const { user, logout } = useAuth();

  console.log(user, "the user is");

  return (
    <View style={styles.container}>
      {!user ? (
        <>
          <Text style={styles.title}>You are not logged in</Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Welcome!</Text>

          <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
            <Text style={styles.logoutBtnText}>Logout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  info: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },

  tokenBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    width: "90%",
    textAlign: "center",
  },

  btn: {
    backgroundColor: "#4687f0ff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 10,
  },

  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  logoutBtn: {
    backgroundColor: "#ff4b4b",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 30,
  },

  logoutBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
