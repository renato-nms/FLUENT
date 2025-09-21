import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
=======
import * as Animatable from 'react-native-animatable';
>>>>>>> main

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      {/* Botão para voltar */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Go back</Text>
      </TouchableOpacity>
      
      {/* Logo */}
      <View style={styles.containerLogo}>
=======
      {/* Logo animada */}
      <Animatable.View 
        animation="fadeInDown"   // entra de cima
        duration={1200}
        style={styles.containerLogo}
      >
>>>>>>> main
        <Image
          source={require('../../assets/dddd-Photoroom.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animatable.View>

<<<<<<< HEAD
      {/* Botões */}
      <View style={styles.containerButtons}>
        <TouchableOpacity
=======
      {/* Botões animados */}
      <Animatable.View 
        animation="fadeInUp"     // entra de baixo
        duration={1200}
        delay={400}              // começa depois da logo
        style={styles.containerButtons}
      >
        <TouchableOpacity 
>>>>>>> main
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>LOG-IN</Text>
        </TouchableOpacity>

<<<<<<< HEAD
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
=======
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
>>>>>>> main
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>SIGN-IN</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#fff', 
=======
    backgroundColor: '#fff',
>>>>>>> main
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 400,
  },
  containerButtons: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#00AEEF',
    borderRadius: 50,
    paddingVertical: 12,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'yellow',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
