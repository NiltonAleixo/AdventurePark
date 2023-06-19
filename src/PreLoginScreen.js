import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const PreLoginScreen = ({ navigation }) => {
  useEffect(() => {
    // Verificar se o usuário está logado ou não
    // Você pode adicionar sua lógica de verificação aqui
    
    // Exemplo de redirecionamento para a tela de login após 3 segundos
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    // Limpar o timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.loadingText}>Carregando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PreLoginScreen;
