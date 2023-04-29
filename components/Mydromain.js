import { useEffect,useState } from 'react';
import { Text, View, Button,Image, FlatList, StyleSheet, ScrollView,TextInput, TouchableOpacity,  } from 'react-native';
import { Footer } from './Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HB } from './Hb';
import Addmydro from './Addmydro';
import Mydro from './Mydro';


export const Mydromain = ({ onChangeText, onPress,data  }) =>{
  const renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.name}>Suraj</Text>
        <Text style={styles.mobile}>123456789</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Action</Text>
        </TouchableOpacity>
      </View>
    );
  };


    return(
      <View>
        <View style={styles.container}>
            <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search..."
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name="search" size={20} color="white" />
      </TouchableOpacity>
      
      </View>
      <View><Mydro/></View>
     
      <View>
      <View style={styles.row}>
        <Text style={styles.columnHeader}>Employee Id</Text>
        <Text style={styles.columnHeader}>Employee Name</Text>
        <Text style={styles.columnHeader}>Action</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>1</Text>
        <Text style={styles.mobile}>Rohit</Text>
        <TouchableOpacity style={styles.actionButton}>
        <Icon name="info" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
        <Icon name="edit" size={20} color="white" />
        </TouchableOpacity>
        
      </View>
      </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 10,
    },
    row: {
      textAlign:'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopColor: '#ccc',
      borderBottomColor: '#ccc',
      paddingVertical: 10,
    },
    name: {
      textAlign:'center',
      flex: 2,
      marginRight: 10,
    },
    mobile: {
      textAlign:'center',
      flex: 2,
      marginRight: 10,
    },
    actionButton: {
      flex: 1,
      margin:2,
      backgroundColor: '#7a057a',
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    actionText: {
      color: 'white',
    },
    columnHeader: {
      textAlign:'center',
      fontWeight: 'bold',
      flex: 2,
      marginRight: 10,
    },
    container1: {
      alignItems: 'center',
      padding: 10,
      // justifyContent: 'center',
      
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    paragraph: {
      fontSize: 15,
      lineHeight: 20,
      marginBottom: 5,
    },
    input: {
      flex: 1,
      marginRight: 10,
    },
    button: {
      backgroundColor: '#7a057a',
      padding: 10,
      borderRadius: 5,
    },
  });
