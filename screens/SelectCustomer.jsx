import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Colors from "../constants/colors";
import { CUSTOMER } from '../data/CustomerData';

const SelectCustomer = props => {
  const animal =  props.navigation.getParam('animal');
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
            <Button title='Back To Dashboard' onPress={() => props.navigation.navigate({routeName: 'MainPage'})} color={Colors.primary} />
      </View>
      <View>
        {CUSTOMER.map((a) => 
          <Button key={a.id} title={a.name} onPress={() => props.navigation.navigate({
            routeName: 'SelectServices',
            params: {
                customer: a.name,
                animal: animal
            }
          })} style={styles.button}  />
        )}
      </View>
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
  },
  button: {
    marginVertical: 10,
  }
});

export default SelectCustomer;