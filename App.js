import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Header } from "./components/Header";
import { ListImageContainer } from "./components/ListImageContainer";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function App() {
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    console.log(dimensions);
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <ListImageContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
