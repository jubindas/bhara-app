import { useAuth } from "@/hooks/useAuth";

import { Redirect, Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";

import { Text, View } from "react-native";

import "react-native-reanimated";

export default function RootLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>Loading...</Text>
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <>
      <StatusBar hidden={false} style="dark" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="service-details"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="vendors-details"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
