import React from 'react';
import { View } from 'react-native';
import Routes from './src/routes';

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  );
}
