import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import ChargesPage from "./pages/Charges/Chargespage";
import Payment from "./pages/Payment";

export default function App() {
  return (
    <View style={styles.container}>
      <ChargesPage />
      {/* <Payment /> */}
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
