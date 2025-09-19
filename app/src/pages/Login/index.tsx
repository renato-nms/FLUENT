import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

          {/* Logo animada */}
          <Animatable.View 
            animation="fadeInDown"   // entra de cima
            duration={1200}
            style={styles.containerLogo}
          >
            <Image
              source={require('../../assets/dddd-Photoroom.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </Animatable.View>
    

      {/* Cabeçalho animado */}
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>You´re Welcome!</Text>
        <Text style={styles.subtitle}>
          Fill in your details so we can create your account securely.
        </Text>
      </Animatable.View>

      {/* Formulário animado */}
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        {/* Email */}
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Enter your Email"
          style={styles.input}
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        {/* Password */}
        <Text style={styles.title}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          placeholderTextColor="#999"
          secureTextEntry
        />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerHeader: {
    marginTop: "15%",
    marginBottom: "8%",
    paddingHorizontal: 20,
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00bcd4", // azul
  },
  step: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    marginTop: 10,
    lineHeight: 20,
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 15,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 8,
    fontSize: 14,
    color: "#000",
  },
  button: {
    backgroundColor: "#00bcd4",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
    containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
    logo: {
        width: 400,
        height: 400,
    }

});
