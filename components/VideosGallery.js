import { useEffect,useState } from 'react';
import { Text, View, Button,Image, FlatList, StyleSheet } from 'react-native';
import Video from 'react-native-video';

export const VideosGallery = (props) =>{
  const [data, setData] = useState([]);
  const getAPIData = async()=>{
  const url="http://10.0.2.2:8000/api/showvideo";
  let result =await fetch(url);
  result = await result.json();
  setData(result);
  } 
  useEffect(()=>{
    getAPIData()
   },[]);

    return(
      <View style={styles.maincont}>
    {data.length ?
     <FlatList
     data={data}
     renderItem={({item})=>
      <View style={styles.container}>
       <Video
      source={{ uri: item.link }}
      style={{ width: 320, height: 240 }}
      controls={true}
    />   
    </View>
    }
     />
    : null
    }
      </View>
    );
  }

  const styles = StyleSheet.create({
    // image: {
    //   width: '100%',
    //   height: 300,
    // },
    maincont:{
      backgroundColor:'#B9D9EB',
paddingTop:16,
paddingBottom:16,
paddingLeft:10,
paddingRight:10,
    },
    container: {
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
      marginBottom: 16,
    },
    image: {
      width: '100%',
      height: 200,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      padding: 16,
      paddingBottom:2,
    },
    detail: {
      fontSize: 18,
      paddingTop:2,
      padding: 16,
    },
  });