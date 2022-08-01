import React, { useState } from 'react';
import { Text, View, Button , StyleSheet, Dimensions, ScrollView, TextInput } from 'react-native';
import Colors from '../constants/colors';
import { CUSTOMER } from '../data/CustomerData';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CustomerDetails = props => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const customer_id =  props.navigation.getParam('customerId');
  const selectedCustomer = CUSTOMER.find(a => a.id === customer_id);
  const deleteCustomer = async () => {
    CUSTOMER.splice(customer_id-1,1);
    try {
      const data = JSON.stringify(CUSTOMER);
      await AsyncStorage.setItem('Customers', data);
      alert('Data successfully saved after deleting!')
      props.navigation.navigate({routeName: 'MainPage'})
    } catch (e) {
      alert('Failed to save data.')
    }
  }
  const nameHandler = (text) => {
    if(text === ''){
      setNameError(true);
    }else{
      setNameError(false);
    }
    setName(text.replace('<', ''));
  }
  const phoneHandler = (text) => {
    if(text === '' || text.length < 10){
      setPhoneError(true);
    }else{
      setPhoneError(false);
    }
    setPhone(text.replace('<', ''));
  }
  const EditHandler = async () => {
    setIsEdit(false);
    if(name !== ''){
      CUSTOMER[customer_id-1].name = name;
      if(phone.length > 9) CUSTOMER[customer_id-1].phone = phone;
      try {
        const data = JSON.stringify(CUSTOMER);
        await AsyncStorage.setItem('Customers', data);
        alert('Data successfully saved after updating!')
        props.navigation.navigate({routeName: 'MainPage'})
      } catch (e) {
        alert('Failed to save data.')
      }
    }
  }
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button title='Back To Customers' onPress={() => props.navigation.navigate({routeName: 'ViewCustomers'})} color={Colors.primary} />
      </View>
      <View style={styles.detailItem}>
        <View style={styles.servicesRow}>
          <Text style={styles.smalltext}>ID: {selectedCustomer.id}</Text>
          {isEdit ? 
          <View style={styles.servicesRow}>
            <Button title='Done' onPress={EditHandler} color={Colors.success}  />
            <Button title='Cancel' onPress={() => setIsEdit(false)} color={Colors.danger} />
          </View>
             : <Button title='Edit' onPress={() => setIsEdit(true)} color={Colors.primary} />}
        </View>
        <Text style={styles.smalltext}>Name: {isEdit ? (<View>
          <TextInput 
            placeholder='Name' 
            blurOnSubmit autoCapitalize='none' 
            autoCorrect={false}
            value={name}
            onChangeText={nameHandler}
            style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, }} />
            {nameError ? <Text style={styles.danger}>Enter Valid Animal Name</Text> : null}
        </View>) : selectedCustomer.name}</Text>
        <Text style={styles.smalltext}>Phone: {isEdit ? (<View>
          <TextInput 
            placeholder='Phone' 
            blurOnSubmit autoCapitalize='none' 
            autoCorrect={false}
            value={phone}
            onChangeText={phoneHandler}
            style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, }} />
            {phoneError ? <Text style={styles.danger}>Enter Valid Phone</Text> : null}
        </View>) : selectedCustomer.phone}</Text>
        <Text style={styles.smalltext}>Receipts: {selectedCustomer.receipts.length}</Text>
        {selectedCustomer?.receipts?.length > 0 ? 
        selectedCustomer?.receipts?.map((s, index) => 
        <ScrollView key={index} >
          <View style={styles.servicesRow}>
          <Text >
            {index + 1}. {s?.animal}
          </Text>
          <Text style={styles.discount}>
            {s?.discount}
          </Text>
          <Text style={styles.total}>
            {s?.total}
          </Text>
          </View>
          {s?.services?.map((service, index) => 
            <View key={index} style={styles.servicesRow}>
              <Text>{service?.title}</Text>
              <Text>X{service?.quantity}</Text>
              <Text>{service?.price}</Text>
            </View>
          )}
        </ScrollView>
        ) : <Text>No Receipts Added Yet</Text>}
        </View>
        <Button title='Delete' onPress={deleteCustomer} color={Colors.danger} />
    </View>
  ); 
}

CustomerDetails.navigationOptions = (navigationData) => {
     return {
         headerTitle: 'Customer Details',
         
     }
 }

const styles = StyleSheet.create({
    detailItem: {
        marginVertical: 15,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: 'white',
        padding: 10,
        borderColor: Colors.primary,
        borderWidth:  2,
    },
    screen: {
        backgroundColor:Colors.secondary,
        flex:1,
        paddingTop: 90,
        paddingHorizontal: 5
    },
    button: {
        marginVertical: 10,
        width: Dimensions.get('window').width * 0.9,    
        alignItems:'center',
        justifyContent:'center',
    },
    text : {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    smalltext : {
        fontSize: 16,
        color: Colors.primary,
        marginVertical: 5
    },
    servicesRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 5,
      alignItems: 'center'
    },
    danger: {
      color: Colors.danger
    }
});

export default CustomerDetails;