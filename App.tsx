import React from 'react';
import Login from './src/modules/Login';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
function App() {
  return (
    <SafeAreaView style={style.FullContainer}>
      <StatusBar />
      <Login />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  FullContainer: {
    flex: 1,
  },
});

export default App;
