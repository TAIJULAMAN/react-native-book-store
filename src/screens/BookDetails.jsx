import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BookDetails = ({ route, navigation }) => {
  const book = route?.params?.book || {};
  const [fav, setFav] = React.useState(false);
  const [qty, setQty] = React.useState(1);

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {book?.image ? (
          <Image source={book.image} style={styles.cover} resizeMode="cover" />
        ) : (
          <View style={[styles.cover, { backgroundColor: '#EEE' }]} />
        )}

        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={2}>{book?.title || 'Book'}</Text>
          <TouchableOpacity style={styles.favBtn} onPress={() => setFav(v => !v)}>
            <Text style={[styles.favIcon, fav && styles.favIconActive]}>{fav ? '♥' : '♡'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.vendorRow}>
          <Image source={require('../../assets/v4.png')} style={styles.vendorLogo} resizeMode="contain" />
          <Text style={styles.vendorName}>GoodDay</Text>
        </View>

        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim ac ac ac. Nibh et sed ac, eget malesuada.
        </Text>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.reviewLabel}>Review</Text>
          <View style={styles.reviewRow}>
            {renderStars(4)}
            <Text style={styles.ratingText}>(4.0)</Text>
          </View>
        </View>

        <View style={styles.buyRow}>
          <View style={styles.qtyWrap}>
            <TouchableOpacity
              onPress={() => setQty(q => Math.max(1, q - 1))}
              style={[styles.qtyBtn, { backgroundColor: '#F3F1FA' }]}
            >
              <Text style={styles.qtyBtnTxt}>−</Text>
            </TouchableOpacity>
            <Text style={styles.qtyValue}>{qty}</Text>
            <TouchableOpacity
              onPress={() => setQty(q => q + 1)}
              style={[styles.qtyBtn, { backgroundColor: '#F3F1FA' }]}
            >
              <Text style={styles.qtyBtnTxt}>+</Text>
            </TouchableOpacity>
          </View>
          {book?.price != null && (
            <Text style={styles.price}>${Number(book.price).toFixed(2)}</Text>
          )}
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={[styles.actionBtn, styles.primaryBtn]} onPress={() => navigation.goBack()}>
            <Text style={styles.primaryTxt}>Continue shopping</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionBtn, styles.secondaryBtn]}
            onPress={() => navigation.navigate('Cart', { book, qty })}
          >
            <Text style={styles.secondaryTxt}>View cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 16 },
  cover: { width: '100%', height: 260, borderRadius: 12, backgroundColor: '#EEE' },
  titleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 },
  title: { fontSize: 20, fontWeight: '800', color: '#1A1A1A', flex: 1, paddingRight: 12 },
  favBtn: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  favIcon: { fontSize: 18, color: '#8E8E8E' },
  favIconActive: { color: '#6B58B8' },

  vendorRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  vendorLogo: { width: 64, height: 20 },
  vendorName: { marginLeft: 8, color: '#1A1A1A', fontWeight: '700' },

  desc: { color: '#6B6B6B', marginTop: 12, lineHeight: 20 },
  reviewLabel: { marginTop: 8, fontWeight: '800', color: '#1A1A1A' },
  reviewRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  ratingText: { marginLeft: 8, color: '#6B6B6B', fontWeight: '700' },

  buyRow: { marginTop: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  qtyWrap: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#EEE', borderRadius: 24, paddingHorizontal: 8, paddingVertical: 6 },
  qtyBtn: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  qtyBtnTxt: { color: '#54408C', fontWeight: '700', fontSize: 16 },
  qtyValue: { marginHorizontal: 12, fontWeight: '700', color: '#1A1A1A' },
  price: { color: '#54408C', fontWeight: '700', fontSize: 18 },

  actions: { flexDirection: 'row', gap: 12, marginTop: 16 },
  actionBtn: { flex: 1, paddingVertical: 12, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  primaryBtn: { backgroundColor: '#54408C' },
  primaryTxt: { color: '#FFFFFF', fontWeight: '700' },
  secondaryBtn: { backgroundColor: '#F3F1FA' },
  secondaryTxt: { color: '#54408C', fontWeight: '700' },
});

export default BookDetails;
