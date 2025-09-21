import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Cabeçalho animado */}
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Let's Go!</Text>
        <Text style={styles.step}>1 of 2</Text>
        <Text style={styles.subtitle}>
          Fill in your details so we can create your account securely.
        </Text>
      </Animatable.View>

      {/* Formulário animado */}
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        {/* Full Name */}
        <Text style={styles.title}>Full name</Text>
        <TextInput
          placeholder="Enter your full name"
          style={styles.input}
          placeholderTextColor="#999"
        />

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

        {/* Botão Next */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Password")}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
});
