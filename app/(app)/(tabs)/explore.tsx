import { Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 40,
          color: "#222",
        }}
      >
        explorer
      </Text>
    </View>
  );
}
