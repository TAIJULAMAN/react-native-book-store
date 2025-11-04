import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { bestVendors } from '../data/homeData';

const TABS = ['All', 'Books', 'Poems', 'Special for you', 'Stationery'];

const Vendors = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('All');

  const data = useMemo(() => {
    // Placeholder: all items fall under 'All'. Add category field to filter in future.
    return bestVendors;
  }, [activeTab]);

  const renderStars = (rating = 0) => {
    const total = 5;
    return (
      <View style={{ flexDirection: 'row', marginTop: 6 }}>
        {Array.from({ length: total }).map((_, i) => (
          <Text key={i} style={{ color: i < rating ? '#F5B300' : '#D0D0D0', marginRight: 2 }}>★</Text>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
          <Text style={styles.iconTxt}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vendors</Text>
        <TouchableOpacity onPress={() => {}} style={styles.iconBtn}>
          <Text style={styles.iconTxt}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Subtitle */}
      {/* <View style={{ paddingHorizontal: 16, marginTop: 6 }}>
        <Text style={{ color: '#9E9E9E' }}>Our Vendors</Text>
        <Text style={{ color: '#54408C', fontWeight: '800', fontSize: 16 }}>Vendors</Text>
      </View> */}

      {/* Tabs */}
      <ScrollView
        style={{ marginBottom: 4 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 18, marginTop: 4 }}
      >
        {TABS.map(t => (
          <TouchableOpacity key={t} onPress={() => setActiveTab(t)}>
            <View>
              <Text style={[styles.tabText, activeTab === t && styles.tabActive]}>{t}</Text>
              {activeTab === t && <View style={styles.tabUnderline} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Grid */}
      <FlatList
        style={{ marginTop: 0 }}
        data={data}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 14 }}
        renderItem={({ item }) => (
          <View style={styles.cardWrap}>
            <View style={styles.logoCard}>
              <Image source={item.logo} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
            {renderStars(item.rating)}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#1A1A1A' },
  iconBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  iconTxt: { fontSize: 18 },

  tabText: { color: '#1A1A1A' },
  tabActive: { fontWeight: '800' },
  tabUnderline: { height: 2, backgroundColor: '#54408C', marginTop: 6 },

  cardWrap: { width: 100, alignItems: 'flex-start' },
  logoCard: {
    width: 100,
    height: 76,
    borderRadius: 12,
    backgroundColor: '#F6F6F8',
    borderWidth: 1,
    borderColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 72, height: 36 },
  name: { marginTop: 8, fontWeight: '700', color: '#1A1A1A' },
});

export default Vendors;
