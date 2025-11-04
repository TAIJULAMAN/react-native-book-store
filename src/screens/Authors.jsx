import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { authors } from '../data/homeData';

const Authors = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={authors}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 18 }}
        contentContainerStyle={{ paddingVertical: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.avatar} style={styles.avatar} />
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.role} numberOfLines={1}>{item.role}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  card: {
    width: 96,
    alignItems: 'center',
  },
  avatar: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#EEE' },
  name: { marginTop: 8, color: '#1A1A1A', fontWeight: '700' },
  role: { marginTop: 2, color: '#6B6B6B' },
});

export default Authors;
