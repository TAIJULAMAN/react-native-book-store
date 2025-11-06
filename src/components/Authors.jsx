import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const Authors = ({ authors = [], onSeeAll }) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Authors</Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ marginTop: 12 }}
        data={authors}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        renderItem={({ item }) => (
          <View style={styles.authorCard}>
            <Image source={item.avatar} style={styles.avatar} />
            <Text style={styles.authorName} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.authorRole} numberOfLines={1}>{item.role}</Text>
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
  authorCard: {
    width: 96,
    alignItems: 'center',
    marginRight: 12,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#EEE',
  },
  authorName: { marginTop: 8, color: '#1A1A1A', fontWeight: '700' },
  authorRole: { marginTop: 2, color: '#6B6B6B' },
});

export default Authors;
