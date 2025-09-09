import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screens = [
  { id: 1, image: require('../../assets/dddd-Photoroom.png'), text: 'Bem-vindo a tela 1' },
  { id: 2, image: require('../../assets/dddd-Photoroom.png'), text: 'Bem-vindo a tela 2' },
  { id: 3, image: require('../../assets/dddd-Photoroom.png'), text: 'Última tela do onboarding' },
];

export default function Onboarding() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // FUNCTIONS
  const handleNext = () => {
    if (currentIndex < screens.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleStart = () => {
    navigation.navigate('Welcome');
  };

  const screen = screens[currentIndex];

  return (
    <View style={styles.container}>
      <Image source={screen.image} style={styles.logo} resizeMode="contain" />

      <View style={styles.container_text}>
        <Text style={styles.text}>{screen.text}</Text>
      </View>

      <View style={styles.container_buttons}>
        {currentIndex < screens.length - 1 ? (
          <TouchableOpacity style={styles.button} onPress={handleNext} activeOpacity={0.7}>
            <Text style={styles.textbutton}>NEXT</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleStart} activeOpacity={0.7}>
            <Text style={styles.textbutton}>START</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  container_text: {
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  textbutton: {
    fontSize: 18,
    color: 'yellow',
    fontWeight: 'bold',
  },
  logo: {
    width: 300,
    height: 300,
  },
  container_buttons: {
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#00AEEF',
    borderRadius: 50,
    paddingVertical: 12,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
