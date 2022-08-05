import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button, ScrollView, Dimensions } from "react-native";
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
      <View style={styles.serviceRow}>
        <Button
          title="Back To Dashboard"
          onPress={() => props.navigation.navigate({ routeName: "MainPage" })}
          color={Colors.primary}
        />
         {animals.length > 0 ? <Button
        title="Next"
        color={Colors.primary}
        onPress={() =>
          props.navigation.navigate({
            routeName: "AnimalInfo",
            params: {
              animals: animals,
            },
          })
        }
      /> : null}
      </View>
      <ScrollView  >
        {ANIMALS.map((a) => (
          <Text style={styles.name} key={a.id} onPress={() => animalsHandler(a.name)}>
            {animals.includes(a.name) && (
                <Ionicons name="checkmark-sharp" size={24} color={Colors.success} />
            )}
            {a.name}
          </Text>
        ))}
      </ScrollView>
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
    textAlign: "center",
    textTransform: "capitalize",
    backgroundColor: Colors.card,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    fontSize: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 15,
    width: Dimensions.get('window').width * 0.945,

  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});

export default SelectAnimal;
