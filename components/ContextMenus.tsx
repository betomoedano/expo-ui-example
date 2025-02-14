import { StyleSheet, View, Text, useColorScheme } from "react-native";
import { Button } from "@expo/ui/components/Button";
import { ContextMenu, Submenu } from "@expo/ui/components/ContextMenu";
import { Picker } from "@expo/ui/components/Picker";
import { Switch } from "@expo/ui/components/Switch";
import { useState } from "react";
import React from "react";

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

export function ContextMenus() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [themeSwitch, setThemeSwitch] = useState(false);
  const colorScheme = useColorScheme();

  const BasicMenuItems = (
    <>
      <Button systemImage="star.fill" onPress={() => console.log("Favorite")}>
        Favorite
      </Button>
      <Button
        systemImage="square.and.arrow.up"
        onPress={() => console.log("Share")}
      >
        Share
      </Button>
      <Button role="destructive" systemImage="trash">
        Delete
      </Button>
    </>
  );

  const AdvancedMenuItems = (
    <>
      <Button systemImage="paintbrush" onPress={() => console.log("Style")}>
        Style Options
      </Button>
      <Picker
        label="Theme"
        options={["Light", "Dark", "System", "Custom"]}
        variant="menu"
        selectedIndex={selectedIndex}
        onOptionSelected={({ nativeEvent: { index } }) =>
          setSelectedIndex(index)
        }
      />
      <Switch
        value={switchChecked}
        label="Show Details"
        variant="checkbox"
        onValueChange={setSwitchChecked}
      />
      <Switch
        value={themeSwitch}
        variant="switch"
        label="Auto Theme"
        onValueChange={setThemeSwitch}
      />
      <Submenu button={<Button systemImage="gear">Advanced</Button>}>
        <Button systemImage="wand.and.stars">Effects</Button>
        <Button systemImage="slider.horizontal.3">Controls</Button>
        <Submenu button={<Button systemImage="hammer">Developer</Button>}>
          <Button>Debug Mode</Button>
          <Button>Reset All</Button>
        </Submenu>
      </Submenu>
    </>
  );

  return (
    <View style={styles.container}>
      <Section title="Basic Context Menu">
        <ContextMenu Items={BasicMenuItems} style={styles.menuButton}>
          <Button variant="bordered" style={styles.menuButton}>
            Press for Basic Menu
          </Button>
        </ContextMenu>
      </Section>

      <Section title="Advanced Context Menu">
        <ContextMenu Items={AdvancedMenuItems} style={styles.menuButton}>
          <Button variant="bordered" style={styles.menuButton}>
            Press for Advanced Menu
          </Button>
        </ContextMenu>
      </Section>

      <Section title="Long Press Context Menu">
        <ContextMenu
          activationMethod="longPress"
          Items={BasicMenuItems}
          style={styles.longPressArea}
        >
          <View style={styles.longPressArea}>
            <Text
              style={[
                styles.longPressText,
                colorScheme === "dark" && styles.darkText,
              ]}
            >
              Long Press This Area
            </Text>
          </View>
        </ContextMenu>
      </Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#000000",
  },
  menuButton: {
    height: 50,
  },
  longPressArea: {
    width: 200,
    height: 100,
    backgroundColor: "orange",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  longPressText: {
    fontSize: 14,
    color: "#666",
  },
  darkText: {
    color: "#ffffff",
  },
});
