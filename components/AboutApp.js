

import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';



const Tab =  createMaterialTopTabNavigator();
export const AboutApp = (props) =>{
 

    return(
        <Tab.Navigator>
        <Tab.Screen name='About' component={About} />
        <Tab.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
        <Tab.Screen name='Version' component={Version} />
        </Tab.Navigator>
    );
  }


  const About = () =>{  

    return(<View>
        <Text>About</Text>
    </View>);
  }

  const PrivacyPolicy = () =>{

    return(<View>
        <Text>Privacy Policy</Text>
    </View>);
  }
  const Version = () =>{

    return(<View>
        <Text>Version</Text>
    </View>);
  }
  const styles = StyleSheet.create({
    container: {
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