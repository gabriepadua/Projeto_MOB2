import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MOOOV</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
          <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
       
        <Link to={{screen: 'RegisterPage'}} style={styles.link3}>
                    Registrar
                </Link>
                <Link to={{screen: 'ForgetPasswordPage'}} style={styles.link}>
                    Esqueci a senha...
                </Link>
                
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  logo: {
    color: 'purple',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  },
  formContainer: {
    margin: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 50
  },


  link3: {
    padding: 8,
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: '2px',
    borderRadius: '15px',
    justifyContent: 'center',
    fontSize: 15
   },


   link: {
    flexDirection: 'row',
    width: "50%",
    padding: 8,
    backgroundColor: 'purple',
    borderColor: 'black',
    borderWidth: '1px',
    borderRadius: '30px',
    justifyContent: 'space-between',
    fontSize: 18
   }
  
});

export default RegisterPage;