import React, { useState } from "react";
import { Text, View, Button , StyleSheet, Dimensions, ScrollView } from 'react-native';
import Colors from '../constants/colors';
import { ANIMALS } from "../data/data";
const EditReceipt = props => {
  const customer = props.navigation.getParam("customer");
  const receiptParam = props.navigation.getParam("receipt");
  const [receipt, setReceipt] = useState(receiptParam);
  const animals = props.navigation.getParam("animals");
  const animal_details = animals.map((animal) =>
  ANIMALS.find((a) => a.name === animal.type) 
);
  const incrementQuantity = (id) => {
    if(receipt.length > 0){
      const index = receipt.findIndex((r)=> r.category.id === id);
      receipt[index].category.quantity += 1;
      let newPrice = receipt[index].category.quantity * receipt[index].category.price;
      receipt[index].category.newPrice = newPrice;
      receipt[index].category.newPrice;
      setReceipt([...receipt]);
    }
  }
  const decrementQuantity = (id) => {
    if(receipt.length > 0){
      const index = receipt.findIndex((r)=> r.category.id === id);
      if(receipt[index].category.quantity > 1){
        receipt[index].category.quantity -= 1;
        let newPrice = receipt[index].category.quantity * receipt[index].category.price;
        receipt[index].category.newPrice = newPrice;
        receipt[index].category.newPrice;
        setReceipt([...receipt]);
      }
      else{
      receipt[index].category.quantity = 0;
      }
    }
  }
  return(
    <View style={styles.screen}>
      <View style={styles.servicesRow}>
        <Button
          title="Back To Services"
          onPress={() =>
            props.navigation.navigate({ routeName: "SelectServices" })
          }
          color={Colors.primary}
        />
        <Button
          title="Generate Receipt"
          onPress={() =>
            props.navigation.navigate({
              routeName: "GenerateReceipt",
              params: {
                customer: customer,
                animals: animals,
                receipt: receipt,
              },
            })
          }
          color={Colors.primary}
        />
      </View>
        <Text>Animal: {animal_details.map((a) => a.name + " ")}</Text>
        <Text>Customer: {customer}</Text>
        <ScrollView >
        {receipt.map((r,index) => 
        <View key={index} style={styles.detailItem}>
          <Text>{r.main_id}</Text>
          <Text>{r.service}{'(' + r.animal + ')'}</Text>
          <Text>{r.category.id}</Text>
          <View style={styles.servicesRow}>
            <Text>{r.category.type}</Text>
            <View style={styles.servicesRow}>
              <Text
                style={styles.incrementQuantity}
                onPress={() => incrementQuantity(r.category.id)}>+</Text>
              <Text>{r.category.quantity}</Text>
              <Text
                style={styles.decrementQuantity}
                onPress={() => decrementQuantity(r.category.id)}>-</Text>
              </View>
          </View>
          <View style={styles.servicesRow}>
          <Text>Rs. {r.category.newPrice ? r.category.newPrice : r.category.price }</Text>
          </View>
        </View>
        )}
        </ScrollView>
    </View>
  )
}


EditReceipt.navigationOptions = (navigationData) => {
  return {
      headerTitle: 'Edit Quantity',
      
  }
}

const styles = StyleSheet.create({
 detailItem: {
     marginVertical: 5,
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
     paddingVertical: 90,
     paddingHorizontal: 10
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
 },
 incrementQuantity: {
  backgroundColor: Colors.success,
  paddingVertical: 5,
  borderRadius: 100,
  color: 'white',
  paddingHorizontal: 10,
  fontSize: 18
 },
 decrementQuantity: {
  backgroundColor: Colors.danger,
  paddingVertical: 5,
  borderRadius: 100,
  color: 'white',
  paddingHorizontal: 10,
  fontSize: 18
 },
 
});

export default EditReceipt;