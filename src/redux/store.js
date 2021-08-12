import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ChecklistSlice from "./reducers/checklist";
import { persistReducer, persistStore } from "redux-persist";

const peristConfig = {
  key: "wa",
  storage: AsyncStorage,
};

const reducers = combineReducers({
  checklist: ChecklistSlice,
});

const persistedReducer = persistReducer(peristConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
