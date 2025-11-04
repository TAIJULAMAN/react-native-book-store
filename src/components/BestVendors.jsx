import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const BestVendors = ({ vendors = [], onSeeAll }) => {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Vendors</Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ marginTop: 12 }}
        data={vendors}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        renderItem={({ item }) => (
          <View style={styles.vendorCard}>
            <Image source={item.logo} style={styles.vendorLogo} resizeMode="contain" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#1A1A1A' },
  seeAll: { color: '#54408C', fontWeight: '700' },
  vendorCard: {
    width: 92,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#F6F6F8',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  vendorLogo: { width: 72, height: 36 },
});

export default BestVendors;
