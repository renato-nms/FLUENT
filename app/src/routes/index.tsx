import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';

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
        options={{ title: 'Bem-vindo' }} // título customizado
      />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
