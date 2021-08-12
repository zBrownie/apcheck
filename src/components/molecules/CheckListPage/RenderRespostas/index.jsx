import React from "react";
import { View, StyleSheet, CheckBox, Text } from "react-native";

// import { Container } from './styles';

const RenderRespostas = ({ item }) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={false}
        onValueChange={() => {}}
        style={styles.checkbox}
      />
      <Text style={styles.label}>{item?.descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox: {},
  label: {
    fontWeight: "600",
  },
});
export default RenderRespostas;
