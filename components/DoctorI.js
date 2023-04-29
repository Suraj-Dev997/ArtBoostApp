import { useEffect,useState } from 'react';
import { Text, View, Button,Image, FlatList, StyleSheet, ScrollView,TextInput, TouchableOpacity,  } from 'react-native';
import { Footer } from './Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddDoctor from './AddDoctor';

export const DoctorI = ({ onChangeText, onPress,data  }) =>{
  const renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.name}>Dr Raj Sharma</Text>
        <Text style={styles.mobile}>121212121</Text>
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
      <View><AddDoctor/></View>
      <View>
      <View style={styles.row}>
        <Text style={styles.columnHeader}>Name</Text>
        <Text style={styles.columnHeader}>Mobile</Text>
        <Text style={styles.columnHeader}>Action</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>Dr Raj Sharma</Text>
        <Text style={styles.mobile}>121212121</Text>
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
