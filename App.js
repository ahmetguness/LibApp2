import React from "react";
import { NativeBaseProvider } from "native-base";
import Navigatior from "./src/navigation/Navigatior";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar hidden={true} />
        <Navigatior />
      </NativeBaseProvider>
    </Provider>
  );
}
