import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authors } from '../data/homeData';

const TABS = ['All', 'Poets', 'Playwrights', 'Novelists', 'Journalists'];

const CATEGORY_MAP = {
  a1: ['Novelists'],
  a2: ['Novelists'],
  a3: ['Journalists'],
  a4: ['Playwrights'],
  a5: ['Poets'],
  a6: ['Journalists'],
};

const Authors = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('All');

  const data = useMemo(() => {
    if (activeTab === 'All') return authors;
    return authors.filter(a => (CATEGORY_MAP[a.id] || []).includes(activeTab));
  }, [activeTab]);

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.row}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.role} numberOfLines={2}>
            {item.role}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 18 }}
      >
        {TABS.map(t => (
          <TouchableOpacity key={t} onPress={() => setActiveTab(t)}>
            <View>
              <Text
                style={[styles.tabText, activeTab === t && styles.tabActive]}
              >
                {t}
              </Text>
              {activeTab === t && <View style={styles.tabUnderline} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No authors found</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#FFFFFF' },
  header: {
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#1A1A1A' },
  iconBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTxt: { fontSize: 18 },

  subtitle: { color: '#6B6B6B', marginTop: 8 },
  title: { color: '#54408C', fontSize: 22, fontWeight: '800', marginTop: 4 },

  tabText: { color: '#1A1A1A' },
  tabActive: { fontWeight: '800' },
  tabUnderline: { height: 2, backgroundColor: '#54408C', marginTop: 6 },

  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#EEE' },
  info: { marginLeft: 12, flex: 1 },
  name: { color: '#1A1A1A', fontWeight: '700', fontSize: 16 },
  role: { marginTop: 4, color: '#6B6B6B' },
  separator: { height: 1, backgroundColor: '#EFEFEF' },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  emptyText: { color: '#6B6B6B' },
});

export default Authors;
