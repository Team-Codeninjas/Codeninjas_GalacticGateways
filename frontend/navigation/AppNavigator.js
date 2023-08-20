import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
