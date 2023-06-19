import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const UserScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: 'Nome do Usuário',
    username: 'nomeusuario',
    email: 'usuario@example.com',
    password: '********',
    // Outros campos de registro do usuário
  });

  const handleEditProfile = () => {
    // Navegar para a tela de edição de perfil
    navigation.navigate('EditProfile', { userData });
  };

  const handleRecoverPassword = () => {
    // Navegar para a tela de recuperação de senha
    navigation.navigate('RecoverPassword');
  };

  const handleViewActivityDetails = (activityId) => {
    // Navegar para a tela de detalhes da atividade
    navigation.navigate('ActivityDetails', { activityId });
  };

  const handleFilterByActivityType = (activityType) => {
    // Aplicar filtro por tipo de atividade
    // Implemente a lógica de filtragem aqui
  };

  const handleFilterByAvailableSlots = () => {
    // Aplicar filtro por atividades com vagas disponíveis
    // Implemente a lógica de filtragem aqui
  };

  const handleSearchActivity = (activityName) => {
    // Pesquisar atividade por nome
    // Implemente a lógica de pesquisa aqui
  };

  const handleSignUpForActivity = (activityId) => {
    // Inscrever-se em uma atividade
    // Implemente a lógica de inscrição aqui
  };

  const handleCancelActivityRegistration = (activityId) => {
    // Cancelar inscrição em uma atividade
    // Implemente a lógica de cancelamento aqui
  };

  const handleAddToWishlist = (activityId) => {
    // Adicionar atividade à lista de desejos
    // Implemente a lógica de adição à lista de desejos aqui
  };

  const handleRemoveFromWishlist = (activityId) => {
    // Remover atividade da lista de desejos
    // Implemente a lógica de remoção da lista de desejos aqui
  };

  return (
    <View>
      <Text>Nome: {userData.name}</Text>
      <Text>Nome de usuário: {userData.username}</Text>
      <Text>Email: {userData.email}</Text>

      {/* Botão para editar perfil */}
      <Button title="Editar Perfil" onPress={handleEditProfile} />

      {/* Botão para recuperar senha */}
      <Button title="Recuperar Senha" onPress={handleRecoverPassword} />

      {/* Botão para visualizar atividades */}
      <Button
        title="Ver Atividades"
        onPress={() => navigation.navigate('ActivityList')}
      />

      {/* Botão para filtrar por tipo de atividade */}
      <Button
        title="Filtrar por Tipo de Atividade"
        onPress={() => handleFilterByActivityType('Tipo de Atividade')}
      />

      {/* Botão para filtrar por atividades com vagas disponíveis */}
      <Button
        title="Filtrar por Vagas Disponíveis"
        onPress={handleFilterByAvailableSlots}
      />

      {/* Botão para pesquisar atividade por nome */}
      <Button
        title="Pesquisar Atividade"
        onPress={() => handleSearchActivity('Nome da Atividade')}
      />

      {/* Botão para se inscrever em uma atividade */}
      <Button
        title="Inscrever-se em Atividade"
        onPress={() => handleSignUpForActivity('id-da-atividade')}
      />

      {/* Botão para cancelar inscrição em uma atividade */}
      <Button
        title="Cancelar Inscrição em Atividade"
        onPress={() => handleCancelActivityRegistration('id-da-atividade')}
      />

      {/* Botão para adicionar à lista de desejos */}
      <Button
        title="Adicionar à Lista de Desejos"
        onPress={() => handleAddToWishlist('id-da-atividade')}
      />

      {/* Botão para remover da lista de desejos */}
      <Button
        title="Remover da Lista de Desejos"
        onPress={() => handleRemoveFromWishlist('id-da-atividade')}
      />
    </View>
  );
};

export default UserScreen;
