import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos do Parque</Text>
      {/* Restante do conteúdo da tela */}
      <Button
        title="Enviar Mensagem"
        onPress={() => {
          // Lógica para enviar mensagem
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Restante dos estilos
});

export default ContactScreen;
