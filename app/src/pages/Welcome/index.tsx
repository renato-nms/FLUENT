import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      
      {/* Logo */}
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/dddd-Photoroom.png')}
          style={styles.logo}
          resizeMode="contain"
          
        />
      </View>

      {/* Botões */}
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOG-IN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIG-IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fundo branco igual à imagem
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  containerButtons: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20, // espaço entre botões
  },
  button: {
    backgroundColor: '#00AEEF', // azul igual da imagem
    borderRadius: 50,
    paddingVertical: 12,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'yellow',
    fontWeight: 'bold',
    fontStyle: 'italic', // itálico igual ao print
  },
});
