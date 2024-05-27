import React, { useState } from 'react';
import { View, StyleSheet, Image, DevSettings } from 'react-native';
import { TextInput, Button, Text, Title, useTheme } from 'react-native-paper';
import { login } from '../../apis/login';
import { saveToken } from '../../common/asyncFn';

export const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();

  const handleLogin = async() => {
    try {
        const respone = await login({username: username, password: password})
        await saveToken(respone.accessToken);
        DevSettings.reload()
    } catch (error:any) {
        alert(error.response.data.message);
    }
  };

  return (
    <View style={styles.container}> 
      <Image style = {{width: "100%", height: "100%"}} source={{uri: "https://media.istockphoto.com/id/1304435581/photo/fashionable-young-couple-sitting-on-concrete-wall-modern-fashion-portrait.jpg?s=612x612&w=0&k=20&c=rvPt2yCkRJZAPcLanUe41MyFcGCGgoeq2RYerTnx0MY="}}/>
      <View style = {{position: "absolute", width: "80%", marginLeft: 50}}>
      <Title style={styles.title}>Đăng nhập</Title>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
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
      <Button mode="contained" onPress={handleLogin} style={styles.button} contentStyle={styles.buttonContent}>
        Đăng nhập
      </Button>
      <Text style={styles.footerText}>
        Bạn chưa có tài khoản?{' '}
        <Text style={{ color: colors.primary }} onPress={() => navigation.navigate("register")}>
          Đăng ký
        </Text>
      </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
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

