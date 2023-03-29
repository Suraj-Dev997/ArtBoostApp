import { Text, View, Button } from 'react-native';
export const Login = (props) =>{
    return(
      <View>
      <Text>Login</Text>
      <Button title='Go to home page' onPress={()=> props.navigation.navigate("Home")}/>
      </View>
    );
  };