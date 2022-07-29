import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Colors from "../constants/colors";

const SelectCustomer = props => {
  return (
    <View style={styles.screen}>
       <Text>Select Customer</Text>
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
});

export default SelectCustomer;