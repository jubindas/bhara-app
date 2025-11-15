import { router } from "expo-router";

import { useEffect, useRef } from "react";

import { Animated, StyleSheet, View } from "react-native";

import { useAuth } from "@/hooks/useAuth";

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const { user, loading } = useAuth();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        if (loading) return;

        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          if (user) {
            router.replace("/(app)/(tabs)");
          } else {
            router.replace("/login");
          }
        });
      }, 900);
    });
  }, [fadeAnim, user, loading]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Bhara
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "green",
    letterSpacing: 1,
  },
});
