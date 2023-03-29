
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';


export const Home = (props) =>{
    return(
      
        <View style={styles.container}>
          <View></View>
            <Image source={{uri:'https://www.w3schools.com/html/pic_trulli.jpg'}} style={styles.image}/>
        <View style={styles.row}>    
          <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate("Gallery")}>
            <Icon name="folder-images" size={50} color="white"/>
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Icon1 name="featured-play-list" size={50} color="white"/>
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate("Contact")}>
          <IconF name="question-circle" size={50} color="white"/>
            <Text style={styles.buttonText} >Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Icon1 name="comment" size={50} color="white"/>
            <Text style={styles.buttonText}>FAQ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate("AboutApp")}>
          <Icon name="info-with-circle" size={50} color="white"/>
            <Text style={styles.buttonText}  >About App</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button} >
          <Icon1 name="admin-panel-settings" size={50} color="white"/>
            <Text style={styles.buttonText}>Admin</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor:'#B9D9EB',
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    button: {
      flex: 1,
      marginHorizontal: 5,
      height: 100,
      backgroundColor: '#318CE7',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10,
 
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius:10,
      marginBottom:10,
    
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });