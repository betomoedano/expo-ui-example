import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Button } from "@expo/ui/components/Button";
import { useState } from "react";
import { useRouter } from "expo-router";

const DEBUG_BORDERS = false; // Toggle this to show/hide debug borders

export function Buttons() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const [isLiked, setIsLiked] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  return (
    <View style={[styles.container, DEBUG_BORDERS && styles.debugBorder]}>
      <Text
        style={[
          styles.text,
          colorScheme === "dark" && styles.darkText,
          DEBUG_BORDERS && styles.debugBorder,
        ]}
      >
        @expo/ui/components/Button
      </Text>
      <Button style={[{ width: "100%" }, DEBUG_BORDERS && styles.debugBorder]}>
        Default
      </Button>
      <Button
        variant="bordered"
        style={[{ width: "100%" }, DEBUG_BORDERS && styles.debugBorder]}
      >
        Bordered
      </Button>
      <Button
        variant="plain"
        style={[{ width: "100%" }, DEBUG_BORDERS && styles.debugBorder]}
      >
        Plain
      </Button>
      <Button
        variant="borderedProminent"
        style={[{ width: "100%" }, DEBUG_BORDERS && styles.debugBorder]}
        onPress={() => {
          router.push("/modal");
        }}
      >
        Bordered Prominent
      </Button>
      <Button
        role="destructive"
        style={[{ width: "100%" }, DEBUG_BORDERS && styles.debugBorder]}
      >
        Destructive
      </Button>
      <Button
        systemImage="person.crop.circle.badge.plus"
        style={[{ width: "100%" }, DEBUG_BORDERS && styles.debugBorder]}
      >
        With system image
      </Button>
      <Button
        systemImage={isStarred ? "star.fill" : "star.fill"}
        color={isStarred ? "orange" : "gray"}
        style={[{ width: "100%" }, DEBUG_BORDERS && styles.debugBorder]}
        onPress={() => {
          setIsStarred(!isStarred);
        }}
      >
        {""}
      </Button>
      <Button
        systemImage={isLiked ? "hand.thumbsup.fill" : "hand.thumbsdown.fill"}
        color={isLiked ? "#007AFF" : "gray"}
        style={[{ width: "100%" }, DEBUG_BORDERS && styles.debugBorder]}
        onPress={() => {
          setIsLiked(!isLiked);
        }}
      >
        {""}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
