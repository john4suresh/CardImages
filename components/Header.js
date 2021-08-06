import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.menuContainer}>
        <Image source={require("../assets/menu.png")} style={styles.menu} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}> PODCASTS </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    flexDirection: "row",
    borderColor: "#DCDCDC",
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
  menuContainer: {
    paddingLeft: 20,
  },
  menu: {
    width: 25,
    height: 25,
  },
  headerContainer: {
    flex: 1,
    textAlign: "center",
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
