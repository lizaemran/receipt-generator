import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View , Text, TextInput} from 'react-native';
import Colors from "../constants/colors";
import { CUSTOMER } from '../data/CustomerData';
import { RECEIPTS } from '../data/ReceiptData';
import Receipt from '../modals/Receipt';
import AsyncStorage from '@react-native-async-storage/async-storage'
const GenerateReceipt = props => {
  const [discount, setDiscount] = useState('');
  const [discountError, setDiscountError] = useState(false);
  const animal =  props.navigation.getParam('animal');
  const customer =  props.navigation.getParam('customer');
  const services = props.navigation.getParam('services');
  const discountHandler = (text) => {
    if(text === 0){
      setDiscountError(true);
    }else{
      setDiscountError(false);
    }
    setDiscount(text);
  }
  var total =  services?.reduce((acc, cur) => acc + cur.price, 0);
  total = total - Number(discount);
  const sendReceiptHandler = async () => {
    let customerSelected = CUSTOMER.find(c => c.name === customer);
    console.log(customerSelected);
    RECEIPTS.push(new Receipt(Receipt.length + 1, customer, animal, services, discount, total));
    try {
      const data = JSON.stringify(RECEIPTS);
      await AsyncStorage.setItem('Receipts', data);
      alert('Data successfully saved!')
    } catch (e) {
      alert('Failed to save data.')
    }
    CUSTOMER[customerSelected.id-1].receipts.push({
      'animal': animal,
      'services' : services,
      'discount' : Number(discount),
      'total' : total
    });
    try {
      const data = JSON.stringify(CUSTOMER);
      await AsyncStorage.setItem('Customers', data);
      alert('Data successfully saved!')
    } catch (e) {
      alert('Failed to save data.')
    }
    props.navigation.navigate({routeName: 'ViewCustomers'});
  }
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button title='Back To Dashboard' onPress={() => props.navigation.navigate({routeName: 'MainPage'})} color={Colors.primary} />
      </View>
      <View style={styles.receipt}>
        <Text>Animal: {animal}</Text>
        <Text>Customer: {customer}</Text>
        <Text>Services: {services?.length}</Text>
        <Text></Text>
        {services.map((s, index) => 
          <View key={index} style={styles.servicesRow}>
              <Text>{s.title}</Text>
              <Text>{s.quantity}</Text>
              <Text>{s.price}</Text>
          </View>
        )}
        <View style={styles.servicesRow}>
          <Text>Discount</Text>
          <TextInput 
            placeholder='0' 
            blurOnSubmit autoCapitalize='none' 
            autoCorrect={false}
            value={discount}
            onChangeText={discountHandler}
            style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
          {discountError ? <Text style={styles.danger}>Enter Valid Discount</Text> : null}
        </View>
        <View style={styles.servicesRow}>
          <Text>Total</Text>
          <Text>{total}</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button title='Send Receipt' onPress={sendReceiptHandler} color={Colors.primary} />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}
GenerateReceipt.navigationOptions = {
  headerTitle: "Generate Receipt",
  headerStyle: {
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
  },
  
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.secondary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  receipt: {
    margin: 15,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: 'white',
    padding: 10,
    borderColor: Colors.primary,
    borderWidth:  2,
    width: 320
  },
  servicesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: 'center'
  },
});
export default GenerateReceipt;