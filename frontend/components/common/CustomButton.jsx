import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const CustomButton = ({ onPress, title, disabled, ...otherProps }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, otherProps.style]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "capitalize",
    color: Colors.text,
  },
});

export default CustomButton;
