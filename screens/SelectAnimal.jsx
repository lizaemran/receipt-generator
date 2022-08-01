import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import Colors from "../constants/colors";
import { ANIMALS } from "../data/data";
import { Ionicons } from "@expo/vector-icons";
const SelectAnimal = (props) => {
  const [animals, setAnimals] = useState([]);
  const animalsHandler = (name) => {
    let exisiting = animals.find((a) => a === name);
    if (!exisiting) {
      setAnimals((current) => [...current, name]);
    }
    else{
      setAnimals(current =>
        current.filter(element => {
          return element !== name;
        }),
      );
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button
          title="Back To Dashboard"
          onPress={() => props.navigation.navigate({ routeName: "MainPage" })}
          color={Colors.primary}
        />
      </View>
      <View>
        {ANIMALS.map((a) => (
          <Text style={styles.name} key={a.id} onPress={() => animalsHandler(a.name)}>
            {animals.includes(a.name) && (
                <Ionicons name="checkmark-sharp" size={24} color={Colors.success} />
            )}
            {a.name}
          </Text>
        ))}
      </View>
      <Button
        title="Next"
        color={Colors.primary}
        onPress={() =>
          props.navigation.navigate({
            routeName: "SelectCustomer",
            params: {
              animals: animals,
            },
          })
        }
      />
      <StatusBar style="auto" />
    </View>
  );
};
SelectAnimal.navigationOptions = {
  headerTitle: "Select Animal",
  headerStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.secondary,
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 10,
  },
  name: {
    marginVertical: 10,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    textAlign: "center",
    textTransform: "capitalize",
    backgroundColor: "rgba(59, 114, 237,0.5)",
    padding: 10,
    fontSize: 18,
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});

export default SelectAnimal;
