import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import Colors from "../constants/colors";
import { ANIMALS } from "../data/data";
import { Feather } from "@expo/vector-icons";
const SelectServices = (props) => {
  const animals = props.navigation.getParam("animals");
  const customer = props.navigation.getParam("customer");
  const [receipt, setReceipt] = useState([]);
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState(false);
  const animal_details = animals.map((animal) =>
    ANIMALS.find((a) => (a?.name).toLowerCase() === animal.type.toLowerCase())
  );
  const isAdded = (id) => {
    let isPresent = false;
    if (receipt.length > 0) {
      for (let i = 0; i <= receipt?.length; i++) {
        if (receipt[i]?.category?.id === id) isPresent = true;
      }
    }
    return isPresent;
  };
  const addServices = (animal, s, m_id, index, category) => {
    setReceipt((current) => [
      ...current,
      {
        animal: animal,
        service: s,
        main_id: m_id,
        category_index: index,
        category: {...category},
        animalInfo: animals,
      },
    ]);
  };
  const removeCategory = (id) => {
    setReceipt((current) =>
      current.filter((element) => element.category.id !== id)
    );
  };
  const searchHandler = (text) => {
    if (text === "") {
      setSearchError(true);
    } else {
      setSearchError(false);
    }
    setSearch(text.replace("<", ""));
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
        {receipt.length > 0 && (
          <Button
            title="Edit Receipt"
            onPress={() =>
              props.navigation.navigate({
                routeName: "EditReceipt",
                params: {
                  customer: customer,
                  animals: animals,
                  receipt: receipt,
                  setReceipt: setReceipt,
                },
              })
            }
            color={Colors.primary}
          />
        )}
      </View>
      <ScrollView style={styles.services}>
        {animals.map((a,index) => (
          <Text key={a.name+index}>Animal: {a?.name + " "}</Text>
        ))}
        <Text>Customer: {customer}</Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 5,
              backgroundColor: 'white'
            }}
          >
            <TextInput
              placeholder="Search..."
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              value={search}
              onChangeText={searchHandler}
              style={{
                padding: 7.5,
                width: Dimensions.get("window").width * 0.90,
              }}
            />
            <Feather name="search" size={24} color="black" />
          </View>
          {searchError ? (
            <Text style={styles.danger}>Enter Valid Search</Text>
          ) : null}
        </View>
        {animal_details.map((a) => (
          <View key={a?.name}>
            <Text style={styles.animal}>{a?.name}</Text>
            {a?.services?.filter((service) => service.title.includes(search)).map((s) => (
                <View key={s.title}>
                  <View>
                    <Text style={styles.title}>{s.title}</Text>
                  </View>
                  {s.mainCategory.map((m) => (
                    <View key={m.id}>
                      <Text style={styles.main}>{m.type}</Text>
                      {m.subCategory.map((c, index) => (
                        <View key={c.id} style={styles.servicesRow}>
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
                                addServices(a?.name, s.title, m.id, index, c)
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
    borderBottomWidth: 1,
    borderTopColor: Colors.primary,
    borderTopWidth: 1,
    marginVertical: 5,
  },
  danger: {
    color: Colors.danger,
    fontSize: 11,
  },
});
export default SelectServices;
