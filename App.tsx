import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from "./src/nav/RootNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}