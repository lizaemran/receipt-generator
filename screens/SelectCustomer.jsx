import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, Dimensions } from 'react-native';
import Colors from "../constants/colors";
import { CUSTOMER } from '../data/CustomerData';
import Customer from '../modals/Customer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SelectCustomer = props => {
  const animals =  props.navigation.getParam('animals');
  useEffect(() => {
    const getData = async () => {
    try {
      const customers = await AsyncStorage.getItem('Customers')
      if (customers !== null) {
        if(CUSTOMER.length === 0){
          let temp = JSON.parse(customers);
          temp?.map((a) => CUSTOMER.push(new Customer(a.id, a.name, a.phone, a.receipts)));
        }
      }
    } catch (e) {
      alert('Failed to load customers data.')
    }
  }
    getData();
  },[])
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
            <Button title='Back To Animal Info' onPress={() => props.navigation.navigate({routeName: 'AnimalInfo'})} color={Colors.primary} />
      </View>
      <ScrollView>
        {CUSTOMER.map((a) => 
          <Text style={styles.name} key={a.id} onPress={() => props.navigation.navigate({
            routeName: 'SelectServices',
            params: {
                customer: a.name,
                animals: animals
            }
          })}>
            {a.name}
          </Text>
        )}
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  )
}
SelectCustomer.navigationOptions = {
  headerTitle: "Select Customer",
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
    paddingTop: 100
  },
  name: {
    marginVertical: 10,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    textAlign: "center",
    textTransform: "capitalize",
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    fontSize: 18,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    width: Dimensions.get('window').width * 0.9,

  }
});

export default SelectCustomer;