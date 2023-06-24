import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link } from "@react-navigation/native";
import AuthContext from '../../../context/AuthContext';
import { TouchableOpacity } from 'react-native-web';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implemente a lógica de autenticação do usuário aqui
    // Verifique se o usuário e a senha correspondem aos dados registrados anteriormente

    // Exemplo de lógica de autenticação básica
    if (username === 'usuarioteste' && password === 'senhateste') {
      console.log('Login bem-sucedido');
      // Redirecione para a página de dashboard ou faça qualquer outra ação necessária
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  const { signIn } = useContext(AuthContext)
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
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.link} onPress={() => signIn()}>Login</TouchableOpacity>
                <Link to={{screen: 'ForgetPasswordPage'}} style={styles.link}>
                    Esqueci a senha...
                </Link>
                <Link to={{screen: 'RegisterPage'}} style={styles.link}>
                    Registrar
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

export default LoginPage;