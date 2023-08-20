// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TicketBookingHome from '../screens/TicketBooking/TicketBookingHome';
import TicketBookingDetails from '../screens/TicketBooking/TicketBookingDetails';
import Form from '../pages/Form';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //     headerShown: false // Hide the header for all screens in this navigator
    //   }}
    >
      <Stack.Screen
        name="TicketBookingHome"
        component={TicketBookingHome}
        options={{ headerTitle: '', headerShown: false }}
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
    </Stack.Navigator>
  );
};

export default AppNavigator;
