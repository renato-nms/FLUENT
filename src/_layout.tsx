import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  // Stack navigator simples: cada tela empilha sobre a anterior
  return <Stack screenOptions={{ headerShown: true }} />;
}
