/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from './components/Home';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { AboutApp } from './components/AboutApp';
import { VideosGallery } from './components/VideosGallery';


// import {SplashScreen} from './components/SplashScreen';




const Stack = createNativeStackNavigator();
function App(): JSX.Element {
 
  return (
  <NavigationContainer>
<Stack.Navigator screenOptions={{headerTintColor:"#fff", headerStyle:{
  backgroundColor:"#3E8EDE"
}}}>
{/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
{/* <Stack.Screen name='Login' component={Login} options={{title:"User Login"}} /> */}
<Stack.Screen name='Home' component={Home} options={{title:"Art Boost",
}} />
<Stack.Screen name='Gallery' component={Gallery} />
<Stack.Screen name='VideosGallery' component={VideosGallery} options={{title:"Videos"}}/>
<Stack.Screen name='Contact' component={Contact} />
<Stack.Screen name='AboutApp' component={AboutApp} />
</Stack.Navigator>
  </NavigationContainer>
  );
}





export default App;
