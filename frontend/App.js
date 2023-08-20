import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChargesPage from './pages/Charges/Chargespage';
import Payment from './pages/Payment';
import { Button, StyleSheet, Text, View } from 'react-native';
import Details from './pages/Details';
import Form from './pages/Form';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Details}
          options={{ headerShown: false, animation: 'slide_from_bottom' }}
        />

        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
