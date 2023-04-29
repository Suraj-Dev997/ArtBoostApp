
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView,Linking,StatusBar  } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';







export const Home = (props) =>{
  const handleButtonClick = () => {
    // Open the website in the default browser
    Linking.openURL('http://10.0.2.2:8000');
  };
    return(
        <View style={styles.container}>
           <StatusBar backgroundColor="#7a057a"/>
          <View style={styles.container1}> 
        <View style={styles.row}>    
          <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate("HB")}>
          <IconA name="antdesign" size={30} color="#fff"/>
            <Text style={styles.buttonText}>HB Camp Activity</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate("Revenue")}>
          <IconA name="antdesign" size={30} color="#fff"/>
            <Text style={styles.buttonText}>Revenue Prediction Activity</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate("Mydromain")}>
          <IconA name="antdesign" size={30} color="#fff"/>
            <Text style={styles.buttonText}>MyDydro Tracking Format</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate("Calender")}>
          <IconA name="antdesign" size={30} color="#fff" />
            <Text style={styles.buttonText}>Quiz Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
          <IconA name="antdesign" size={30} color="#fff"/>
            <Text style={styles.buttonText} >Poster</Text>
          </TouchableOpacity>
        </View>
          </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor:'#fff',
      flex: 1,
 
      justifyContent: 'center',
      
    },
    container1: {
      alignItems: 'center',
      padding: 10,
      // justifyContent: 'center',
      
    },
    row: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    button: {
      flex: 1,
      marginHorizontal: 3,
      height: 100,
      textAlign:'center',
      backgroundColor: '#7a057a',
      justifyContent: 'center',
      alignItems: 'center',
      // borderRadius:10,
 
    },
    image: {
      width: '100%',
      height: 140,
      // borderRadius:10,
      marginBottom:6,
    
    },
    buttonText: {
      marginTop:10,
      textAlign:'center',
      color: 'white',
      fontSize: 18,
     
    },
  });