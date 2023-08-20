import { StyleSheet, View,StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import QuickSearch from "../layouts/home/QuickSearch";
import BadgeList from "../layouts/home/BadgeList";
import Colors from "../constants/Colors";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <View>
          <LinearGradient colors={Colors.gradient} style={styles.header}>
            <View style={styles.headerContainer}>
              <View style={{ width: "80%" }}>
                <Text variant="displaySmall" style={styles.headerTitle}>
                  Where would you want to go?
                </Text>
              </View>
              <View style={[styles.avatarContainer]}>
                <Avatar.Image size={50} source={{ uri: "https://picsum.photos/200" }} />
              </View>
            </View>

            <View style={styles.badgeListContainer}>
              <BadgeList />
            </View>

            <View>
              <QuickSearch />
            </View>
          </LinearGradient>
        </View>
      </View>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    height: "100%",
    backgroundColor: Colors.background,
  },

  header: {
    paddingHorizontal: 20,
    height: "65%",
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    elevation: 3,
  },
  headerContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: Colors.text,
  },

  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: Colors.secondaryLight,
    padding: 4,
    elevation: 3,
  },

  badgeListContainer: {
    marginTop: 20,
  },

  badgeItem: {
    marginRight: 16,
  },
});

export default Home;
