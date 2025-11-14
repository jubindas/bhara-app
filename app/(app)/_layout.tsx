import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";

import "react-native-reanimated";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden={false} style="dark" />

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="service-details"
          options={{
            title: "Service Details",
            headerShown: true,
          }}
        />
      </Stack>
    </>
  );
}
