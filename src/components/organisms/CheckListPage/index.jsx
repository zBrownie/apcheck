import React, { useState } from "react";

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
import ItemRender from "../../molecules/CheckListPage/ItemRender";
import ModalExtras from "../../molecules/CheckListPage/ModalExtras";
import StepperCheckList from "../../molecules/CheckListPage/StepperCheckList";
import SubGrupoRender from "../../molecules/CheckListPage/SubGrupoRender";

// import { Container } from './styles';

const CheckListPageOrganism = ({
  nextPage,
  prevPage,
  pageContent,
  indexChecklist,
  checklist,
}) => {
  const [contentModal, setContentModal] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = (newContent = null) => {
    if (modalVisible === false && newContent != null) {
      setModalVisible(true);
      setContentModal(newContent);
    }

    setModalVisible(!modalVisible);
    setContentModal(null);
  };
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView>
        <StepperCheckList data={checklist} indexChecklist={indexChecklist} />
        {pageContent?.subgrupos?.map((subgrupo) => (
          <SubGrupoRender subgrupo={subgrupo} callBackModal={handleModal} />
        ))}
      </ScrollView>
      <ModalExtras
        modalVisible={modalVisible}
        callBack={handleModal}
        data={contentModal}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pageContainer: {},
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
export default CheckListPageOrganism;
