import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import Colors from "../constants/colors";
import Customer from "../modals/Customer";
import { CUSTOMER } from "../data/CustomerData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DatePicker from "react-native-modern-datepicker";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ViewReceipts = (props) => {
  const [customersData, setCustomersData] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [isStart, setIsStart] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [isEnd, setIsEnd] = useState(false);
  const [total, setTotal] = useState('');
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
  const strtoDate = (d) => {
    const [year, month, day] = d.split("/");
    return new Date(+year, month - 1, +day);
  };
  const filterReceipts = () => {
    const strDate = strtoDate(startDate);
    const eDate = strtoDate(endDate);
    let temp = filtered.map((f) => {
      f.receipts = f.receipts?.filter((r) => {
        return strtoDate(r.date) >= strDate && strtoDate(r.date) <= eDate;
      });
      return f;
    });
    if (temp) {
      let total = temp?.map(t => t?.receipts?.reduce(
        (acc, cur) =>
          acc +
          (cur.paid
            ? Number(cur.paid)
            : cur.paid),
        0
      )).reduce((acc, cur) =>
      acc +
      (cur
        ? Number(cur)
        : cur),
    0);
      setTotal(total);
      setFiltered(temp);
    }
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
            <Text
              style={{ color: "white" }}
              onPress={() => {
                setIsStart(true);
                setIsEnd(false);
              }}
            >
              Start Date:{" "}
              {typeof startDate !== "object" ? (
                <Text style={{textDecorationLine: 'underline'}}>{startDate}</Text>
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
            <Text
              style={{ color: "white" }}
              onPress={() => {
                setIsEnd(true);
                setIsStart(false);
              }}
            >
              End Date:{" "}
              {typeof endDate !== "object" ? (
                <Text style={{textDecorationLine: 'underline'}}>{endDate}</Text>
              ) : (
                <Text style={{ color: Colors.active }}>Set</Text>
              )}
            </Text>
          )}
        </View>
        {total !== '' && <View style={styles.earnings}>
        <MaterialCommunityIcons name="cash" size={32} color="white" />
        <Text style={styles.earningstext}> Earnings: Rs. {total}</Text>
      </View>}
        {typeof startDate === "string" && typeof endDate === "string" && (
          <View style={{ marginTop: 20 }}>
            {isFilter ? (
              <Button
                title="Clear Filter"
                color={Colors.danger}
                onPress={() => {
                  setIsFilter(false);
                  setStartDate({});
                  setEndDate({});
                  setTotal('');
                  getData();
                }}
              />
            ) : (
              <Button
                title="Filter"
                color={Colors.success}
                onPress={() => {
                  setIsFilter(true);
                  filterReceipts();
                }}
              />
            )}
          </View>
        )}
      </View>
      <ScrollView style={styles.inputContainer}>
        {customersData === "" ? (
          <Text>No items to show</Text>
        ) : (
          <View>
            {!isStart && !isEnd && (
              <View style={{ alignItems: "center" }}>
                {filtered?.map((c) => (
                  <View key={c.id} style={{ width: 320 }}>
                    <Text style={{ fontSize: 18, fontWeight: "700" }}>
                      {c.name}
                    </Text>
                    {c.receipts?.length > 0 ? (
                      c.receipts?.map((r, ind) => (
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
                            <View style={styles.serviceRow}>
                              <Text>Credit</Text>
                              <Text style={{ textAlign: "right", color: Colors.danger }}>
                               - Rs. {r.credit}
                            </Text>
                            </View>
                            <View style={styles.serviceRow}>
                              <Text>Paid</Text>
                            <Text style={{ textAlign: "right", color: Colors.danger  }}>
                               - Rs. {r.paid}
                            </Text>
                            </View>
                            <View style={styles.serviceRow}>
                              <Text>Due</Text>
                            <Text style={{ textAlign: "right" }}>
                              Rs. {r.due}
                            </Text>
                            </View>
                          </View>
                        </View>
                      ))
                    ) : (
                      <Text>No Receipts</Text>
                    )}
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
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#f7f2f2",
    marginBottom: 10,
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
  earnings: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.success,
    paddingVertical: 10,
    borderRadius: 5,
  },
  earningstext: {
    fontSize: 20, 
    fontWeight: '700', 
    textAlign: 'center', 
    color: 'white'
  }
});
export default ViewReceipts;
