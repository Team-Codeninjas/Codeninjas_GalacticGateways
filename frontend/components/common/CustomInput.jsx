import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const CustomInput = ({ label, style, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, style]} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 1,
    borderRadius: 8,
    backgroundColor: Colors.secondaryLight,
  },
  label: {
    textTransform: "capitalize",
    fontWeight: "500",
    color: Colors.text,
  },
  input: {
    color: Colors.text,
  },
});

export default CustomInput;
