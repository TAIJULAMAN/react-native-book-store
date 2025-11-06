import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Payment = ({ route, navigation }) => {
  const { items = [], subtotal = 0, shipping = 0, total = 0, name = '', phone = '', address = '' } = route?.params || {};

  const [cardName, setCardName] = React.useState(name);
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiry, setExpiry] = React.useState('');
  const [cvv, setCvv] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.sectionTitle}>Payment method</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} value={cardName} onChangeText={setCardName} placeholder="Name on card" />
          <TextInput style={styles.input} value={cardNumber} onChangeText={setCardNumber} placeholder="Card number" keyboardType="number-pad" />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TextInput style={[styles.input, { flex: 1 }]} value={expiry} onChangeText={setExpiry} placeholder="MM/YY" />
            <TextInput style={[styles.input, { flex: 1 }]} value={cvv} onChangeText={setCvv} placeholder="CVV" keyboardType="number-pad" />
          </View>
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Order total</Text>
        <View style={styles.card}>
          <View style={styles.totalRow}><Text style={styles.muted}>Subtotal</Text><Text style={styles.bold}>${subtotal.toFixed(2)}</Text></View>
          <View style={styles.totalRow}><Text style={styles.muted}>Shipping</Text><Text style={styles.bold}>${shipping.toFixed(2)}</Text></View>
          <View style={styles.totalRow}><Text style={styles.totalLbl}>Total</Text><Text style={styles.totalVal}>${total.toFixed(2)}</Text></View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={[styles.btn, styles.primary]} onPress={() => navigation.replace('Congratulations')}>
          <Text style={styles.primaryTxt}>Place order</Text>
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

export default Payment;
