import { SafeAreaView, StyleSheet, View, useColorScheme } from "react-native";
import { useRouter } from "expo-router";
import { Buttons } from "@/components/Buttons";
import { Pickers } from "@/components/Pickers";
import { Picker } from "@expo/ui/components/Picker";
import { useState } from "react";
import { ContextMenus } from "@/components/ContextMenus";
import { Sections } from "@/components/Sections";
/**
 *
 * Notes
 *
 * Loading state is not supported
 * Disabled state is not supported
 *
 */

export default function Index() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container]}>
        <Picker
          options={["Buttons", "Picker", "Context Menu", "Section", "Checkbox"]}
          selectedIndex={selectedIndex}
          onOptionSelected={({ nativeEvent: { index } }) => {
            setSelectedIndex(index);
          }}
          style={{ height: 50, width: "90%", alignSelf: "center" }}
        />
        {selectedIndex === 0 && <Buttons />}
        {selectedIndex === 1 && <Pickers />}
        {selectedIndex === 2 && <ContextMenus />}
        {selectedIndex === 3 && <Sections />}
        {/* {selectedIndex === 4 && <Checkbox />} */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#000000",
  },
  darkText: {
    color: "#ffffff",
  },
  debugBorder: {
    borderWidth: 1,
    borderColor: "red",
  },
});
