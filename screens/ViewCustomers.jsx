import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import Colors from "../constants/colors";

const ViewCustomers = props => {
  return (
    <View style={styles.screen}>
      <Text>All Customers</Text>
      <View style={styles.button}>
            <Button title='Back To Dashboard' onPress={() => props.navigation.navigate({routeName: 'MainPage'})} color={Colors.primary} />
      </View>
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
});
export default ViewCustomers;