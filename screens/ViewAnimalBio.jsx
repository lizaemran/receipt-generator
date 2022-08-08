import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import Colors from "../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ANIMALBIO } from "../data/AnimalBio";
import AnimalBio from "../modals/AnimalBio";
import AnimalBioGridTile from "../components/AnimalBioGridTile";
import RadioButton from "../components/RadioButton";
const ViewAnimalBio = (props) => {
  const [animalType, setAnimalType] = useState("");
  const [animalName, setAnimalName] = useState("");
  const [animalAge, setAnimalAge] = useState("");
  const [sex, setSex] = useState("");
  const [animalBreed, setAnimalBreed] = useState("");
  const [animalColor, setAnimalColor] = useState("");
  const [animalTypeError, setAnimalTypeError] = useState(false);
  const [animalNameError, setAnimalNameError] = useState(false);
  const [animalAgeError, setAnimalAgeError] = useState(false);
  const [animalBreedError, setAnimalBreedError] = useState(false);
  const [animalColorError, setAnimalColorError] = useState(false);
  const [animalBioData, setAnimalBioData] = useState("");
  const [isAddNew, setIsAddNew] = useState(false);
  const PROP = [
    {
      key: 'male',
      text: 'Male',
    },
    {
      key: 'female',
      text: 'Female',
    },
  ];
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await AsyncStorage.getItem("AnimalBio");

        if (data !== null) {
          setAnimalBioData(JSON.parse(data));
          let temp = JSON.parse(data);
          if (ANIMALBIO.length === 0) {
            temp?.map((a) =>
              ANIMALBIO.push(
                new AnimalBio(
                  a.id,
                  a.name,
                  a.type,
                  a.age,
                  a.color,
                  a.sex,
                  a.breed
                )
              )
            );
          }
        }
      } catch (e) {
        alert("Failed to load animals data.");
      }
    };
    getData();
  }, []);
  const animalTypeHandler = (text) => {
    if (text === "") {
      setAnimalTypeError(true);
    } else {
      setAnimalTypeError(false);
    }
    setAnimalType(text.replace("<", ""));
  };
  const animalNameHandler = (text) => {
    if (text === "") {
      setAnimalNameError(true);
    } else {
      setAnimalNameError(false);
    }
    setAnimalName(text.replace("<", ""));
  };
  const animalBreedHandler = (text) => {
    if (text === "") {
      setAnimalBreedError(true);
    } else {
      setAnimalBreedError(false);
    }
    setAnimalBreed(text.replace("<", ""));
  };
  const animalColorHandler = (text) => {
    if (text === "") {
      setAnimalColorError(true);
    } else {
      setAnimalColorError(false);
    }
    setAnimalColor(text.replace("<", ""));
  };
  const animalAgeHandler = (text) => {
    if (text === "") {
      setAnimalAgeError(true);
    } else {
      setAnimalAgeError(false);
    }
    setAnimalAge(text.replace("<", ""));
  };
  const getAge = (birthYear) => {
    var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      let age = currentYear - birthYear;
      return age;
  }
  const addAnimalBio = async () => {
    if (
      animalTypeError ||
      animalNameError ||
      animalAgeError ||
      sex === '' ||
      animalBreedError ||
      animalColorError
    ) {
      Alert.alert("Invalid Input", "Please enter a valid animal data", [
        { text: "Okay", style: "destructive" },
      ]);
    } else {
      let age = getAge(animalAge.split('-')[2]);
      console.log(age);
      ANIMALBIO.push(
        new AnimalBio(
          ANIMALBIO.length + 1,
          animalName,
          animalType,
          age,
          animalColor,
          sex,
          animalBreed
        )
      );
      try {
        const data = JSON.stringify(ANIMALBIO);
        await AsyncStorage.setItem("AnimalBio", data);
        alert("Data successfully saved!");
        setIsAddNew(false);
      } catch (e) {
        alert("Failed to save data.");
      }
      Alert.alert("Affirmation", "Animal Bio added successfully", [
        { text: "Okay", style: "destructive" },
      ]);
      setAnimalName("");
      setAnimalType("");
      setAnimalAge("");
      setAnimalBreed("");
      setAnimalColor("");
      props.navigation.navigate({ routeName: "MainPage", })
    }
  };
  const renderGridItem = (itemData) => {
    return (
      <AnimalBioGridTile
        id={itemData.item.id}
        name={itemData.item.name}
        type={itemData.item.type}
        age={itemData.item.age}
        sex={itemData.item.sex}
        breed={itemData.item.breed}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "AnimalBioDetails",
            params: {
              animalId: itemData.item.id,
            },
          })
        }
      />
    );
  };
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <View style={styles.serviceRow}>
          <Button
            title="Back To Dashboard"
            onPress={() => props.navigation.navigate({ routeName: "MainPage" })}
            color={Colors.primary}
          />
          {isAddNew ? (
            <Button
              title="Cancel"
              onPress={() => setIsAddNew(false)}
              color={Colors.danger}
            />
          ) : (
            <Button
              title=" + Add New"
              onPress={() => setIsAddNew(true)}
              color={Colors.success}
            />
          )}
        </View>
      </View>
      {isAddNew ? (
        <View style={styles.detailItem}>
          <View style={styles.input}>
            <TextInput
              placeholder="Oreo"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              value={animalName}
              onChangeText={animalNameHandler}
              style={{
                borderBottomColor: Colors.primary,
                borderBottomWidth: 1,
                padding: 10,
                marginVertical: 10,
              }}
            />
            {animalNameError ? (
              <Text style={styles.danger}>Enter Valid Animal Name</Text>
            ) : null}
            <TextInput
              placeholder="cat"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              value={animalType}
              onChangeText={animalTypeHandler}
              style={{
                borderBottomColor: Colors.primary,
                borderBottomWidth: 1,
                padding: 10,
                marginVertical: 10,
              }}
            />
            {animalTypeError ? (
              <Text style={styles.danger}>Enter Valid Animal Type</Text>
            ) : null}
            <TextInput
              placeholder="12-01-2000"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              value={animalAge}
              onChangeText={animalAgeHandler}
              style={{
                borderBottomColor: Colors.primary,
                borderBottomWidth: 1,
                padding: 10,
                marginVertical: 10,
              }}
            />
            {animalAgeError ? (
              <Text style={styles.danger}>Enter Valid Animal Age</Text>
            ) : null}
            <TextInput
              placeholder="Persian"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              value={animalBreed}
              onChangeText={animalBreedHandler}
              style={{
                borderBottomColor: Colors.primary,
                borderBottomWidth: 1,
                padding: 10,
                marginVertical: 10,
              }}
            />
            {animalBreedError ? (
              <Text style={styles.danger}>Enter Valid Animal Breed</Text>
            ) : null}
            <TextInput
              placeholder="white"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              value={animalColor}
              onChangeText={animalColorHandler}
              style={{
                borderBottomColor: Colors.primary,
                borderBottomWidth: 1,
                padding: 10,
                marginVertical: 10,
              }}
            />
            {animalColorError ? (
              <Text style={styles.danger}>Enter Valid Animal Color</Text>
            ) : null}
            <RadioButton PROP={PROP} sex={sex} setSex={setSex} />
          </View>
          <View style={styles.Add}>
            <Button
              title=" + Add Animal Bio"
              onPress={addAnimalBio}
              color={Colors.success}
            />
          </View>
        </View>
      ) : null}
      {animalBioData.length > 0 ? (
        <FlatList
          keyExtractor={(item, index) => item.id}
          numColumns={0}
          data={animalBioData}
          renderItem={renderGridItem}
        />
      ) : (
        <Text>No Animals Bio Added Yet</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
};
ViewAnimalBio.navigationOptions = {
  headerTitle: "View Animals Bio",
  headerStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.secondary,
    flex: 1,
    paddingHorizontal: 5,
  },
  detailItem: {
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "white",
    padding: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  input: {
    width: "100%",
  },
  noAnimals: {
    flex: 1,
  },
  button: {
    marginTop: 90,
  },
  danger: {
    color: Colors.danger,
    fontSize: 11,
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});
export default ViewAnimalBio;
