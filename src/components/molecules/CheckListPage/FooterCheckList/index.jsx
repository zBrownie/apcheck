import React from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  CheckBox,
  TouchableHighlight,
  View,
  Dimensions,
  Alert,
} from "react-native";

const FooterCheckList = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: Dimensions.get("screen").width,
        justifyContent: "space-around",
        marginVertical: 12,
      }}
    >
      <TouchableHighlight
        onPress={prevPage}
        style={{
          backgroundColor: "#333",
          paddingHorizontal: 30,
          paddingVertical: 2,
          width: 120,
          height: 42,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>Voltar</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => nextPage(null)}
        style={{
          backgroundColor: "#333",
          paddingHorizontal: 30,
          paddingVertical: 2,
          width: 120,
          height: 42,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>
          {indexChecklist !== checklist.length - 1 ? "Avançar" : "Finalizar"}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  stepper: {
    marginVertical: 4,
    marginHorizontal: 8,
    padding: 4,
    backgroundColor: "white",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
    width: 50,
    height: 50,
    elevation: 3,
  },
});
export default FooterCheckList;
