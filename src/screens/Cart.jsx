import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Cart = ({ route, navigation }) => {
  const incomingBook = route?.params?.book || null;
  const incomingQty = route?.params?.qty || 1;

  const [items, setItems] = React.useState(() => {
    if (route?.params?.items) return route.params.items;
    if (incomingBook) return [{ id: incomingBook.id, title: incomingBook.title, price: incomingBook.price, image: incomingBook.image, qty: incomingQty }];
    return [];
  });

  const updateQty = (id, delta) => {
    setItems(prev => prev.map(it => it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it));
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(it => it.id !== id));
  };

  const subtotal = items.reduce((sum, it) => sum + (Number(it.price) || 0) * it.qty, 0);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Image source={item.image} style={styles.thumb} />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.price}>${Number(item.price).toFixed(2)}</Text>
        <View style={styles.controls}>
          <TouchableOpacity onPress={() => updateQty(item.id, -1)} style={styles.ctrlBtn}><Text style={styles.ctrlTxt}>−</Text></TouchableOpacity>
          <Text style={styles.qty}>{item.qty}</Text>
          <TouchableOpacity onPress={() => updateQty(item.id, 1)} style={styles.ctrlBtn}><Text style={styles.ctrlTxt}>+</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => removeItem(item.id)} style={[styles.ctrlBtn, { marginLeft: 8 }]}><Text style={styles.removeTxt}>Remove</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(it) => String(it.id)}
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center', paddingTop: 40 }}>
            <Text style={{ color: '#6B6B6B' }}>Your cart is empty</Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLbl}>Subtotal</Text>
          <Text style={styles.totalVal}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.btn, styles.secondary]} onPress={() => navigation.goBack()}>
            <Text style={styles.secondaryTxt}>Continue shopping</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.primary]} onPress={() => navigation.navigate('Checkout', { items, subtotal })}>
            <Text style={styles.primaryTxt}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  row: { flexDirection: 'row', alignItems: 'center' },
  thumb: { width: 64, height: 80, borderRadius: 8, backgroundColor: '#EEE' },
  title: { color: '#1A1A1A', fontWeight: '700' },
  price: { marginTop: 4, color: '#54408C', fontWeight: '700' },
  controls: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  ctrlBtn: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, backgroundColor: '#F3F1FA' },
  ctrlTxt: { color: '#54408C', fontWeight: '700', fontSize: 16 },
  qty: { marginHorizontal: 10, fontWeight: '700', color: '#1A1A1A' },
  removeTxt: { color: '#B00020', fontWeight: '700' },
  sep: { height: 12 },
  footer: { padding: 16, borderTopWidth: 1, borderTopColor: '#EEE' },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  totalLbl: { color: '#6B6B6B' },
  totalVal: { color: '#1A1A1A', fontWeight: '800' },
  actions: { flexDirection: 'row', gap: 12 },
  btn: { flex: 1, paddingVertical: 12, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  primary: { backgroundColor: '#54408C' },
  primaryTxt: { color: '#FFFFFF', fontWeight: '700' },
  secondary: { backgroundColor: '#F3F1FA' },
  secondaryTxt: { color: '#54408C', fontWeight: '700' },
});

export default Cart;
