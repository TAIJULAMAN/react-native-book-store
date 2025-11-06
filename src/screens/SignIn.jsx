import React from 'react';
import {Text, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignIn = ({ navigation, onSignInSuccess }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
          // Handle your sign in logic here
          // On successful sign in, call:
          onSignInSuccess();
        }}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={{height: 12}} />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={{height: 8}} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Create an account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 16, paddingHorizontal: 24, backgroundColor: '#FFFFFF', justifyContent: 'center'},
  title: {fontSize: 28, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 16, textAlign: 'center'},
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    backgroundColor: '#FAFAFA',
  },
  button: {
    backgroundColor: '#54408C',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {color: '#FFFFFF', fontWeight: '700', fontSize: 16},
  link: {color: '#54408C', textAlign: 'center', fontWeight: '600'},
});

export default SignIn;
