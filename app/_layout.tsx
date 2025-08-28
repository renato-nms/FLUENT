import React from 'react';
import { View } from 'react-native';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="#38A69D"/>
      
      <Routes />
    </View>
  );
}
