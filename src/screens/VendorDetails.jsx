import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const VendorDetails = ({ route }) => {
  const vendor = route?.params?.vendor || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Vendor</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {vendor?.logo ? (
          <View style={styles.logoWrap}>
            <Image source={vendor.logo} style={styles.logo} resizeMode="contain" />
          </View>
        ) : (
          <View style={[styles.logoWrap, { backgroundColor: '#EEE' }]} />
        )}
        <Text style={styles.name} numberOfLines={1}>{vendor?.name || 'Unknown'}</Text>
        {!!vendor?.rating && (
          <Text style={styles.rating}>Rating: {vendor.rating}/5</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#1A1A1A' },
  content: { alignItems: 'center', padding: 16 },
  logoWrap: {
    width: 140,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#F6F6F8',
    borderWidth: 1,
    borderColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 100, height: 48 },
  name: { marginTop: 16, fontSize: 20, fontWeight: '800', color: '#1A1A1A' },
  rating: { marginTop: 6, color: '#6B6B6B' },
});

export default VendorDetails;
