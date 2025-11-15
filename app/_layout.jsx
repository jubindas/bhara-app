import { Stack } from "expo-router";

import { AuthProvider } from "./../context/AuthContext";

import { LocationProvider } from "./../context/LocationContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <LocationProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splash" />
          <Stack.Screen name="(app)/(tabs)" />
          <Stack.Screen name="login" />
          <Stack.Screen name="signup" />
        </Stack>
      </LocationProvider>
    </AuthProvider>
  );
}
