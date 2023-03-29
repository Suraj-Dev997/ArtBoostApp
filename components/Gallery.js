import { useEffect,useState } from 'react';
import { Text, View, Button,Image, FlatList, StyleSheet } from 'react-native';
export const Gallery = (props) =>{
const [data, setData] = useState([]);
 const getAPIData = async()=>{
 const url="http://10.0.2.2:8000/api/data";
 const imgurl="http://10.0.2.2:8000/image/"
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
    //  <View>
    //     <Text>Id: {item.id}</Text>
    //     <Text>name: {item.name}</Text>
    //     <Text>detail: {item.detail}</Text>
    //     <Image source={{ uri: 'http://10.0.2.2:8000/image/'+item.image }} style={styles.image}/> 
    //   </View>
      <View style={styles.container}>
      <Image source={{ uri: 'http://10.0.2.2:8000/image/'+item.image }} style={styles.image} />
      <Text style={styles.title}>Artist Name: {item.name}</Text>
      <Text style={styles.detail}>Contact Detail: {item.detail}</Text>
      
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