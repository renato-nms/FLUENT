import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";

export default function SignIn() {
  const navigation = useNavigation();
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // botão só habilita quando os dois estão true
  const isButtonEnabled = acceptedPrivacy && acceptedTerms;

  return (
    <View style={styles.container}>
      {/* Cabeçalho animado */}
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Almost there!</Text>
        <Text style={styles.subtitle}>
          Create a password to access the platform securely
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

        {/* Checkboxes */}
        <View style={styles.checkboxRow}>
          <Checkbox
            value={acceptedPrivacy}
            onValueChange={setAcceptedPrivacy}
            color={acceptedPrivacy ? "#00bcd4" : undefined}
          />
          <Text style={styles.checkboxLabel}>I agree to the privacy terms</Text>
        </View>

        <View style={styles.checkboxRow}>
          <Checkbox
            value={acceptedTerms}
            onValueChange={setAcceptedTerms}
            color={acceptedTerms ? "#00bcd4" : undefined}
          />
          <Text style={styles.checkboxLabel}>
            I have read and accept the terms of service
          </Text>
        </View>

        {/* Confirm */}
        <TouchableOpacity
          style={[styles.button, !isButtonEnabled && styles.buttonDisabled]}
          onPress={() => navigation.navigate("Login")}
          activeOpacity={0.7}
          disabled={!isButtonEnabled}
        >
          <Text style={styles.buttonText}>Confirm</Text>
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
    color: "#00bcd4",
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
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#00bcd4",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "yellow",
    fontSize: 16,
    fontWeight: "bold",
  },
});
