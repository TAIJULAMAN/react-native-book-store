import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { topOfWeek } from '../data/homeData';

const AuthorDetails = ({ route, navigation }) => {
  const author = route?.params?.author || {};

  const renderStars = (rating = 4) => {
    const total = 5;
    return (
      <View style={{ flexDirection: 'row' }}>
        {Array.from({ length: total }).map((_, i) => (
          <Text key={i} style={{ color: i < rating ? '#F5B300' : '#D0D0D0', marginRight: 2 }}>★</Text>
        ))}
      </View>
    );
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.prodCard} onPress={() => navigation?.navigate?.('BookDetails', { book: item })}>
      <Image source={item.image} style={styles.prodImage} resizeMode="cover" />
      <Text style={styles.prodTitle} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.prodPrice}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {author?.avatar ? (
          <Image source={author.avatar} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, { backgroundColor: '#EEE' }]} />
        )}
        <Text style={styles.role}>{author?.role || 'Novelist'}</Text>
        <Text style={styles.name} numberOfLines={1}>{author?.name || 'Unknown'}</Text>

        <View style={styles.ratingRow}>
          {renderStars(4)}
          <Text style={styles.ratingText}>(4.0)</Text>
        </View>

        <View style={{ width: '100%', marginTop: 16 }}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutTxt}>
            Gunty was born and raised in South Bend, Indiana. She graduated from the University of Notre Dame with a Bachelor of Arts in English and from New York University.
          </Text>
        </View>

        <View style={{ width: '100%', marginTop: 16 }}>
          <Text style={styles.sectionTitle}>Products</Text>
          <FlatList
            style={{ marginTop: 12 }}
            data={topOfWeek}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={renderProduct}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 16, alignItems: 'center' },
  avatar: { width: 112, height: 112, borderRadius: 56 },
  name: { marginTop: 8, fontSize: 20, fontWeight: '800', color: '#1A1A1A' },
  role: { marginTop: 8, color: '#6B6B6B' },
  ratingRow: { marginTop: 8, flexDirection: 'row', alignItems: 'center' },
  ratingText: { marginLeft: 8, color: '#6B6B6B', fontWeight: '700' },

  sectionTitle: { fontSize: 16, fontWeight: '800', color: '#1A1A1A' },
  aboutTxt: { marginTop: 8, color: '#6B6B6B', lineHeight: 20 },

  prodCard: { width: '48%', marginBottom: 14 },
  prodImage: { width: '100%', height: 120, borderRadius: 10, backgroundColor: '#EEE' },
  prodTitle: { marginTop: 8, color: '#1A1A1A', fontWeight: '600' },
  prodPrice: { marginTop: 4, color: '#54408C', fontWeight: '700' },
});

export default AuthorDetails;
