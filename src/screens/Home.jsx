import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import OfferSlider from '../components/OfferSlider';
import TopOfWeek from '../components/TopOfWeek';
import {offers, topOfWeek} from '../data/homeData';

const Home = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => {}}>
          <Text style={styles.iconTxt}>🔍</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity style={styles.iconBtn} onPress={() => {}}>
          <Text style={styles.iconTxt}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Special Offer Slider */}
      <OfferSlider offers={offers} />

      {/* Top of Week */}
      <TopOfWeek items={topOfWeek} onSeeAll={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTxt: { fontSize: 18 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A1A' },

  sliderContainer: {
    position: 'relative',
    marginTop: 4,
    minHeight: 160,
  },
  offerCard: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#F4F1FB',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerTitle: { fontSize: 20, fontWeight: '800', color: '#1A1A1A' },
  offerSubtitle: { fontSize: 14, color: '#6B6B6B', marginTop: 4 },
  orderBtn: {
    marginTop: 12,
    backgroundColor: '#54408C',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  orderBtnText: { color: '#FFFFFF', fontWeight: '700' },
  offerImage: { width: 88, height: 120, borderRadius: 8, marginLeft: 12 },

  dotsRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
  dotsOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D6CFF0',
    marginHorizontal: 3,
  },
  dotActive: { backgroundColor: '#6B58B8' },

  // Top of Week styles
  sectionHeader: {
    marginTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#1A1A1A' },
  seeAll: { color: '#54408C', fontWeight: '700' },
  bookCard: {
    width: 128,
    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  bookImage: { width: 128, height: 160, borderRadius: 10, backgroundColor: '#EEE' },
  bookTitle: { marginTop: 8, color: '#1A1A1A', fontWeight: '600' },
  bookPrice: { marginTop: 4, color: '#54408C', fontWeight: '700' },
  dotsRowSmall: { flexDirection: 'row', justifyContent: 'center', marginTop: 8 },
  dotSmall: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: '#D6CFF0', marginHorizontal: 3 },
  dotSmallActive: { backgroundColor: '#6B58B8' },
});

export default Home;
