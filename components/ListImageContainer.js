import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { ListImage } from "./ListImage";
import { ImageData } from "./Data";
import styled from "styled-components/native";

const ListContainer = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const ListImageContainer = (props) => {
  const [imageList] = useState(ImageData);

  const renderItem = ({ item }) => {
    return <ListImage title={item.text} url={item.url} time={item.time} />;
  };
  return (
    <ListContainer>
      <FlatList
        data={imageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </ListContainer>
  );
};
