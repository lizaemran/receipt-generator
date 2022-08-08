import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import * as Sharing from "expo-sharing";
import Colors from "../constants/colors";
import { CUSTOMER } from "../data/CustomerData";
import { RECEIPTS } from "../data/ReceiptData";
import Receipt from "../modals/Receipt";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ViewShot from "react-native-view-shot";
const GenerateReceipt = (props) => {
  const animals = props.navigation.getParam("animals");
  const customer = props.navigation.getParam("customer");
  const [uri, setUri] = useState("");
  const customer_details = CUSTOMER.filter((c) => c.name === customer);
  const receipt = props.navigation.getParam("receipt");
  const ref = useRef();
  var total = receipt?.reduce(
    (acc, cur) =>
      acc +
      (cur.category.newPrice
        ? Number(cur.category.newPrice)
        : cur.category.price),
    0
  );
  const saveReceiptHandler = async () => {
    RECEIPTS.push(
      new Receipt(Receipt.length + 1, customer, animals, receipt, total)
    );
    try {
      const data = JSON.stringify(RECEIPTS);
      await AsyncStorage.setItem("Receipts", data);
      alert("Data successfully saved!");
    } catch (e) {
      alert("Failed to save data.");
    }
    CUSTOMER[customer_details[0].id - 1].receipts.push({
      animals: animals,
      receipt: receipt,
      total: total,
    });
    try {
      const data = JSON.stringify(CUSTOMER);
      await AsyncStorage.setItem("Customers", data);
      alert("Data successfully saved!");
    } catch (e) {
      alert("Failed to save data.");
    }
    props.navigation.navigate({ routeName: "ViewCustomers" });
  };
  const sendReceiptHandler = async () => {
    ref.current.capture().then((uri) => {
      setUri(uri);
    });
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    if(uri) await Sharing.shareAsync(uri);
  };
  var d = new Date();
  d = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
  return (
    <View style={styles.screen}>
      <View style={styles.servicesRow}>
        <Button
          title="Edit Receipt"
          onPress={() =>
            props.navigation.navigate({ routeName: "EditReceipt" })
          }
          color={Colors.primary}
        />
        <Button
          title="Save"
          onPress={saveReceiptHandler}
          color={Colors.primary}
        />
        <Button
          title="Send"
          onPress={sendReceiptHandler}
          color={Colors.primary}
        />
      </View>
      <ScrollView>
      <ViewShot
        ref={ref}
        options={{ fileName: "Your-File-Name", format: "jpg", quality: 0.9 }}
        style={styles.receipt}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../assets/logo.jpg")} style={styles.logo} />
        </View>
        <Text>Date: {d}</Text>
        {customer_details.map((c) => (
          <Text key={c.phone} style={{ fontWeight: "700" }}>
            Customer: {c.name}
          </Text>
        ))}
        <View>
          {animals.map((a) => (
            <View key={a.name} style={styles.animals}>
              <Text style={styles.info}>{a.type}</Text>
              <Text style={styles.info}>{a.name}</Text>
              <Text style={styles.info}>{a.sex}</Text>
              <Text style={styles.info}>Age: {a.age}</Text>
              <Text style={styles.info}>{a.breed}</Text>
              <Text style={styles.info}>{a.color}</Text>
            </View>
          ))}
        </View>
        <Text>Services: {receipt?.length}</Text>
          {receipt?.map((r, index) => (
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
                        {Number(r.category.newPrice) +
                          Number(r.category.discount)}
                      </Text>
                      <Text
                        style={{
                          fontSize: 11,
                          color: Colors.danger,
                          marginLeft: 3,
                        }}
                      >
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
        <View style={styles.servicesRowTotal}>
          <Text>Total</Text>
          <Text>Rs. {total}</Text>
        </View>
      </ViewShot>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};
GenerateReceipt.navigationOptions = {
  headerTitle: "Generate Receipt",
  headerStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.secondary,
    flex: 1,
    paddingTop: 90,
    paddingHorizontal: 10,
  },
  logo: {
    height: 70,
    width: 70,
  },
  receipt: {
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: "white",
    padding: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
    width: Dimensions.get("window").width * 0.945,
  },
  servicesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center",
  },
  servicesRowTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center",
    borderTopColor: Colors.primary,
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderWidth: 1,
  },
  animals: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary,
    color: "white",
    borderRadius: 5,
    marginVertical: 5,
    padding: 5,
  },
  info: {
    textTransform: 'capitalize',
    color: 'white'
  }
});
export default GenerateReceipt;
