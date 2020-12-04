import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
return(
    <View style={styles.container}>
    <Text style={styles.fontHeader}>Level Up Kashmir</Text>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: '#3f9e9e' ,
      
      alignItems: 'center',
      justifyContent: 'center',
      
      
    },
    fontHeader: {
      fontWeight: 'bold',
      fontSize: 30,
      color: 'white',
      


    }
  });