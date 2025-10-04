import React, {useMemo, useState, useCallback} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';

const Home = ({ navigation }) => {
  const {width} = useWindowDimensions();
  const [active, setActive] = useState(0);
  const offers = useMemo(() => ([
    {
      id: '1',
      title: 'Special Offer',
      subtitle: 'Discount 25%',
      image: require('../../assets/b1.png'),
    },
    {
      id: '2',
      title: 'New Arrivals',
      subtitle: 'Latest Books',
      image: require('../../assets/b2.png'),
    },
    {
      id: '3',
      title: 'Editor\'s Pick',
      subtitle: 'Top Rated',
      image: require('../../assets/b3.png'),
    },
  ]), []);

  const handleScroll = useCallback((e) => {
    const x = e.nativeEvent.contentOffset.x;
    const i = Math.round(x / width);
    if (i !== active) setActive(i);
  }, [width, active]);

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
      <View style={styles.sliderContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {offers.map((card) => (
            <View key={card.id} style={{width}}>
              <View style={styles.offerCard}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.offerTitle}>{card.title}</Text>
                  <Text style={styles.offerSubtitle}>{card.subtitle}</Text>
                  <TouchableOpacity style={styles.orderBtn} onPress={() => {}}>
                    <Text style={styles.orderBtnText}>Order Now</Text>
                  </TouchableOpacity>
                </View>
                <Image
                  source={card.image}
                  style={styles.offerImage}
                  resizeMode="cover"
                />
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Pagination dots overlay */}
        <View style={styles.dotsOverlay} pointerEvents="none">
          {offers.map((_, i) => (
            <View key={i} style={[styles.dot, i === active && styles.dotActive]} />
          ))}
        </View>
      </View>
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
});

export default Home;
