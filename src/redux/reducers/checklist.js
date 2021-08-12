import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import WebService from "./../../services/ws";

export const iniciarAtendimento = createAsyncThunk(
  "checklist/iniciarAtendimento",
  async (obj, thunkAPI) => {
    const response = await WebService.post("novoatendimento", obj);
    return response.data;
  }
);
export const buscaVeiculo = createAsyncThunk(
  "checklist/buscaVeiculo",
  async (obj, thunkAPI) => {
    const response = await WebService.post("buscaveiculo", obj);
    return response.data;
  }
);

const initialState = {
  atendimento: null,
  checklist: [],
  pagina: null,
  indexPagina: 0,
  veiculos: [],
  loading: false,
  erro: null,
};

const checklistSlice = createSlice({
  name: "checklist",
  initialState,
  reducers: {
    nextPage: (state, action) => {
      if (state.indexPagina === state.checklist.length - 1) return;

      state.indexPagina = state.indexPagina + 1;
      state.pagina = state.checklist[state.indexPagina];
    },
    stepperPage: (state, action) => {
      state.indexPagina = action.payload;
      state.pagina = state.checklist[state.indexPagina];
    },
    prevPage: (state) => {
      if (state.indexPagina === 0) return;

      state.indexPagina = state.indexPagina - 1;
      state.pagina = state.checklist[state.indexPagina];
    },
    updateCheckList: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(buscaVeiculo.pending, (state, action) => {
      state.loading = true;
      state.veiculos = [];
      state.atendimento = null;
      state.erro = null;
    });
    builder.addCase(buscaVeiculo.fulfilled, (state, action) => {
      state.loading = false;
      const { statusRetorno, veiculosCL } = action.payload;
      if (!statusRetorno.sucesso) {
        state.veiculos = null;
        state.erro = statusRetorno.mensagemErro;
      }
      state.veiculos = veiculosCL;
    });
    builder.addCase(buscaVeiculo.rejected, (state, action) => {
      state.loading = false;
      state.veiculos = [];
      state.atendimento = null;
      state.erro = action.payload;
    });
    builder.addCase(iniciarAtendimento.pending, (state, action) => {
      state.loading = true;
      state.atendimento = null;
      state.erro = null;
    });
    builder.addCase(iniciarAtendimento.fulfilled, (state, action) => {
      state.loading = false;

      const { statusRetorno, atendimento } = action.payload;
      if (!statusRetorno.sucesso) {
        state.atendimento = null;
        state.erro = statusRetorno.mensagemErro;
      }
      state.indexPagina = 0;
      state.atendimento = atendimento;
      state.checklist = atendimento.veiculo.ckPendente.ckMds[0].grupos;
      state.pagina = state.checklist[state.indexPagina];
    });
    builder.addCase(iniciarAtendimento.rejected, (state, action) => {
      state.loading = false;
      state.atendimento = null;
      state.erro = action.payload;
    });
  },
});

export const { nextPage, prevPage, updateCheckList, stepperPage } =
  checklistSlice.actions;

export const selectLoading = (state) => state.checklist?.loading;
export const selectErro = (state) => state.checklist?.erro;
export const selectListVeiculo = (state) => state.checklist?.veiculos;
export const selectAtendimento = (state) => state.checklist?.atendimento;
export const selectChecklist = (state) => state.checklist?.checklist;
export const selectPagina = (state) => state.checklist?.pagina;
export const selectIndex = (state) => state.checklist?.indexPagina;

export default checklistSlice.reducer;
