// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TicketBookingHome from '../screens/TicketBooking/TicketBookingHome';
import TicketBookingDetails from '../screens/TicketBooking/TicketBookingDetails';
import Form from '../pages/Form';
// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import TicketBookingHome from "../screens/TicketBooking/TicketBookingHome";
// import TicketBookingDetails from "../screens/TicketBooking/TicketBookingDetails";
import Payment from "../pages/Payment";
import CustomImageCarousal from "../components/CustomImageCarousalSquare";
import TicketPage from "../screens/ticketDownload/TicketPage";
import Details from "../pages/Details";
import Home from "../pages/Home";
import ChargesPage from '../pages/Charges/Chargespage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //     headerShown: false // Hide the header for all screens in this navigator
    //   }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="TicketBookingHome"
        component={TicketBookingHome}
        options={{ headerTitle: "", headerShown: false }}
      />
      <Stack.Screen
        name="TicketBookingDetails"
        component={TicketBookingDetails}
        options={{ headerTitle: '', headerShown: false }}
      />
      <Stack.Screen
        name="CompareForm"
        component={Form}
        options={{ headerTitle: '', headerShown: false }}
      />
      
      <Stack.Screen
        name="ChargesPage"
        component={ChargesPage}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="CustomImageCarousal"
        component={CustomImageCarousal}
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
    </Stack.Navigator>
  );
};

export default AppNavigator;
