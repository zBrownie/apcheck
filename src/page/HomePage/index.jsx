import React, { useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  buscaVeiculo,
  selectErro,
  selectListVeiculo,
  selectLoading,
} from "../../redux/reducers/checklist";

const HomePage = ({ navigation }) => {
  const dispatch = useDispatch();
  const listaVeiculos = useSelector(selectListVeiculo);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectErro);
  const getVeiculo = () => {
    dispatch(
      buscaVeiculo({
        acessoWS: {
          empresaWS: {
            chave: null,
            codigoConexao: null,
            id_empresa: 4,
            id_grupo: 1,
            id_revenda: 1,
            id_usuario_dms: "004",
            id_vendedor_dms: "004",
          },
          usuarioWS: {
            id_usuario: 4215,
            login: "bruno.zenerato",
            senha:
              "37AB97B457B3F646DEA623F3A472522313A1B58CA1471B4C188C5930D02622A4",
          },
        },
        chassi: "",
        placa: "AAA1111",
      })
    );
  };

  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  useEffect(() => {
    if (listaVeiculos?.length > 0) {
      navigation.navigate("Confirmar");
    }
  }, [listaVeiculos]);

  if (error) createTwoButtonAlert();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={() => {}} value="AAA-111" />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TouchableHighlight onPress={getVeiculo}>
          <View style={styles.button}>
            <Text style={styles.txtButton}>Buscar</Text>
          </View>
        </TouchableHighlight>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "#333",
  },
  txtButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomePage;
