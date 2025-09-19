import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import Login from '../pages/Login';
import Password from '../pages/Password';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF5733', // muda a cor do header
        },
        headerTintColor: '#fff', // cor do texto/ícones
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ headerShown: false}} // título customizado
      />
      <Stack.Screen
       name="SignIn" 
       component={SignIn}
       options={{ headerShown: false}} 
       />
       <Stack.Screen
       name="Password"
       component={Password}
       options={{ headerShown: false}}
       />
       <Stack.Screen
       name="Login"
       component={Login}
       options={{ headerShown: false}}
       />
    </Stack.Navigator>
  );
}
