import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AuthorDetails = ({ route, navigation }) => {
  const author = route?.params?.author || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Author</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {author?.avatar ? (
          <Image source={author.avatar} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, { backgroundColor: '#EEE' }]} />
        )}
        <Text style={styles.name} numberOfLines={1}>{author?.name || 'Unknown'}</Text>
        <Text style={styles.role} numberOfLines={2}>{author?.role || ''}</Text>
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
  avatar: { width: 112, height: 112, borderRadius: 56 },
  name: { marginTop: 16, fontSize: 20, fontWeight: '800', color: '#1A1A1A' },
  role: { marginTop: 6, color: '#6B6B6B' },
});

export default AuthorDetails;
