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
          <Text style={styles.name} key={a.id} onPress={() => props.navigation.navigate({
            routeName: 'SelectServices',
            params: {
                customer: a.name,
                animal: animal
            }
          })}>
            {a.name}
          </Text>
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
  name: {
    marginVertical: 10,
    width: 200,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    textAlign: 'center',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(59, 114, 237,0.5)',
    padding: 10,
    fontSize: 18
  }
});

export default SelectCustomer;