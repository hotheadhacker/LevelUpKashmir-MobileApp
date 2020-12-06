import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Home from './src/screens/home';
import NewsItem from './src/screens/newsItem';
import Navigator from './src/routes/router';
import MyWeb from './src/screens/webView';
import HomeLoader from './src/components/homeLoader';

export default function App() {
  return (
    <Navigator />
    
    // <HomeLoader />
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 30, 
    
  },
  fontClass: {
    fontWeight: 'bold',
    fontSize: 50
  }
});
