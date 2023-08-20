
import AppNavigator from './navigation/AppNavigator';

import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChargesPage from "./pages/Charges/Chargespage";
import Payment from "./pages/Payment";
import { Button, StyleSheet, Text, View,StyleSheet } from "react-native";
import Details from "./pages/Details";
import CustomImageCarousal from "./components/CustomImageCarousalSquare";
import TicketPage from './screens/ticketDownload/TicketPage'

const Stack=createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;

      <Stack.Navigator>
        <Stack.Screen name="Home" component={ChargesPage} options={{ headerShown: false ,animation: 'slide_from_bottom'}}  />
        <Stack.Screen name="Payment" component={Payment}  options={{ headerShown: false,animation: 'slide_from_right' }}/>
        <Stack.Screen name="CustomImageCarousal" component={CustomImageCarousal}  options={{ headerShown: false,animation: 'slide_from_right' }}/>
        <Stack.Screen name="Ticket" component={TicketPage}  options={{ headerShown: false,animation: 'slide_from_right' }}/>
        <Stack.Screen name="Details" component={Details}  options={{ headerShown: false,animation: 'slide_from_right' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );

}


const styles = StyleSheet.create({
  container: {

  },
});

