import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default function MyWeb({navigation}) {
    let url = navigation.state.params;
    // console.log(navigation);
    return (
      <WebView
        source={{ uri: url }}
        style={{ marginTop: 20 }}
      />
    );
  
}