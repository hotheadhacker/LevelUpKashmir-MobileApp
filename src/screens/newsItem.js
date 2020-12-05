import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Share, Button } from 'react-native';
import { useFonts } from 'expo-font';
import HTMLView from 'react-native-htmlview';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function NewsItem(){
    const [news, setNews] = useState(0);

    //expo fonts
    let [fontsLoaded] = useFonts({
        'Nexa-Bold': require('../../assets/fonts/Nexa-Bold.otf'),
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),

      });
    

    //Get articles first try using async - await
    const getLatestArticles = async () => {
        try {
          let response = await fetch(
            'https://levelupkashmir.com/wp-json/wp/v2/posts/17', {cache: "no-store"}
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

    //   onShare
    const onShare = async (url) => {
        
        try {
          const result = await Share.share({
            message: url+'?utm=AppShare',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    }
    //   function to convert gmt to ist
    function gmtToIst(date){
      var s = new Date(date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
      return s
    }
    //clearning helper function 
    function filterTitle(){
        if(news.title.rendered !== 'undefined'){
            return news.title.rendered;
        }
        else{
            return 'Fetch() Api Problem';
        }
    }

    function filterContent(){
        if(news.content.rendered !== 'undefined'){
            return news.content.rendered;
        }
        else{
            return 'Fetch() Api Problem';
        }
    }
    return(
       
                <ScrollView >
      <Button id={'https:dummyurl.com'} onPress={(e) => onShare(news.link)} title="Share" />

 <View style={styles.container}>
            <View><Text style={styles.title}>{filterTitle()}</Text></View>

            <View>
                <Image style={styles.image}
                source = {{uri: news.jetpack_featured_media_url}}
                 />
            </View>
            <View>
            <Text style={styles.lable}>
                <Entypo name="calendar" size={12} color="black" /> {gmtToIst(news.date_gmt)}
            </Text> 
            </View>

            <View style={styles.web}>
            <HTMLView
                value={filterContent()}					
                stylesheet={htmlstyles}	
                onLinkPress={(url) => console.log('clicked link: ', url)}
            />
            </View>
            
    
        </View>
            
            </ScrollView>
            
    )
}
var htmlstyles =StyleSheet.create({
  
img:{
marginTop: -100,
width: 50,
},
p:{
    
    
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
    marginTop : -10,
    marginBottom: -100,
    paddingBottom: 0,
},
// strong:{
//     fontWeight:'bold',
//     // fontSize:fontSize
// },
// li:{
//     // fontSize:fontSize,
// }
})
const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: 'white' ,
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
     color: 'black'
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
        width: 300,
        height: 250,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
    },
    lable:{
        backgroundColor: '#d4dae3',
        fontSize: 10,
        fontFamily: 'sans-serif'
    },
    tag:{
        backgroundColor: '#a4f64d',
        fontSize: 10,
        borderWidth: 4,
        borderRadius: 20,
        fontFamily: 'sans-serif',
        marginLeft: 5
    },
    web: {
    
        height: 600,
    },
  });