import React from 'react';
import { Slot } from 'expo-router';
import '../styles/global.css';
import { View, Text } from 'react-native'

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-700">
        Welcome to the Expo Router aeafdsApp!
      </Text>
    </View>
   
  );
}
