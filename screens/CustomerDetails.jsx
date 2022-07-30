import React, { useState } from 'react';
import { Text, View, Button , StyleSheet, Dimensions, TextInput, Alert } from 'react-native';
import Colors from '../constants/colors';
import { CUSTOMER } from '../data/CustomerData';
const CustomerDetails = props => {
  const customer_id =  props.navigation.getParam('customerId');
  const selectedCustomer = CUSTOMER.find(a => a.id === customer_id);
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
            <Button title='Back To Customers' onPress={() => props.navigation.navigate({routeName: 'ViewCustomers'})} color={Colors.primary} />
      </View>
      <View style={styles.detailItem}>
      <Text style={styles.smalltext}>ID: {selectedCustomer.id}</Text>
        <Text style={styles.smalltext}>Name: {selectedCustomer.name}</Text>
        <Text style={styles.smalltext}>Phone: {selectedCustomer.phone}</Text>
        <Text style={styles.smalltext}>Receipts: {selectedCustomer.receipts.length}</Text>
        {selectedCustomer?.receipts?.length > 0 ? 
        selectedCustomer?.receipts?.map((s, index) => 
        <View key={index} >
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
        </View>
        ) : <Text>No Services Added Yet</Text>}
        </View>
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
        margin: 15,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: 'white',
        padding: 10,
        borderColor: Colors.primary,
        borderWidth:  2,
        width: 320
    },
    screen: {
        backgroundColor:Colors.secondary,
        flex:1,
        padding: 10,
        alignItems:'center',
        justifyContent:'center'
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
});

export default CustomerDetails;