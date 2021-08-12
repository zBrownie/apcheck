import React from "react";
import {
  FlatList,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";

const StepperCheckList = ({ data, indexChecklist }) => {
  const renderStepper = ({ item, index }) => {
    return (
      <TouchableHighlight
        onPress={() => nextPage(index)}
        style={
          indexChecklist === index ? styles.selectedStepper : styles.stepper
        }
      >
        <Text>ICON</Text>
      </TouchableHighlight>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item?.idRp}
        renderItem={renderStepper}
        horizontal
      />
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
  selectedStepper: {
    marginVertical: 4,
    marginHorizontal: 8,
    padding: 4,
    backgroundColor: "white",
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 10,
    width: 50,
    height: 50,
    elevation: 3,
  },
});
export default StepperCheckList;
