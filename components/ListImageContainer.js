import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { ListImage } from "./ListImage";
import { ImageData } from "./Data";

export const ListImageContainer = (props) => {
  const [imageList] = useState(ImageData);

  const renderItem = ({ item }) => {
    return <ListImage title={item.text} url={item.url} time={item.time} />;
  };
  return (
    <View style={styles.listContent}>
      <FlatList
        data={imageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContent: {
    flex: 1,
    paddingTop: 10,
  },
});
