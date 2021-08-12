import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const HeaderContainer = styled.View`
  background-color: white;
  flex-direction: row;
  border-color: #dcdcdc;
  border-bottom-width: 1px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const MenuContainer = styled.View`
  padding-left: 20px;
`;

const ImageContainer = styled(Image)`
  width: 25px;
  height: 25px;
`;

const TextContainer = styled.View`
  flex: 1;
  text-align: center;
`;
const TextAlign = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <MenuContainer>
        <ImageContainer source={require("../assets/menu.png")} />
      </MenuContainer>
      <TextContainer>
        <TextAlign> PODCASTS </TextAlign>
      </TextContainer>
    </HeaderContainer>
  );
};
