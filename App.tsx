/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet,View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from './components/Home';

import { Revenue } from './components/Revenue';
import { HB } from './components/Hb';


import {SplashScreen} from './components/SplashScreen';


import { Login } from './components/Login';
import UserProfile from './components/UserProfile';
import Ham from './components/Ham';

import { Mydromain } from './components/Mydromain';

import { Calender } from './components/Calender';








// import {SplashScreen} from './components/SplashScreen';




const Stack = createNativeStackNavigator();
function App(): JSX.Element {
 
  return (
  <NavigationContainer>
<Stack.Navigator screenOptions={{
  headerRight:()=><Ham/>,
  headerTintColor:"#fff", headerStyle:{
  backgroundColor:"#7a057a",  
},headerLeft:()=>null,
}}>
 
    <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
{/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}

<Stack.Screen name='Home' component={Home} options={{title:"DIGI",headerLeft:()=> null,
}} />
<Stack.Screen name='Login' component={Login} options={{title:"User Login",headerShown: false }} />
<Stack.Screen name='UserProfile' component={UserProfile}  />
<Stack.Screen name='Ham' component={Ham} />
<Stack.Screen name='Calender' component={Calender} />

<Stack.Screen name='Revenue' component={Revenue} options={{title:"Revenue Prediction",
}}/>
<Stack.Screen name='Mydromain' component={Mydromain} options={{title:"MyDydro Tracking Format",
}}/>
<Stack.Screen name='HB' component={HB} options={{title:"HB Activity ",headerRight:()=><View style={{ flexDirection: 'row' }}>
           
            <Ham />
          </View>,
}}/>



</Stack.Navigator>
  </NavigationContainer>
  );
}

// const Styles = StyleSheet.create({
//   hamburgerIcon: {
//     fontSize: 30,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   userName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   userDetail: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   logoutButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   logoutButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });



export default App;
