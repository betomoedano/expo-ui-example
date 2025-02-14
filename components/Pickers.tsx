import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  useColorScheme,
} from "react-native";
import { Picker } from "@expo/ui/components/Picker";
import { useState } from "react";

const Section = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.section}>
      <Text
        style={[styles.sectionTitle, colorScheme === "dark" && styles.darkText]}
      >
        {title}
      </Text>
      {children}
    </View>
  );
};

export function Pickers() {
  const [fruitIndex, setFruitIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [menuIndex, setMenuIndex] = useState(0);
  const [segmentedIndex, setSegmentedIndex] = useState(0);
  const [tintedIndex, setTintedIndex] = useState(0);

  const commonOptions = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ];

  return (
    <ScrollView style={styles.container}>
      <Section title="Basic Picker">
        <Picker
          options={["🍌", "🍊", "🥭", "🍍"]}
          selectedIndex={fruitIndex}
          onOptionSelected={({ nativeEvent: { index } }) => {
            setFruitIndex(index);
          }}
          style={styles.picker}
        />
      </Section>

      <Section title="Custom Style Picker">
        <Picker
          options={["Red", "Blue", "Green", "Yellow", "Purple"]}
          selectedIndex={colorIndex}
          onOptionSelected={({ nativeEvent: { index } }) => {
            setColorIndex(index);
          }}
          style={[styles.picker, styles.customPicker]}
        />
      </Section>

      <Section title="Menu Picker">
        <Picker
          options={commonOptions}
          selectedIndex={menuIndex}
          onOptionSelected={({ nativeEvent: { index } }) => {
            setMenuIndex(index);
          }}
          label="Cost"
          variant="menu"
          style={{
            width: 300,
            height: 100,
            flex: 1,
          }}
        />
      </Section>

      <Section title="Wheel Picker">
        <Picker
          options={commonOptions}
          selectedIndex={sizeIndex}
          onOptionSelected={({ nativeEvent: { index } }) => {
            setSizeIndex(index);
          }}
          variant="wheel"
          style={{
            height: 200,
          }}
        />
      </Section>

      <Section title="Tinted Picker">
        <Picker
          options={commonOptions}
          selectedIndex={tintedIndex}
          onOptionSelected={({ nativeEvent: { index } }) => {
            setTintedIndex(index);
          }}
          color="#ff5500"
          style={{
            height: 100,
          }}
        />
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  section: {
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#000000",
  },
  darkText: {
    color: "#ffffff",
  },
  picker: {
    height: 50,
  },
  customPicker: {
    backgroundColor: "orange",
    borderRadius: 10,
  },
});
