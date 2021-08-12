import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import styled from "styled-components/native";

const CardContainer = styled.View`
  margin: 5px;
  flex: 1;
  flex-direction: row;
  border-color: #dcdcdc;
  align-items: center;
  border-bottom-width: 1px;
`;

const ImageContainer = styled(Image)`
  width: 100px;
  height: 100px;
`;

const ImagePlayContainer = styled(Image)`
  width: 25px;
  height: 25px;
`;

const CardContent = styled.View`
  flex: 0.6;
  align-self: flex-start;
  padding: 10px;
`;

const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const CardSubtitle = styled(Paragraph)`
  font-size: 12px;
  color: gray;
`;

export const ListImage = ({ title, url, time }) => {
  return (
    <CardContainer>
      <ImageContainer
        source={{
          uri: url,
        }}
      />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{time}</CardSubtitle>
      </CardContent>
      <ImagePlayContainer source={require("../assets/play.png")} />
    </CardContainer>
  );
};
