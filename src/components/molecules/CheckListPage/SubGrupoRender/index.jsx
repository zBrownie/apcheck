import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  FlatList,
  TouchableHighlight,
} from "react-native";
import ItemRender from "../ItemRender";
import ModalExtras from "../ModalExtras";

const SubGrupoRender = ({ subgrupo, callBackModal }) => {
  return (
    <View key={subgrupo.idSg}>
      <Text style={styles.titleSubGrupo}>{subgrupo?.descricao}</Text>
      <View>
        {subgrupo?.itens?.map((item) => {
          return (
            <View key={item.idIt} style={styles.itemPergunta}>
              <Text>{item?.descricao}</Text>
              <FlatList
                data={item?.perguntas}
                keyExtractor={(item) => item?.idIt}
                renderItem={({ item }) => <ItemRender item={item} />}
                horizontal
                contentContainerStyle={styles.flatListItem}
              />
              <TouchableHighlight
                onPress={() => callBackModal(item)}
                style={styles.btnExtras}
              >
                <Text style={styles.txtBtnExtras}>+</Text>
              </TouchableHighlight>
            </View>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleSubGrupo: {
    color: "#333",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 6,
  },
  itemPergunta: {
    flexDirection: "row",
    alignItems: "center",
    width: Dimensions.get("screen").width * 0.97,
    height: Dimensions.get("screen").height * 0.1,
    backgroundColor: "#FFF",
    marginVertical: 4,
    paddingHorizontal: 14,
    alignSelf: "center",
    elevation: 0,
    borderRadius: 10,
  },
  flatListItem: {
    flexGrow: 1,
    justifyContent: "center",
  },
  btnExtras: {
    marginHorizontal: 7,
  },
  txtBtnExtras: {
    fontSize: 18,
    textAlign: "center",
  },
});
export default SubGrupoRender;
