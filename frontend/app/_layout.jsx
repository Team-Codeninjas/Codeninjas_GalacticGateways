import { SplashScreen, Stack } from "expo-router";

export { ErrorBoundary } from "expo-router";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Load fonts, then hide the splash screen.
  // SplashScreen.hideAsync()
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
