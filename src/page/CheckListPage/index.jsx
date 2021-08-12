import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, Text, View, Alert } from "react-native";

import {
  selectErro,
  selectLoading,
  selectAtendimento,
  selectPagina,
  selectChecklist,
  nextPage,
  prevPage,
  selectIndex,
  stepperPage,
} from "../../redux/reducers/checklist";
import CheckListPageOrganism from "../../components/organisms/CheckListPage";

// const width = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;
const CheckListPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectErro);
  const atendimentoWs = useSelector(selectAtendimento);
  const checklist = useSelector(selectChecklist);
  const paginaAtual = useSelector(selectPagina);
  const indexChecklist = useSelector(selectIndex);

  const showDialog = () =>
    Alert.alert("Atenção", "Deseja finalizar atendimento?", [
      {
        text: "Voltar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Finalizar", onPress: () => console.log("OK Pressed") },
    ]);
  const handleNextPage = (page = null) => {
    if (page != null) {
      dispatch(stepperPage(page));
      return;
    }

    if (indexChecklist === checklist.length - 1) {
      showDialog();
      return;
    }

    dispatch(nextPage());
  };

  const handlePrevPage = () => {
    dispatch(prevPage());
  };

  if (loading)
    return (
      <View>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );

  if (error)
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );

  return (
    <CheckListPageOrganism
      checklist={checklist}
      nextPage={handleNextPage}
      prevPage={handlePrevPage}
      pageContent={paginaAtual}
      indexChecklist={indexChecklist}
    />
  );
};

export default CheckListPage;
