import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import Colors from "../constants/colors";
import { CUSTOMER } from "../data/CustomerData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";
const CustomerDetails = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const customer_id = props.navigation.getParam("customerId");
  const selectedCustomer = CUSTOMER.find((a) => a.id === customer_id);
  const deleteCustomer = async () => {
    Alert.alert(
      "Confirmation",
      `Are you sure you want to remove ${selectedCustomer.name}?`,
      [
        {
          text: "Yes",
          onPress: async () => {
            CUSTOMER.splice(customer_id - 1, 1);
            try {
              const data = JSON.stringify(CUSTOMER);
              await AsyncStorage.setItem("Customers", data);
              alert("Data successfully saved after deleting!");
              props.navigation.navigate({ routeName: "MainPage" });
            } catch (e) {
              alert("Failed to save data.");
            }
          },
        },
        {
          text: "No",
        },
      ]
    );
  };
  const nameHandler = (text) => {
    if (text === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(text.replace("<", ""));
  };
  const phoneHandler = (text) => {
    if (text === "" || text.length < 10) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    setPhone(text.replace("<", ""));
  };
  const EditHandler = async () => {
    setIsEdit(false);
    if (name !== "") {
      CUSTOMER[customer_id - 1].name = name;
      if (phone.length > 9) CUSTOMER[customer_id - 1].phone = phone;
      try {
        const data = JSON.stringify(CUSTOMER);
        await AsyncStorage.setItem("Customers", data);
        alert("Data successfully saved after updating!");
        props.navigation.navigate({ routeName: "MainPage" });
      } catch (e) {
        alert("Failed to save data.");
      }
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button
          title="Back To Customers"
          onPress={() =>
            props.navigation.navigate({ routeName: "ViewCustomers" })
          }
          color={Colors.primary}
        />
      </View>
      <ScrollView style={styles.detailItem}>
        <View style={styles.servicesRow}>
          <Text style={styles.smalltext}>ID: {selectedCustomer.id}</Text>
          {isEdit ? (
            <View style={styles.servicesRow}>
              <Button
                title="Done"
                onPress={EditHandler}
                color={Colors.success}
              />
              <Button
                title="Cancel"
                onPress={() => setIsEdit(false)}
                color={Colors.danger}
              />
            </View>
          ) : (
            <Text style={styles.edit}>
              <Entypo
                name="edit"
                size={18}
                color="white"
                onPress={() => setIsEdit(true)}
              />
            </Text>
          )}
        </View>
        <Text style={styles.smalltext}>
          Name:{" "}
          {isEdit ? (
            <View>
              <TextInput
                placeholder="Name"
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={nameHandler}
                style={{
                  borderBottomColor: Colors.primary,
                  borderBottomWidth: 1,
                }}
              />
              {nameError ? (
                <Text style={styles.danger}>Enter Valid Name</Text>
              ) : null}
            </View>
          ) : (
            selectedCustomer.name
          )}
        </Text>
        <Text style={styles.smalltext}>
          Phone:{" "}
          {isEdit ? (
            <View>
              <TextInput
                placeholder="Phone"
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                value={phone}
                onChangeText={phoneHandler}
                style={{
                  borderBottomColor: Colors.primary,
                  borderBottomWidth: 1,
                }}
              />
              {phoneError ? (
                <Text style={styles.danger}>Enter Valid Phone</Text>
              ) : null}
            </View>
          ) : (
            selectedCustomer.phone
          )}
        </Text>
        <Text style={styles.smalltext}>
          Receipts: {selectedCustomer.receipts.length}
        </Text>
        {selectedCustomer?.receipts?.length > 0 ? (
          selectedCustomer?.receipts?.map((i, ind) => (
            <View key={ind} style={styles.receiptTile}>
              <View style={styles.servicesRow}>
              <Text style={{fontSize: 18, fontStyle: 'italic'}}>{ind + 1}. Receipt</Text>
              <View style={styles.servicesRow}>
              <Button title="View" color={Colors.primary} onPress={() => props.navigation.navigate({ routeName: "SendReceipt",  params: {
                customer: selectedCustomer,
                receipt: i,
              }, })}  />
              <Button title="Delete" color={Colors.danger} onPress={() => 
                  Alert.alert(
                    "Confirmation",
                    `Are you sure you want to remove?`,
                    [
                      {
                        text: "Yes",
                        onPress: async () => {
                          CUSTOMER[customer_id - 1].receipts.splice(ind, 1);
                          try {
                            const data = JSON.stringify(CUSTOMER);
                            await AsyncStorage.setItem("Customers", data);
                            alert("Data successfully saved after deleting!");
                            props.navigation.navigate({ routeName: "MainPage" });
                          } catch (e) {
                            alert("Failed to save data.");
                          }
                        },
                      },
                      {
                        text: "No",
                      },
                    ]
                  )
              }  />
              </View>
              </View>
              {i.receipt?.map((r, index) => (
                <View key={index}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {index + 1}. {r?.service}
                  </Text>
                  <View style={styles.servicesRow}>
                    <Text>
                      {r.category.type}
                      {"(" + r.category.id + ")"}
                    </Text>
                    <Text>X{r.category.quantity}</Text>
                    {r.category.newPrice ? (
                      <View>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text style={{ textDecorationLine: "line-through" }}>
                            {r.category.price}
                          </Text>
                          <Text style={{ fontSize: 12, color: Colors.danger }}>
                            {r.category.discount}
                          </Text>
                        </View>
                        <Text style={{ fontWeight: "700" }}>
                          Rs. {r.category.newPrice}
                        </Text>
                      </View>
                    ) : (
                      <Text style={{ fontWeight: "700" }}>
                        Rs. {r.category.price}
                      </Text>
                    )}
                  </View>
                </View>
              ))}
              <Text style={{textAlign: 'right', fontSize: 18, fontWeight: '600'}}>Total: Rs. {i.total}</Text>
            </View>
          ))
        ) : (
          <Text>No Receipts Added Yet</Text>
        )}
      </ScrollView>
      <Button title="Delete" onPress={deleteCustomer} color={Colors.danger} />
    </View>
  );
};

CustomerDetails.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Customer Details",
  };
};

const styles = StyleSheet.create({
  detailItem: {
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "white",
    padding: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  screen: {
    backgroundColor: Colors.secondary,
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 5,
  },
  button: {
    marginVertical: 10,
    width: Dimensions.get("window").width * 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
  },
  smalltext: {
    fontSize: 16,
    color: Colors.primary,
    marginVertical: 5,
  },
  servicesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center",
  },
  danger: {
    color: Colors.danger,
    fontSize: 11,
  },
  receiptTile: {
    marginVertical: 20,
    backgroundColor: Colors.secondary,
    borderRadius: 5,
    padding: 5,
  },
  edit: {
    backgroundColor: Colors.success,
    padding: 5,
    borderRadius: 5,
  },
});

export default CustomerDetails;
