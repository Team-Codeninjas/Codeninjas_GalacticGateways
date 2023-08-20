import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Badge from "../../components/common/Badge";
import { useState } from "react";

const badges = [
  { label: "one way", icon: <AntDesign name="forward" size={16} color="white" /> },
  { label: "round trip", icon: <AntDesign name="retweet" size={16} color="white" /> },
  { label: "multi planet", icon: <MaterialIcons name="multiple-stop" size={16} color="white" /> },
];

const BadgeList = () => {
  const [selectedBadge, setSelectedBadge] = useState(0);

  return (
    <View style={styles.badgeListContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {badges.map((badge, index) => (
          <View style={styles.badgeItem} key={index}>
            <Badge
              label={badge.label}
              icon={badge.icon}
              onPress={() => setSelectedBadge(index === selectedBadge ? null : index)}
              selected={index === selectedBadge}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeListContainer: {
    paddingVertical: 10,
  },
  badgeItem: {
    marginRight: 10,
    marginBottom: 10,
  },
});

export default BadgeList;
