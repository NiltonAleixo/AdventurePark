import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para fazer o login do usuário
    // Você pode adicionar sua lógica de autenticação aqui
  };

  const handleGuestAccess = () => {
    // Navegar para a tela de convidado
    navigation.navigate('GuestScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../components/logo.png')} style={styles.logo} />
      <Text style={styles.heading}> </Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} />
        <Button title="Convidado" onPress={handleGuestAccess} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5', // Defina a cor de fundo desejada aqui
  },
  logo: {
    width: 320,
    height: 150,
    marginBottom: 0,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10, // Adiciona bordas arredondadas aos inputs
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default LoginScreen;
