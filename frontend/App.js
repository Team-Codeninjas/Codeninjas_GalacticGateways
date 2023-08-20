import AppNavigator from './navigation/AppNavigator';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChargesPage from './pages/Charges/Chargespage';
import Payment from './pages/Payment';
import { Button, StyleSheet, Text, View } from 'react-native';
import Details from './pages/Details';
import CustomImageCarousal from './components/CustomImageCarousalSquare';
import TicketPage from './screens/ticketDownload/TicketPage';
import Form from './pages/Form';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
