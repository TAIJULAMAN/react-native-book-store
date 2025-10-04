import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>Enter your email to receive a verification code.</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Verification')}>
        <Text style={styles.buttonText}>Send Code</Text>
      </TouchableOpacity>
      <View style={{height: 12}} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Back to Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 16, paddingHorizontal: 24, backgroundColor: '#FFFFFF', justifyContent: 'center'},
  title: {fontSize: 28, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 8, textAlign: 'center'},
  subtitle: {fontSize: 14, color: '#6B6B6B', marginBottom: 12, textAlign: 'center'},
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

export default ForgotPassword;
