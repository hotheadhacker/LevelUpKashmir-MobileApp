import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default function Home(){
    const [news, setNews] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3' }
      ]);
    
    return(
        <View style={styles.container}>
            <Text style={styles.fontHeader}>Hello From the other side(Home)</Text>
    <Text style={styles.fontHeader}>Hello From the other side(Home){news[0].text}</Text>
            <FlatList
            data={news}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: '#bbb' ,
      alignItems: 'center',
      justifyContent: 'center',
      
      
    },
    fontHeader: {
    //   fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
      
      


    }
  });