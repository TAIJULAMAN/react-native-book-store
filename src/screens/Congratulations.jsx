import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const Congratulations = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Congratulations 🎉</Text>
      <Text style={styles.subtitle}>Your password has been updated successfully.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('SignIn')}>
        <Text style={styles.buttonText}>Back to Sign In</Text>
      </TouchableOpacity>
      <View style={{height: 12}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 16, paddingHorizontal: 24, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 28, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 8, textAlign: 'center'},
  subtitle: {fontSize: 14, color: '#6B6B6B', marginBottom: 16, textAlign: 'center'},
  button: {
    backgroundColor: '#54408C',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 18,
    marginTop: 8,
  },
  buttonText: {color: '#FFFFFF', fontWeight: '700', fontSize: 16},
});

export default Congratulations;
