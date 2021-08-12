import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Header } from "./components/Header";
import { ListImageContainer } from "./components/ListImageContainer";
import styled from "styled-components/native";

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

export default function App() {
  return (
    <SafeAreaContainer>
      <Header />
      <ListImageContainer />
    </SafeAreaContainer>
  );
}
