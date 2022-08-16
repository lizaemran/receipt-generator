import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Colors from "../constants/colors";
import DatePicker from "react-native-modern-datepicker";
import { ANIMALS } from "../data/data";
const EditReceipt = (props) => {
  const customer = props.navigation.getParam("customer");
  const receiptParam = props.navigation.getParam("receipt");
  const [receipt, setReceipt] = useState([]);
  const [discount, setDiscount] = useState("");
  const [discountError, setDiscountError] = useState(false);
  const [otherDiscount, setOtherDiscount] = useState("0");
  const [otherDiscountError, setOtherDiscountError] = useState(false);
  const [paid, setPaid] = useState("0");
  const [paidError, setPaidError] = useState(false);
  const [discountArr, setDiscountArr] = useState([]);
  const [date, setDate] = useState(new Date());
  const [isDate, setIsDate] = useState(false);
  const animals = props.navigation.getParam("animals");
  const setRec = props.navigation.getParam("setReceipt");
  useEffect(() => {
    const temp = [...receiptParam];
    setRec([]);
    setReceipt(temp);
  }, []);
  const animal_details = animals.map((animal) =>
    ANIMALS.find((a) => (a?.name).toLowerCase() === animal.type.toLowerCase())
  );

  const incrementQuantity = (id) => {
    if (receipt.length > 0) {
      const index = receipt.findIndex((r) => r.category.id === id);
      receipt[index].category.quantity += 1;
      let newPrice =
        receipt[index].category.quantity * receipt[index].category.price;
      receipt[index].category.newPrice = newPrice;
      receipt[index].category.newPrice;
      setReceipt([...receipt]);
    }
  };
  const decrementQuantity = (id) => {
    if (receipt.length > 0) {
      const index = receipt.findIndex((r) => r.category.id === id);
      if (receipt[index].category.quantity > 1) {
        receipt[index].category.quantity -= 1;
        let newPrice =
          receipt[index].category.quantity * receipt[index].category.price;
        receipt[index].category.newPrice = newPrice;
        receipt[index].category.newPrice;
        setReceipt([...receipt]);
      } else {
        receipt[index].category.quantity = 1;
      }
    }
  };
  const discountHandler = (text) => {
    if (text === "") {
      setDiscountError(true);
    } else {
      setDiscountError(false);
    }
    setDiscount(text.replace(/[^0-9]/g, ""));
  };
  const otherDiscountHandler = (text) => {
    if (text === "") {
      setOtherDiscountError(true);
    } else {
      setOtherDiscountError(false);
    }
    setOtherDiscount(text.replace(/[^0-9]/g, ""));
  };
  const paidHandler = (text) => {
    if (text === "") {
      setPaidError(true);
    } else {
      setPaidError(false);
    }
    setPaid(text.replace(/[^0-9]/g, ""));
  };
  const doneDiscount = (id) => {
    if (receipt.length > 0 && discount !== "") {
      const index = receipt.findIndex((r) => r.category.id === id);
      receipt[index].category.discount = Number(discount);
      if (receipt[index].category.newPrice) {
        let newPrice =
          Number(receipt[index].category.newPrice) - Number(discount);
        receipt[index].category.newPrice = String(newPrice);
      } else {
        let price = receipt[index].category.price;
        let newPrice = Number(price) - Number(discount);
        receipt[index].category.newPrice = String(newPrice);
      }
      setReceipt([...receipt]);
      setDiscountArr((current) => current.filter((element) => element !== id));
    }
  };
  return (
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
          onPress={() => {
            if (typeof date !== "object" && !otherDiscountError && !paidError) {
              props.navigation.navigate({
                routeName: "GenerateReceipt",
                params: {
                  customer: customer,
                  animals: animals,
                  receipt: receipt,
                  date: date,
                  otherDiscount: otherDiscount,
                  paid: paid,
                },
              });
            } else {
              alert("Please Enter Valid and Complete Information");
            }
          }}
          color={Colors.primary}
        />
      </View>
      <Text style={styles.priceText}>
        Animal:{" "}
        {animal_details.map((a) => (
          <Text key={a.name}>{a.name + " "}</Text>
        ))}
      </Text>
      <Text style={styles.priceText}>Customer: {customer}</Text>
      <ScrollView>
        <View style={styles.servicesRow}>
          <Text>Date: </Text>
          {typeof date !== "object" ? (
            <Text
              onPress={() => setIsDate(!isDate)}
              style={{ textDecorationLine: "underline" }}
            >
              {date}
            </Text>
          ) : (
            <Text
              onPress={() => setIsDate(!isDate)}
              style={{ color: Colors.success }}
            >
              Set
            </Text>
          )}
        </View>
        {isDate && (
          <DatePicker
            onSelectedChange={(date) => {
              setDate(date?.split(" ")[0]);
              setIsDate(false);
            }}
          />
        )}
        {receipt.map((r, index) => (
          <View key={index} style={styles.detailItem}>
            <Text>{r.main_id}</Text>
            <Text>
              {r.service}
              {"(" + r.animal + ")"}
            </Text>
            <Text>{r.category.id}</Text>
            <View style={styles.servicesRow}>
              <Text>{r.category.type}</Text>
              <View style={styles.servicesRow}>
                <Text
                  style={styles.incrementQuantity}
                  onPress={() => incrementQuantity(r.category.id)}
                >
                  +
                </Text>
                <Text>{r.category.quantity}</Text>
                <Text
                  style={styles.decrementQuantity}
                  onPress={() => decrementQuantity(r.category.id)}
                >
                  -
                </Text>
              </View>
            </View>
            {discountArr.includes(r.category.id) ? (
              <KeyboardAvoidingView style={styles.servicesRow}>
                <TextInput
                  placeholder="Discount"
                  blurOnSubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={discount}
                  keyboardType="numeric"
                  onChangeText={discountHandler}
                  style={{
                    borderBottomColor: Colors.primary,
                    borderBottomWidth: 1,
                    padding: 10,
                    marginVertical: 10,
                  }}
                />
                {discountError ? (
                  <Text style={styles.danger}>Enter Valid Discount</Text>
                ) : null}
                <Button
                  title="Done"
                  onPress={() => doneDiscount(r.category.id)}
                  color={Colors.success}
                />
              </KeyboardAvoidingView>
            ) : null}
            {discountArr.includes(r.category.id) ? (
              <View style={styles.servicesRow}>
                <Text>Changed mind?</Text>
                <Button
                  title="Cancel"
                  color={Colors.danger}
                  onPress={() =>
                    setDiscountArr((current) =>
                      current.filter((element) => element !== r.category.id)
                    )
                  }
                />
              </View>
            ) : (
              <View style={styles.servicesRow}>
                <Text>Do you want to give discount? </Text>
                <Text
                  onPress={() =>
                    setDiscountArr((current) => [...current, r.category.id])
                  }
                  style={{
                    color: Colors.primary,
                    textDecorationLine: "underline",
                  }}
                >
                  Yes
                </Text>
              </View>
            )}
            <View style={styles.price}>
              <Text style={styles.priceText}>
                Rs.{" "}
                {r.category.newPrice ? r.category.newPrice : r.category.price}
              </Text>
            </View>
          </View>
        ))}
        <Text style={{textAlign: 'right', fontSize: 18, color: Colors.success}}>
          Total: Rs.{" "}
          {receipt?.reduce(
            (acc, cur) =>
              acc +
              (cur.category.newPrice
                ? Number(cur.category.newPrice)
                : cur.category.price),
            0
          )}
        </Text>
        <KeyboardAvoidingView style={styles.servicesRow}>
          <Text>Credit?</Text>
          <View>
            <TextInput
              placeholder="Other Discount"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              value={otherDiscount}
              keyboardType="numeric"
              onChangeText={otherDiscountHandler}
              style={{
                borderBottomColor: Colors.primary,
                borderBottomWidth: 1,
                padding: 5,
                marginVertical: 5,
              }}
            />
            {otherDiscountError ? (
              <Text style={styles.danger}>Enter Valid Other Discount</Text>
            ) : null}
          </View>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.servicesRow}>
          <Text>Paid Amount</Text>
          <View>
            <TextInput
              placeholder="Paid/Unpaid"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              value={paid}
              keyboardType="numeric"
              onChangeText={paidHandler}
              style={{
                borderBottomColor: Colors.primary,
                borderBottomWidth: 1,
                padding: 5,
                marginVertical: 5,
              }}
            />
            {paidError ? (
              <Text style={styles.danger}>Enter Valid Paid Amount</Text>
            ) : null}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

EditReceipt.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Edit Receipt",
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
    paddingVertical: 90,
    paddingHorizontal: 10,
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
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "white",
    padding: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  price: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 5,
    alignItems: "flex-end",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "700",
  },
  danger: {
    color: Colors.danger,
    fontSize: 11,
  },
  incrementQuantity: {
    backgroundColor: Colors.success,
    borderRadius: 50,
    color: "white",
    paddingHorizontal: 10,
  },
  decrementQuantity: {
    backgroundColor: Colors.danger,
    borderRadius: 50,
    color: "white",
    paddingHorizontal: 10,
  },
});

export default EditReceipt;
