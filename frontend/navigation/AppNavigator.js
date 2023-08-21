// navigation/AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TicketBookingDetails from "../screens/TicketBooking/TicketBookingDetails";
import TicketBookingHome from "../screens/TicketBooking/TicketBookingHome";
import Payment from "../pages/Payment";
import TicketPage from "../screens/ticketDownload/TicketPage";
import Details from "../pages/Details";
import Home from "../pages/Home";
import ChargesPage from "../pages/Charges/Chargespage";
import Formm from "../pages/Formm";
import TourComparing from "../screens/TourComparing";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
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
        name="TourComparing"
        component={TourComparing}
        options={{ headerTitle: "", headerShown: false }}
      />
      <Stack.Screen
        name="CompareForm"
        component={Formm}
        options={{ headerTitle: "", headerShown: false }}
      />

      <Stack.Screen
        name="Ticket"
        component={TicketPage}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="ChargesPage"
        component={ChargesPage}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />

      <Stack.Screen
        name="TicketBookingDetails"
        component={TicketBookingDetails}
        options={{ headerTitle: "", headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
