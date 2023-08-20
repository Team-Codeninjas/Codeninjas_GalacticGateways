import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";

const Badge = ({ label, icon, onPress, selected }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, selected && styles.selected]}>
      <Text style={styles.badgeLabel}>{label}</Text>
      <View style={styles.iconContainer}>{icon}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.4)",
  },

  badgeLabel: {
    color: "#fff",
    textTransform: "capitalize",
  },

  iconContainer: {
    marginLeft: 8,
  },

  selected: {
    backgroundColor: Colors.secondary,
  },
});

export default Badge;
