import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import Home from './src/screens/home'

export default function App() {
  return (
    <View style={styles.container}>
      {/* header  */}
    <Header/>

    {/* home  */}
    <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 30, 
    
  },
  fontClass: {
    fontWeight: 'bold',
    fontSize: 50
  }
});
