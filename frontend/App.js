
import AppNavigator from './navigation/AppNavigator';

import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Button, StyleSheet, Text, View,StyleSheet } from "react-native";


const Stack=createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {

  },
});

