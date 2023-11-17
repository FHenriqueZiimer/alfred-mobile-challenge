import React from "react";
import { NativeBaseProvider } from "native-base";
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import { Routes } from './src/routes';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <Routes />
        </KeyboardAvoidingView>
      </NativeBaseProvider>
    </Provider>
  );
}
