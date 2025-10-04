import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, useWindowDimensions} from 'react-native';

const OfferSlider = ({offers}) => {
  const {width} = useWindowDimensions();
  const [active, setActive] = useState(0);

  const handleScroll = useCallback(
    (e) => {
      const x = e.nativeEvent.contentOffset.x;
      const i = Math.round(x / width);
      if (i !== active) setActive(i);
    },
    [width, active],
  );

  return (
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
              <View style={{flex: 1}}>
                <Text style={styles.offerTitle}>{card.title}</Text>
                {card.subtitle ? (
                  <Text style={styles.offerSubtitle}>{card.subtitle}</Text>
                ) : null}
                <TouchableOpacity style={styles.orderBtn} onPress={() => {}}>
                  <Text style={styles.orderBtnText}>Order Now</Text>
                </TouchableOpacity>
              </View>
              <Image source={card.image} style={styles.offerImage} resizeMode="cover" />
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.dotsOverlay} pointerEvents="none">
        {offers.map((_, i) => (
          <View key={i} style={[styles.dot, i === active && styles.dotActive]} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {position: 'relative', marginTop: 4, minHeight: 160},
  offerCard: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#F4F1FB',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerTitle: {fontSize: 20, fontWeight: '800', color: '#1A1A1A'},
  offerSubtitle: {fontSize: 14, color: '#6B6B6B', marginTop: 4},
  orderBtn: {
    marginTop: 12,
    backgroundColor: '#54408C',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  orderBtnText: {color: '#FFFFFF', fontWeight: '700'},
  offerImage: {width: 88, height: 120, borderRadius: 8, marginLeft: 12},
  dotsOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {width: 6, height: 6, borderRadius: 3, backgroundColor: '#D6CFF0', marginHorizontal: 3},
  dotActive: {backgroundColor: '#6B58B8'},
});

export default OfferSlider;
