import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Header } from "./components/Header";
import { ListImageContainer } from "./components/ListImageContainer";

export default function App() {
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
