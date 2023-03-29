import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const API_URL = 'https://example.com/api';


export const Contact = (props) =>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handlePress = () => {
    fetch('http://10.0.2.2:8000/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        mobile:mobile,
        message:message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        Alert.alert(
            'Message',
            'Thank you for contacting us',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

    return(
        <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile"
        value={mobile}
        onChangeText={(text) => setMobile(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Submit" onPress={handlePress} />
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
    input: {
      height: 50,
      width: '100%',
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });