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
  const [receipt, setReceipt] = useState([]);
  const animal_details = animals.map((animal) =>
    ANIMALS.find((a) => a.name === animal)
  );
  const isAdded = (id) => {
    let isPresent = false;
    if(receipt.length > 0){
      for(let i=0;i<= receipt?.length;i++){
        if(receipt[i]?.category?.id === id) isPresent = true;
      }
    }
    return isPresent;
  }
  const addServices = (animal, s, m_id, index, category) => {
    setReceipt((current) => [
      ...current,
      {
        animal: animal,
        service: s,
        main_id: m_id,
        category_index: index,
        category: category,
      },
    ]);
  };
  const removeCategory = (id) => {
    setReceipt(current =>
      current.filter(element => element.category.id !== id)
    );
  }
  console.log(receipt);
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
        {receipt.length > 0 && <Button
          title="Edit Receipt"
          onPress={() =>
            props.navigation.navigate({
              routeName: "EditReceipt",
              params: {
                customer: customer,
                animals: animals,
                receipt: receipt,
              },
            })
          }
          color={Colors.primary}
        />}
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
                    {m.subCategory.map((c, index) => (
                      <View key={c.type} style={styles.servicesRow}>
                        <Text>{c.type}</Text>
                        {isAdded(c.id) ? (
                          <Button
                            title="Remove"
                            color={Colors.danger}
                            onPress={() => removeCategory(c.id)}
                          />
                        ) : (
                          <Button
                            title="+ Add"
                            color={Colors.success}
                            onPress={() =>
                              addServices(a.name, s.title, m.id, index, c)
                            }
                          />
                        )}
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
    marginVertical: 5,
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
    alignItems: "center",
    flexDirection: "row",
  },
  animal: {
    fontWeight: "700",
    fontSize: 24,
    textAlign: "center",
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    borderTopColor: Colors.primary,
    borderTopWidth: 2,
    marginVertical: 5,
    backgroundColor: Colors.secondary
  },
});
export default SelectServices;
