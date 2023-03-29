import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native/Libraries/Text/Text';

 export const SplashScreen = (props) => {
    const navigation = useNavigation();

    // useEffect(() => {
    //   setTimeout(() => {
    //     navigation.navigate('Home');
    //   }, 3000); 
    // }, []);

  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.logo}
        source={require('../images/profile.png')}
      /> */}
      <Text>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    logo: {
      width: 200,
      height: 200,
    },
  });
  
