import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const TopOfWeek = ({ items = [], onSeeAll, onItemPress }) => {
  const [active, setActive] = useState(0);
  const CARD_WIDTH = 128;
  const CARD_SPACING = 8;
  const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;

  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top of Week</Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ marginTop: 16 }}
        data={items}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="fast"
        snapToAlignment="start"
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          const i = Math.round(x / SNAP_INTERVAL);
          if (i !== active) setActive(i);
        }}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onItemPress && onItemPress(item)}
          >
            <View style={styles.bookCard}>
              <Image
                source={item.image}
                style={styles.bookImage}
                resizeMode="cover"
              />
              <Text style={styles.bookTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={styles.bookPrice}>${item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
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
  bookCard: {
    width: 128,
    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  bookImage: {
    width: 128,
    height: 160,
    borderRadius: 10,
    backgroundColor: '#EEE',
  },
  bookTitle: { marginTop: 8, color: '#1A1A1A', fontWeight: '600' },
  bookPrice: { marginTop: 4, color: '#54408C', fontWeight: '700' },
  dotsRowSmall: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  dotSmall: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#D6CFF0',
    marginHorizontal: 3,
  },
  dotSmallActive: { backgroundColor: '#6B58B8' },
});

export default TopOfWeek;
