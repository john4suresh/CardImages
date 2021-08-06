import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export const ListImage = ({ title, url, time }) => {
  const [dimensions, setDimensions] = useState({ window, screen });

  const { width } = window;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={imageStyles(width).Imagewidth}
          source={{
            uri: url,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <View style={styles.playContainer}>
        <Image style={styles.play} source={require("../assets/play.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
    flexDirection: "row",
    borderColor: "#DCDCDC",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  imageContainer: {
    padding: 10,
    flex: 0.2,
  },
  tinyLogo: {
    width: 75,
    height: 75,
  },
  textContainer: {
    flex: 0.6,
    alignSelf: "flex-start",
    padding: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  time: {
    fontSize: 12,
    color: "gray",
  },
  playContainer: {
    flex: 0.2,
    padding: 10,
  },
  play: {
    width: 25,
    height: 25,
  },
});

const imageStyles = (size) =>
  StyleSheet.create({
    Imagewidth: {
      width: size / 5,
      height: size / 5,
    },
  });
