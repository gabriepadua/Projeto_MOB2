import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const ForgotPasswordPage = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MOOOV</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Redefinir Senha"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo: {
    color: 'purple',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
  formContainer: {
    margin: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },
});

export default ForgotPasswordPage;
