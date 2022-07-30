import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, TextInput, Alert, FlatList } from 'react-native';
import Colors from "../constants/colors";
import { CUSTOMER } from '../data/CustomerData';
import Customer from '../modals/Customer';
import CustomerGridTile from '../components/CustomerGridTile';

const ViewCustomers = props => {
  const [customer, setCustomer] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerError, setCustomerError] = useState(false);
  const [customerPhoneError, setCustomerPhoneError] = useState(false);

  const customerHandler = (text) => {
    if(text === ''){
      setCustomerError(true);
    }else{
      setCustomerError(false);
    }
    setCustomer(text.replace('<', ''));
  }
  const customerPhoneHandler = (text) => {
    if(text === '' || text.length < 10){
      setCustomerPhoneError(true);
    }else{
      setCustomerPhoneError(false);
    }
    setCustomerPhone(text);
  }
  const addCustomer = () => {
    if(customerError || customerPhoneError){
      Alert.alert('Invalid Input', 'Please enter a valid customer name', [{text: 'Okay', style: 'destructive'}]);
    }
    else{
      CUSTOMER.push(new Customer(CUSTOMER.length + 1, customer, customerPhone, []));
      Alert.alert('Affirmation', 'Customer added successfully', [{text: 'Okay', style: 'destructive'}])
      setCustomer('');
      setCustomerPhone('');
    }
  }
  const renderGridItem = itemData => {
    return <CustomerGridTile 
    id={itemData.item.id} 
    name={itemData.item.name}
    phone={itemData.item.phone}
    receipts={itemData.item.receipts}
    onSelect={() => props.navigation.navigate({
        routeName: 'CustomerDetails',
        params: {
            customerId: itemData.item.id,
        }
      })}
       />;
};
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
            <Button title='Back To Dashboard' onPress={() => props.navigation.navigate({routeName: 'MainPage'})} color={Colors.primary} />
      </View>
      <View style={styles.input}>
      <TextInput 
        placeholder='John Doe' 
        blurOnSubmit autoCapitalize='none' 
        autoCorrect={false}
        value={customer}
        onChangeText={customerHandler}
        style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
        {customerError ? <Text style={styles.danger}>Enter Valid Customer Name</Text> : null}
        <TextInput 
        placeholder='33333333333' 
        blurOnSubmit autoCapitalize='none' 
        autoCorrect={false}
        value={customerPhone}
        onChangeText={customerPhoneHandler}
        style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
        {customerPhoneError ? <Text style={styles.danger}>Enter Valid Customer Phone</Text> : null}
      </View>
      <View style={styles.Add}>
            <Button title=' + Add Customer' onPress={addCustomer} color={Colors.primary} />
      </View>
      {CUSTOMER.length > 0 ? <FlatList
        keyExtractor={(item, index) => item.id}
        numColumns={0} 
        data={CUSTOMER} 
        renderItem={renderGridItem} /> : <Text>No Customers Added Yet</Text>}
      <StatusBar style='auto' />
    </View>
  )
}
ViewCustomers.navigationOptions = {
  headerTitle: "View Customers",
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
  input: {
    width: '90%',
  },
  noAnimals: {
    flex:1,
  },
  button: {
    marginTop: 90
  },
  danger: {
    color: Colors.danger
  },
});
export default ViewCustomers;