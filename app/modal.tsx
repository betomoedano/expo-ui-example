import { StyleSheet, useColorScheme } from "react-native";

import { Text, View } from "@/components/Themed";

export default function ModalScreen() {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#1C1C1E" : "#F2F2F7" },
      ]}
    >
      <Text>Modal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
