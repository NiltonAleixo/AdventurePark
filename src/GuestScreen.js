import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Importar o DateTimePicker correto
import { Picker } from '@react-native-picker/picker'; // Importar o Picker correto


const GuestScreen = () => {
  const [photo, setPhoto] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setBirthdate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Convidado</Text>

      <TextInput
        placeholder="Foto"
        value={photo}
        onChangeText={setPhoto}
        style={styles.input}
      />

      <TextInput
        placeholder="Nome de Usuário"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Sobrenome"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />

      <View style={styles.datePickerContainer}>
        <Text>Data de Nascimento:</Text>
        {/* <DateTimePicker
          value={birthdate}
          mode="date"
          display="default"
          onChange={handleDateChange}
          style={styles.datePicker}
        /> */}
      </View>

      <TextInput
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />

      <TextInput
        placeholder="Cidade"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />

      <TextInput
        placeholder="Código Postal"
        value={postalCode}
        onChangeText={setPostalCode}
        style={styles.input}
      />

      <Button
        title="Cadastrar"
        onPress={() => {
          // Lógica para cadastrar o convidado
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
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  datePicker: {
    width: 150,
  },
});

export default GuestScreen;
