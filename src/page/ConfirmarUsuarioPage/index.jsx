import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import {
  selectErro,
  iniciarAtendimento,
  selectListVeiculo,
  selectLoading,
  selectAtendimento,
} from "../../redux/reducers/checklist";

const ConfirmarUsuarioPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectErro);
  const listaVeiculo = useSelector(selectListVeiculo);
  const atendimento = useSelector(selectAtendimento);
  useEffect(() => {
    if (atendimento != null) navigation.navigate("CheckList");
  }, [atendimento]);
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const hanlderIniciarAtendimento = () => {
    dispatch(
      iniciarAtendimento({
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
        atendimento: {
          aguarda_pc: null,
          assinaturaClienteFicha: null,
          assinaturaClienteOrcamento: null,
          assinaturaClienteOs: null,
          assinaturaConsultorOs: null,
          atServicoCLs: null,
          atServicoCLsRetorno: null,
          buscaPreview: false,
          categoriaOS: null,
          categoriaOSExterna: null,
          categoriaOSGarantia: null,
          categoriaOSInterna: null,
          categoriaOSRevisao: null,
          ck: null,
          cliente: null,
          codigoVeiculoDMS: null,
          consultor: null,
          corPrisma: null,
          data: 1628615935130,
          dataAgendado: null,
          dataFinalExecucao: null,
          dataInicioChecklist: null,
          departamento: null,
          disponivelCK: null,
          disponivelQualidade: null,
          dtentrega: null,
          dtprevista: null,
          emitirOs: null,
          enviado: null,
          horaAgendado: null,
          hrEntrega: null,
          hrPrevista: null,
          idApp: null,
          idAtendimentoCk: null,
          idVendedorAgendadoDms: null,
          id_atendimento: null,
          id_atendimentoDMS: null,
          inPreOs: null,
          lavarCarro: null,
          levaPecasSubst: null,
          levarDomicilio: null,
          listPdfPreviewFarol: null,
          listPdfPreviewFichaGerenciamento: null,
          listPdfPreviewOrcamento: null,
          listPdfPreviewOs: null,
          nomeVendedorAgendadoDms: null,
          nroPrisma: null,
          nro_OS: null,
          orcamento: null,
          orcamentos: null,
          periodicoCL: null,
          pesquisa: null,
          possuiOrcamento: false,
          possuiPreview: null,
          rateio: null,
          retrabalho: null,
          revendaCk: null,
          satisfacao: null,
          seguradora: null,
          setorVendaDms: null,
          situacao: null,
          situacaoAtendimentoQualidade: null,
          situacaoCk: null,
          situacaoOrcComplementar: null,
          situacaoOs: null,
          solicitacoes: null,
          solicitacoesRetorno: null,
          statusAgendamento: null,
          taxi: null,
          testeRodagem: null,
          tipoAgendamento: null,
          tipoEmissaoOs: null,
          tiposOsDms: null,
          valorFranquia: null,
          veiculo: {
            anoFab: 2000,
            anoMod: 2000,
            chassi: "9BD12121212121212",
            ckFinalizado: null,
            ckPendente: null,
            ckPreview: null,
            codigoVeiculoDMS: "0013475",
            combustivel: "GASOLINA",
            cor: "branco",
            dataValidadeContrato: null,
            dataVenda: 946692000000,
            idVeiculo: null,
            km: null,
            kmMaxContrato: null,
            ladosCkFnsCL: null,
            modeloDMS: {
              anoFim: null,
              anoIni: null,
              codModeloFabrica: null,
              codigo: "3C4PU  ",
              codigoIMGFn: null,
              descricao: "FREEMONT PRECISION",
              familiaCL: {
                codigo: "001",
                descricao: "FIAT USADOS",
                imagem: null,
                marcaCL: {
                  codigo: "00",
                  descricao: "FIAT",
                  logo: null,
                  logoMarca: null,
                  tema: null,
                  tipoUsoVeiculoList: null,
                  usarLogoRevendaApp: false,
                  utilizaTipoUsoVeiculo: null,
                },
              },
              imagem: null,
              modeloServico: null,
            },
            modeloGeral: {
              anoFim: null,
              anoIni: null,
              codModeloFabrica: null,
              codigo: "3042",
              codigoIMGFn: "GEN_SEDAM",
              descricao: "AZERA 3.3 5V",
              familiaCL: {
                codigo: "154",
                descricao: "AZERA",
                imagem: {
                  codigo: null,
                  descricao: null,
                  extensao: "png",
                  id_imagem: 8339887,
                  img: null,
                  nomeImagem:
                    "bOODh5KZQ9wPbkwi6zJhfJteB_Igroar--BE2OEXRqtkvysIAVqEH-FJhTLl.png",
                  ordem: null,
                  tipo: "VEICULO",
                  url: "https://www.solucoes.mobato.com.br/arquivos/imagem/imagemSistema/veiculo/bOODh5KZQ9wPbkwi6zJhfJteB_Igroar--BE2OEXRqtkvysIAVqEH-FJhTLl.png",
                },
                marcaCL: {
                  codigo: "18",
                  descricao: "HYUNDAI",
                  logo: "HYUNDAI",
                  logoMarca: {
                    codigo: null,
                    descricao: null,
                    extensao: "png",
                    id_imagem: 4797256,
                    img: null,
                    nomeImagem: "4797256.png",
                    ordem: null,
                    tipo: "LOGOMARCA",
                    url: "https://www.solucoes.mobato.com.br/arquivos/imagem/imagemSistema/logoMarca/4797256.png",
                  },
                  tema: "AZUL4",
                  tipoUsoVeiculoList: null,
                  usarLogoRevendaApp: false,
                  utilizaTipoUsoVeiculo: false,
                },
              },
              imagem: {
                codigo: null,
                descricao: null,
                extensao: "png",
                id_imagem: 8338018,
                img: null,
                nomeImagem:
                  "jJ_AY9ToAobqIW2LKQ_Xjy5-F_4fF4FcJMcwYvesHJ9lFbXhSDJ-lTfmn6h-.png",
                ordem: null,
                tipo: "VEICULO",
                url: "https://www.solucoes.mobato.com.br/arquivos/imagem/imagemSistema/veiculo/jJ_AY9ToAobqIW2LKQ_Xjy5-F_4fF4FcJMcwYvesHJ9lFbXhSDJ-lTfmn6h-.png",
              },
              modeloServico: null,
            },
            modelos: null,
            nivelCombustivel: null,
            placa: "AAA - 1111",
            possuiCadastroDms: true,
            proprietario: {
              aceiteLgpd: "N",
              bairro: "Centro",
              cep: "13320210 ",
              cidade: "SALTO",
              complemento: null,
              cpf_cnpj: "11159673000105",
              email: "teste@teste.com.br",
              estado: "SP",
              id_cliente: null,
              id_clienteDMS: "0008287",
              imagemAceiteLgpd: null,
              logradouro: "Rua Monsenhor Couto",
              nome: "CLIENTE TESTE 0008287",
              numero: null,
              telefoneCelular: "0000000000",
              telefoneComercial: null,
              telefoneResidencial: "0000000000",
              tipo: "J",
              veiculos: [],
            },
            proprietarios: [],
            temContrato: "N",
            ultimoKm: 70008,
          },
        },
        enviarWhatsapp: null,
        idCkCategoria: 1,
        tipoBuscaCk: "VI",
      })
    );
  };
  if (error) createTwoButtonAlert();
  return (
    <SafeAreaView style={styles.container}>
      {listaVeiculo?.map((veiculo) => {
        return (
          <View>
            <Text>{veiculo?.proprietario?.nome}</Text>
            <Text>{veiculo?.placa}</Text>
            {loading ? (
              <ActivityIndicator size="large" />
            ) : (
              <TouchableHighlight onPress={hanlderIniciarAtendimento}>
                <View style={styles.button}>
                  <Text style={styles.txtButton}>Buscar</Text>
                </View>
              </TouchableHighlight>
            )}
          </View>
        );
      })}
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
export default ConfirmarUsuarioPage;
