// screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, Title, useTheme } from 'react-native-paper';
import { register } from '../../apis/register';

export const Register = ({ navigation }) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const { colors } = useTheme();

  const handleRegister = async() => {
     try {
        const response = await register({username, email, password, phonenumber})
        alert(response.message);
        navigation.navigate("login")
     } catch (error) {
        alert("đăng kí thất bại")
     }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Đăng kí tài khoản</Title>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUserName}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Phonenumber"
        value={phonenumber}
        onChangeText={setPhonenumber}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        mode="outlined"
      />
      <Button mode="contained" onPress={handleRegister} style={styles.button} contentStyle={styles.buttonContent}>
        Register
      </Button>
      <Text style={styles.footerText}>
        Bạn đã có tài khoản?{' '}
        <Text style={{ color: colors.primary }} onPress={() => navigation.navigate('login')}>
          Đăng nhập
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 10,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
  },
});

