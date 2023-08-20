import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";

const CustomLabel = ({ label, text, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: Colors.secondaryLight,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 1,
    borderRadius: 8,
  },
  label: {
    textTransform: "capitalize",
    fontWeight: "500",
    color: Colors.text,
    marginBottom: 5,
  },
  text: {
    color: Colors.text,
  },
});

export default CustomLabel;
