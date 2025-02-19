import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  useColorScheme,
  Platform,
} from "react-native";
import { Section } from "@expo/ui/components/Section";
import { Picker } from "@expo/ui/components/Picker";
import { Button } from "@expo/ui/components/Button";
import { Switch } from "@expo/ui/components/Switch";
import {
  DateTimePicker,
  DatePickerProps,
} from "@expo/ui/components/DatePicker";
import { ColorPicker } from "@expo/ui/components/ColorPicker";
import { Slider } from "@expo/ui/components/Slider";
import { useState } from "react";

export function Sections() {
  const [color, setColor] = useState<string | null>("blue");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sliderValue, setSliderValue] = useState(0.5);
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const colorScheme = useColorScheme();

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const displayOptions =
    Platform.OS === "ios"
      ? ["compact", "graphical", "wheel"]
      : ["picker", "input"];
  const [displayIndex, setDisplayIndex] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <Section title="Form Controls Demo">
        <Text style={[styles.text, colorScheme === "dark" && styles.darkText]}>
          Explore these form controls!
        </Text>

        <Button
          onPress={() => console.log("Button pressed")}
          style={styles.control}
        >
          Click Me!
        </Button>

        <Switch
          value={switchValue}
          onValueChange={setSwitchValue}
          style={styles.control}
          label="Toggle this feature"
        />

        <ColorPicker
          label="Choose your color"
          selection={color}
          supportsOpacity
          onValueChanged={setColor}
          style={styles.control}
        />

        <Picker
          label="Select an option"
          options={options}
          selectedIndex={selectedIndex}
          onOptionSelected={({ nativeEvent: { index } }) => {
            setSelectedIndex(index);
          }}
          variant="menu"
          style={styles.control}
        />

        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          style={styles.control}
        />

        <DateTimePicker
          onDateSelected={setSelectedDate}
          displayedComponents="dateAndTime"
          initialDate={selectedDate.toISOString()}
          iosVariant={
            displayOptions[displayIndex] as DatePickerProps["iosVariant"]
          }
          androidVariant={
            displayOptions[displayIndex] as DatePickerProps["androidVariant"]
          }
          style={[
            styles.control,
            { height: Platform.select({ android: 520, ios: 100 }) },
          ]}
          showVariantToggle
          is24Hour
        />

        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
          }}
        >
          <Text>{Platform.OS}</Text>
        </View>
      </Section>
      <Section title="Network & Connectivity">
        <Switch
          style={styles.control}
          label="VPN Enabled"
          value={false}
          onValueChange={() => {}}
        />
        <Switch
          style={styles.control}
          label="Bluetooth Enabled"
          value={false}
          onValueChange={() => {}}
        />
      </Section>
      <Section title="Device Information">
        <Text style={[styles.text, colorScheme === "dark" && styles.darkText]}>
          Explore these form controls!
        </Text>
        <Text style={[styles.text, colorScheme === "dark" && styles.darkText]}>
          {Platform.OS}
        </Text>
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 17,
    color: "#000000",
    marginBottom: 16,
  },
  darkText: {
    color: "#ffffff",
  },
  control: {
    marginVertical: 8,
    height: 100,
    borderColor: "red",
    borderWidth: 1,
  },
});
