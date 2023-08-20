import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.white,
        tabBarActiveBackgroundColor: Colors.secondary,
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          href: "/home",
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
          tabBarLabel: "Home",
        }}
      />
    </Tabs>
  );
}
