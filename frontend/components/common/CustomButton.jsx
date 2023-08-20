import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { useNavigation } from '@react-navigation/core';


const CustomButton = ({ onPress, title, disabled, onFindSpaceship, ...otherProps }) => {
  const navigation= useNavigation();
  return (
    <TouchableOpacity
      onPress={()=>navigation.navigate("TicketBookingHome",onFindSpaceship)}
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
