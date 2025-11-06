import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Checkout = ({ route, navigation }) => {
  const items = route?.params?.items || [];
  const subtotal = route?.params?.subtotal || 0;

  const [name, setName] = React.useState('John Doe');
  const [phone, setPhone] = React.useState('+1 555-0100');
  const [address, setAddress] = React.useState('123 Main St, Springfield');

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Image source={item.image} style={styles.thumb} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.itemMeta}>Qty {item.qty} • ${Number(item.price).toFixed(2)}</Text>
      </View>
      <Text style={styles.itemTotal}>${(Number(item.price) * item.qty).toFixed(2)}</Text>
    </View>
  );

  const shipping = items.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.sectionTitle}>Shipping info</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Full name" />
          <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Phone" keyboardType="phone-pad" />
          <TextInput style={[styles.input, { height: 80 }]} value={address} onChangeText={setAddress} placeholder="Address" multiline />
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Order summary</Text>
        <View style={styles.card}>
          <FlatList
            data={items}
            keyExtractor={(it) => String(it.id)}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            renderItem={renderItem}
            scrollEnabled={false}
          />
          <View style={styles.divider} />
          <View style={styles.totalRow}><Text style={styles.muted}>Subtotal</Text><Text style={styles.bold}>${subtotal.toFixed(2)}</Text></View>
          <View style={styles.totalRow}><Text style={styles.muted}>Shipping</Text><Text style={styles.bold}>${shipping.toFixed(2)}</Text></View>
          <View style={styles.totalRow}><Text style={styles.totalLbl}>Total</Text><Text style={styles.totalVal}>${total.toFixed(2)}</Text></View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={[styles.btn, styles.primary]} onPress={() => navigation.navigate('Payment', { items, subtotal, shipping, total, name, phone, address })}>
          <Text style={styles.primaryTxt}>Continue to payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  sectionTitle: { fontSize: 16, fontWeight: '800', color: '#1A1A1A' },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 12, borderWidth: 1, borderColor: '#EEE', marginTop: 8 },
  input: { borderWidth: 1, borderColor: '#EEE', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, marginBottom: 10 },
  itemRow: { flexDirection: 'row', alignItems: 'center' },
  thumb: { width: 52, height: 64, borderRadius: 8, backgroundColor: '#EEE' },
  itemTitle: { color: '#1A1A1A', fontWeight: '700' },
  itemMeta: { marginTop: 4, color: '#6B6B6B' },
  itemTotal: { color: '#1A1A1A', fontWeight: '700' },
  divider: { height: 1, backgroundColor: '#EEE', marginVertical: 12 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
  muted: { color: '#6B6B6B' },
  bold: { color: '#1A1A1A', fontWeight: '700' },
  totalLbl: { color: '#1A1A1A', fontWeight: '800' },
  totalVal: { color: '#54408C', fontWeight: '800' },
  footer: { padding: 16, borderTopWidth: 1, borderTopColor: '#EEE' },
  btn: { paddingVertical: 14, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  primary: { backgroundColor: '#54408C' },
  primaryTxt: { color: '#FFFFFF', fontWeight: '700' },
});

export default Checkout;
