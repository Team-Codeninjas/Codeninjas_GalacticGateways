import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TicketBookingDetails from "./screen/TicketBooking/TicketBookingDetails";
import Formm from "./pages/Formm";
import TicketBookingHome from "./screen/TicketBooking/TicketBookingHome";
import Payment from "./pages/Payment";
import CustomImageCarousal from "./components/CustomImageCarousalSquare";
import Details from "./pages/Details";
import Home from "./pages/Home";
import TicketPage from "./screen/ticketDownload/TicketPage";
import { FontAwesome } from "@expo/vector-icons";
import TourComparing from "./screen/TourComparing";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import ChargesPage from "./pages/Charges/Chargespage";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (

    <Stack.Navigator
    // screenOptions={{
    //     headerShown: false // Hide the header for all screen in this navigator
    //   }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
      <Stack.Screen
      name="TourComparing"
      component={TourComparing}
      options={{ headerTitle: "", headerShown: false }}
    />
      
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="CompareForm"
        component={Formm}
        options={{ headerTitle: "", headerShown: false }}
      />
      <Stack.Screen
        name="ChargesPage"
        component={ChargesPage}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />

        <Stack.Screen
        name="Ticket"
        component={TicketPage}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="TicketBookingHome"
        component={TicketBookingHome}
        options={{ headerTitle: "", headerShown: false }}
      />

      <Stack.Screen
        name="TicketBookingDetails"
        component={TicketBookingDetails}
        options={{ headerTitle: "", headerShown: false }}
      />

    </Stack.Navigator>
  );
};
const ExploreNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //     headerShown: false // Hide the header for all screen in this navigator
    //   }}
    >
      <Stack.Screen
        name="TicketBookingHome"
        component={TicketBookingHome}
        options={{ headerTitle: "", headerShown: false }}
      />

      <Stack.Screen
        name="TicketBookingDetails"
        component={TicketBookingDetails}
        options={{ headerTitle: "", headerShown: false }}
      />
      <Stack.Screen
        name="Ticket"
        component={TicketPage}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />

      <Stack.Screen
        name="CustomImageCarousal"
        component={CustomImageCarousal}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
};
const CompareNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //     headerShown: false // Hide the header for all screen in this navigator
    //   }}
    >
      <Stack.Screen
        name="TourComparing"
        component={TourComparing}
        options={{ headerTitle: "", headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const SettingNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //     headerShown: false // Hide the header for all screen in this navigator
    //   }}
    >
      <Stack.Screen
        name="TourComparing"
        component={""}
        options={{ headerTitle: "", headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome name="tachometer" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Compare"
        component={Formm}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="git-compare-outline" size={24} color="black" />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome name="wpexplorer" size={24} color="black" />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Setting"
        component={SettingNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="settings" size={24} color="black" />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {

  },
});

