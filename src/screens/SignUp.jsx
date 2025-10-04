import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Congratulations') }>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{height: 12}} />
      <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
        <Text style={styles.link}>Already have an account? Sign In</Text>
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

export default SignUp;
