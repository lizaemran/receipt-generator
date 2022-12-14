import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import Colors from "../constants/colors";
import { CUSTOMER } from "../data/CustomerData";
import Customer from "../modals/Customer";
import CustomerGridTile from "../components/CustomerGridTile";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ViewCustomers = (props) => {
  const [customer, setCustomer] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerError, setCustomerError] = useState(false);
  const [customerPhoneError, setCustomerPhoneError] = useState(false);
  const [customersData, setCustomersData] = useState("");
  const [isAddNew, setIsAddNew] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const customers = await AsyncStorage.getItem("Customers");

        if (customers !== null) {
          setCustomersData(JSON.parse(customers));
          let temp = JSON.parse(customers);
          if (CUSTOMER.length === 0) {
            temp?.map((a) =>
              CUSTOMER.push(new Customer(a.id, a.name, a.phone, a.receipts))
            );
          }
        }
      } catch (e) {
        alert("Failed to load animals data.");
      }
    };
    getData();
  }, []);
  const customerHandler = (text) => {
    if (text === "") {
      setCustomerError(true);
    } else {
      setCustomerError(false);
    }
    setCustomer(text.replace("<", ""));
  };
  const customerPhoneHandler = (text) => {
    if (text === "" || text.length < 10) {
      setCustomerPhoneError(true);
    } else {
      setCustomerPhoneError(false);
    }
    setCustomerPhone(text);
  };
  const addCustomer = async () => {
    if (customerError || customerPhoneError) {
      Alert.alert("Invalid Input", "Please enter a valid customer name", [
        { text: "Okay", style: "destructive" },
      ]);
    } else {
      // if(CUSTOMER.map(c => c.phone === customerPhone).length > 0){
      //   Alert.alert("Error", "Customer already exists", [
      //     { text: "Okay", style: "destructive" },
      //   ]);
      // }
      // else{
        CUSTOMER.push(
          new Customer(CUSTOMER.length + 1, customer, customerPhone, [])
        );
        try {
          const data = JSON.stringify(CUSTOMER);
          await AsyncStorage.setItem("Customers", data);
          alert("Data successfully saved!");
          setIsAddNew(false);
        } catch (e) {
          alert("Failed to save data.");
        }
        Alert.alert("Affirmation", "Customer added successfully", [
          { text: "Okay", style: "destructive" },
        ]);
        setCustomer("");
        setCustomerPhone("");
        props.navigation.navigate({ routeName: "MainPage" })
      // }
    }
  };
  const renderGridItem = (itemData) => {
    return (
      <CustomerGridTile
        id={itemData.item.id}
        name={itemData.item.name}
        phone={itemData.item.phone}
        receipts={itemData.item.receipts}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CustomerDetails",
            params: {
              customerId: itemData.item.id,
            },
          })
        }
      />
    );
  };
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
      <View style={styles.serviceRow}>
        <Button
          title="Back To Dashboard"
          onPress={() => props.navigation.navigate({ routeName: "MainPage" })}
          color={Colors.primary}
        />
        {isAddNew ? (
          <Button
            title="Cancel"
            onPress={() => setIsAddNew(false)}
            color={Colors.danger}
          />
        ) : (
          <Button
            title=" + Add New"
            onPress={() => setIsAddNew(true)}
            color={Colors.success}
          />
        )}
        </View>
      </View>
      {isAddNew ? <View style={styles.detailItem}>
        <View style={styles.input}>
        <TextInput
          placeholder="John Doe"
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          value={customer}
          onChangeText={customerHandler}
          style={{
            borderBottomColor: Colors.primary,
            borderBottomWidth: 1,
            padding: 10,
            marginVertical: 10,
          }}
        />
        {customerError ? (
          <Text style={styles.danger}>Enter Valid Customer Name</Text>
        ) : null}
        <TextInput
          placeholder="03XXXXXXX94"
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          value={customerPhone}
          onChangeText={customerPhoneHandler}
          keyboardType="numeric"
          style={{
            borderBottomColor: Colors.primary,
            borderBottomWidth: 1,
            padding: 10,
            marginVertical: 10,
          }}
        />
        {customerPhoneError ? (
          <Text style={styles.danger}>Enter Valid Customer Phone</Text>
        ) : null}
      </View>
      <View style={styles.Add}>
        <Button
          title=" + Add Customer"
          onPress={addCustomer}
          color={Colors.success}
        />
        </View> 
      </View>: null}
      {customersData.length > 0 ? (
        <FlatList
          keyExtractor={(item, index) => item.id}
          numColumns={0}
          data={customersData}
          renderItem={renderGridItem}
        />
      ) : (
        <Text>No Customers Added Yet</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
};
ViewCustomers.navigationOptions = {
  headerTitle: "View Customers",
  headerStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.secondary,
    flex: 1,
    paddingHorizontal: 5,
  },
  detailItem: {
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "white",
    padding: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  input: {
    width: "90%",
  },
  noAnimals: {
    flex: 1,
  },
  button: {
    marginTop: 90,
  },
  danger: {
    color: Colors.danger,
    fontSize: 11
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "white",
    padding: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
});
export default ViewCustomers;
