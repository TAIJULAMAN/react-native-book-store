import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

const ResetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput style={styles.input} placeholder="New password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm new password" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Congratulations')}>
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>
      <View style={{height: 12}} />
      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <Text style={styles.link}>Back to Sign In</Text>
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

export default ResetPassword;
