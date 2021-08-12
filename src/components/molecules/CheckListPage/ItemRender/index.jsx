import React from "react";
import { FlatList } from "react-native";
import RenderRespostas from "../RenderRespostas";

// import { Container } from './styles';

const ItemRender = ({ item }) => {
  return (
    <FlatList
      data={item?.respostas}
      keyExtractor={(item) => item?.idRp}
      renderItem={({ item }) => <RenderRespostas item={item} />}
      horizontal
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    />
  );
};

export default ItemRender;
