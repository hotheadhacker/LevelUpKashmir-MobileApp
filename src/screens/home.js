import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HomeLoader from '../components/homeLoader';

export default function Home({navigation}){
    const [news, setNews] = useState(0);

    //expo fonts
    let [fontsLoaded] = useFonts({
        'Nexa-Bold': require('../../assets/fonts/Nexa-Bold.otf'),
      });
    //Get articles first try using async - await
    const getLatestArticles = async () => {
        try {
          let response = await fetch(
            'https://levelupkashmir.com/wp-json/wp/v2/posts?_embed&per_page=100', {cache: "no-store"}
          );
          let json = await response.json();
        //   return json.movies;
        setNews(json);
        // console.log(json);
        } catch (error) {
        //   console.error(error);
        }
      }; 
      //call get function
      getLatestArticles();    
    //   function to convert gmt to ist
    function gmtToIst(date){
      var s = new Date(date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
      return s
    }

    //Loader Improvements:
    function loader(){
      if(news == 0){
        return <HomeLoader />;
      }
      else{
        return(
          <View style={styles.container}>
            
            <FlatList
            keyExtractor={item => item.id}
            data={news}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Details', {id: item.id, title: item.title.rendered, date_gmt: item.date_gmt, f_img: item._embedded["wp:featuredmedia"][0].source_url, category: item._embedded["wp:term"][0][0].name})}>
                <View style={styles.card}>
                <Image source = {{uri: item._embedded["wp:featuredmedia"][0].source_url}}
   style = {styles.image}
   />
            
              
            <Text style={styles.title}>{item.title.rendered}{'\n'}<Text style={styles.lable}>
            <Entypo name="calendar" size={12} color="black" /> {gmtToIst(item.date_gmt)}</Text> 
            <Text style={styles.tag}> <AntDesign name="tags" size={12} color="black" /> 
            {item._embedded["wp:term"][0][0].name}
            </Text>  
            </Text>
            
            
              </View>
              </TouchableOpacity>
            )}
          />
        </View>
        )
      }
    }
    
    return(
        <>
          {loader()}
        </>
    )
}
const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: '#dffafa' ,
      alignItems: 'center',
      justifyContent: 'center',
      
      
    },
    fontHeader: {
    //   fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
    },
     title: {
    //  textAlign: 'center',
     fontFamily: 'Nexa-Bold',
     fontSize: 20,
     width: 320,
     marginTop: 10,
     marginBottom: 10,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 10,
        borderWidth: 4,
        borderColor: "#3f9e9e",
        borderRadius: 6,
    //     alignItems: 'center',
    //   justifyContent: 'center',
        
    },
    image: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
    },
    lable:{
        backgroundColor: '#d4dae3',
        fontSize: 10,
        borderWidth: 4,
        borderRadius: 20,
        fontFamily: 'sans-serif'
    },
    tag:{
        backgroundColor: '#a4f64d',
        fontSize: 10,
        fontFamily: 'sans-serif',
        marginLeft: 5
    },
  });