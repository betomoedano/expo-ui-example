import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  useColorScheme,
} from "react-native";
import { Section } from "@expo/ui/components/Section";
import { Picker } from "@expo/ui/components/Picker";
import { Button } from "@expo/ui/components/Button";
import { Switch } from "@expo/ui/components/Switch";
import { useState } from "react";

export function Sections() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [switchValue, setSwitchValue] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <ScrollView style={styles.container}>
      {/* Basic Section */}
      <Section title="Basic Section">
        <Text style={[styles.text, colorScheme === "dark" && styles.darkText]}>
          This is a basic section with some text content
        </Text>
      </Section>

      {/* Section with Form Elements */}
      <Section title="Form Section">
        <Picker
          options={["Option 1", "Option 2", "Option 3"]}
          variant="menu"
          selectedIndex={selectedIndex}
          onOptionSelected={({ nativeEvent: { index } }) =>
            setSelectedIndex(index)
          }
          style={styles.picker}
          label="Select an option"
        />
        <Switch
          value={switchValue}
          onValueChange={setSwitchValue}
          style={styles.switch}
          label="Enable feature"
        />
      </Section>

      {/* Section with Button */}
      <Section title="Action Section">
        <Button
          onPress={() => console.log("Button pressed")}
          style={styles.button}
        >
          Take Action
        </Button>
      </Section>

      {/* Section with Footer */}
      <Section
        title="Section with Footer"
        footer="Additional information can be displayed here in the footer"
      >
        <Text style={[styles.text, colorScheme === "dark" && styles.darkText]}>
          This section includes a footer with extra information
        </Text>
      </Section>

      {/* Section with Custom Background */}
      <Section title="Custom Background" style={styles.customSection}>
        <Text style={[styles.text, colorScheme === "dark" && styles.darkText]}>
          This section has a custom background color
        </Text>
      </Section>

      {/* Inset Section */}
      <Section title="Inset Section" inset>
        <Text style={[styles.text, colorScheme === "dark" && styles.darkText]}>
          This section uses the inset property for a different appearance
        </Text>
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  text: {
    fontSize: 16,
    color: "#000000",
    marginVertical: 8,
  },
  darkText: {
    color: "#ffffff",
  },
  picker: {
    height: 50,
    marginVertical: 8,
  },
  switch: {
    marginVertical: 8,
  },
  button: {
    marginVertical: 8,
  },
  customSection: {
    backgroundColor: "rgba(255, 165, 0, 0.1)", // Light orange background
  },
});
