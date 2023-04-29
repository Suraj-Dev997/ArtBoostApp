import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text,Alert, } from 'react-native';

import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {axios} from 'axios';

export const Login = ({navigation }) =>{
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


const handleLogin = async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Invalid password', 'Password must be at least 8 characters long.');
      return;
    }
  // Call API function here to authenticate user
  // Example API call using fetch:
  try {
    const response = await fetch('http://10.0.2.2:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
       await AsyncStorage.setItem('email','email');
      const data = await response.json();
      const token = data.token; // Assuming token is returned in response

      // Save token to local storage or secure storage
      // For example, using AsyncStorage or SecureStore

      // Redirect to home screen or perform desired action
      navigation.navigate('Home', { token: response.token });
      Alert.alert('Success', 'Logged in successfully');
    } else {
      console.log('Error')
      Alert.alert('Error', 'Invalid email or password');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'Failed to login');
  }
};

    return(
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999999"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999999"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}  onPress={handleLogin}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        {/* <Text style={styles.forgotPasswordText}>Forgot Password?</Text> */}
      </TouchableOpacity>
    </View>
    );
  };

  
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#d4d4d2',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#7a057a',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#7a057a',
    fontSize: 14,
  },
});