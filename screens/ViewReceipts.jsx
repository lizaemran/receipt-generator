import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ScrollView,
  Button,
} from "react-native";
import Colors from "../constants/colors";
import Customer from "../modals/Customer";
import { CUSTOMER } from "../data/CustomerData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DatePicker from "react-native-modern-datepicker";
const ViewReceipts = (props) => {
  let TabComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TabComponent = TouchableNativeFeedback;
  }
  const [customersData, setCustomersData] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [isStart, setIsStart] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const customers = await AsyncStorage.getItem("Customers");

        if (customers !== null) {
          setCustomersData(JSON.parse(customers));
          setFiltered(JSON.parse(customers));
          let temp = JSON.parse(customers);
          if (CUSTOMER.length === 0) {
            temp?.map((a) =>
              CUSTOMER.push(new Customer(a.id, a.name, a.phone, a.receipts))
            );
          }
        }
      } catch (e) {
        alert("Failed to load receipts data.");
      }
    };
    getData();
  }, []);
  const strtoDate = (d) => {
    const [year, month, day] = d.split("/");
    return new Date(+year, month - 1, +day);
  }
  const filterReceipts = () => {
    const strDate = strtoDate(startDate);
    const eDate = strtoDate(endDate);
    let temp = filtered.map(f => f.receipts?.filter(r => strtoDate(r.date) > strDate && strtoDate(r.date) < eDate));
    if(temp) console.log(temp);
    // setFiltered(temp);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.date}>
        <View style={styles.serviceRow}>
          {isStart ? (
            <DatePicker
              onSelectedChange={(date) => {
                setStartDate(date?.split(" ")[0]);
                setIsStart(false);
              }}
            />
          ) : (
            <Text style={{ color: "white" }} onPress={() => {setIsStart(true); setIsEnd(false);}}>
              Start Date:{" "}
              {typeof startDate !== "object" ? (
                startDate
              ) : (
                <Text style={{ color: Colors.active }}>Set</Text>
              )}
            </Text>
          )}
        </View>
        <View style={styles.serviceRow}>
          {isEnd ? (
            <DatePicker
              onSelectedChange={(date) => {
                setEndDate(date?.split(" ")[0]);
                setIsEnd(false);
              }}
            />
          ) : (
            <Text style={{ color: "white" }} onPress={() => {setIsEnd(true); setIsStart(false);}}>
              End Date:{" "}
              {typeof endDate !== "object" ? (
                endDate
              ) : (
                <Text style={{ color: Colors.active }}>Set</Text>
              )}
            </Text>
          )}
        </View>
        {(typeof startDate === 'string' && typeof endDate === 'string' ) && <Button
          title="Filter Results"
          color={Colors.success}
          onPress={filterReceipts}
        />}
      </View>
      <ScrollView style={styles.inputContainer}>
        {customersData === "" ? (
          <Text>No items to show</Text>
        ) : (
          <View >
            {(!isStart && !isEnd) && (
              <View style={{alignItems: 'center'}}>
                {filtered?.map((c) => (
                  <View key={c.id} style={{ width: 320 , }}>
                    <Text style={{ fontSize: 18, fontWeight: "700" }}>
                      {c.name}
                    </Text>
                    {c.receipts?.length > 0 ? c.receipts?.map((r, ind) => (
                      <View key={ind} style={styles.receipt}>
                        <View>
                          <Text>Date: {r.date}</Text>
                        </View>
                        <View>
                          {r.animals?.map((a) => (
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
                        <View>
                          <Text style={{ textAlign: "right" }}>
                            Rs. {r.total}
                          </Text>
                        </View>
                      </View>
                    )) : <Text>No Receipts</Text>}
                  </View>
                ))}
              </View>
            )}
          </View>
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

ViewReceipts.navigationOptions = {
  headerTitle: "View Receipts",
  headerStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.secondary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    minWidth: 300,
    maxWidth: "90%",
    elevation: 2,
    paddingVertical: 30,
    borderRadius: 10,
    backgroundColor: "#f7f2f2",
    marginBottom: 5,
  },
  date: {
    marginTop: 80,
    marginBottom: 10,
    backgroundColor: Colors.primary,
    padding: 5,
    borderRadius: 5,
    width: "100%",
    minWidth: 300,
    maxWidth: "90%",
    elevation: 2,
  },
  receipt: {
    marginVertical: 10,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  text: {
    color: "white",
  },
  heading: {
    color: "#424242",
    fontSize: 20,
  },
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  customize: {
    color: Colors.primary,
    textAlign: "center",
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
    textTransform: "capitalize",
    color: "white",
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  datePickerStyle: {
    width: 230,
  },
});
export default ViewReceipts;
