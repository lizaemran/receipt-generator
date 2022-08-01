import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import Colors from "../constants/colors";
import { ANIMALS } from "../data/data";

const SelectServices = (props) => {
  const animals = props.navigation.getParam("animals");
  const customer = props.navigation.getParam("customer");
  const animal_details = animals.map((animal) =>
    ANIMALS.find((a) => a.name === animal)
  );
  console.log(animal_details);
  let services = [];
  const addServices = (s) => {
    // s.quantity = 1;
    // services.push(s);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.servicesRow}>
        <Button
          title="Back To Customer"
          onPress={() =>
            props.navigation.navigate({ routeName: "SelectCustomer" })
          }
          color={Colors.primary}
        />
        <Button
          title="Generate Receipt"
          onPress={() =>
            props.navigation.navigate({
              routeName: "GenerateReceipt",
              params: {
                customer: customer,
                animals: animals,
                services: services,
              },
            })
          }
          color={Colors.primary}
        />
      </View>
      <ScrollView style={styles.services}>
        <Text>Animal: {animal_details.map((a) => a.name + " ")}</Text>
        <Text>Customer: {customer}</Text>
        {animal_details.map((a) => (
          <View key={a.name}>
            <Text style={styles.animal}>{a.name}</Text>
            {a.services?.map((s) => (
              <View key={s.title}>
                <View>
                  <Text style={styles.title}>{s.title}</Text>
                </View>
                {s.mainCategory.map((m) => (
                  <View key={m.type}>
                    <Text style={styles.main}>{m.type}</Text>
                    {m.subCategory.map((c) => (
                      <View key={c.type} style={styles.servicesRow}>
                        <Text>{c.type}</Text>
                        <Text>{c.price}</Text>
                        <Text>{c.discount}</Text>
                        <Button
                          title="+ Add"
                          color={Colors.primary}
                          onPress={() => addServices(s)}
                        />
                        <View style={styles.quantity}>
                          <Button
                            title="+"
                            color={Colors.primary}
                            onPress={() => addServices(s)}
                          />
                          <Text>{c.quantity}</Text>
                          <Button
                            title="-"
                            color={Colors.primary}
                            onPress={() => addServices(s)}
                          />
                        </View>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};
SelectServices.navigationOptions = {
  headerTitle: "Select Services",
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
  services: {
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "white",
    padding: 5,
    borderColor: Colors.primary,
    borderWidth: 2,
    marginTop: 5,
  },

  servicesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center",
  },
  select: {
    paddingHorizontal: 10,
    color: Colors.primary,
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: 20,
  },
  main: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  quantity: {
    alignItems:'center',
    flexDirection: 'row'
  },
  animal: {
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2
  }
});
export default SelectServices;
