import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/page/HomePage";
import { persistor, store } from "./src/redux/store";
import { Provider } from "react-redux";
import ConfirmarUsuarioPage from "./src/page/ConfirmarUsuarioPage";
import CheckListPage from "./src/page/CheckListPage";
import { PersistGate } from "redux-persist/integration/react";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTintColor: "#333",
              headerTitleStyle: {
                fontSize: 18,
              },
            }}
          >
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Confirmar" component={ConfirmarUsuarioPage} />
            <Stack.Screen name="CheckList" component={CheckListPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
