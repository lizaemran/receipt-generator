import React, { useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ANIMALBIO } from "../data/AnimalBio";
import { Entypo } from "@expo/vector-icons";
const AnimalBioDetails = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [animalType, setAnimalType] = useState("");
  const [animalName, setAnimalName] = useState("");
  const [animalAge, setAnimalAge] = useState("");
  const [animalSex, setAnimalSex] = useState("");
  const [animalBreed, setAnimalBreed] = useState("");
  const [animalColor, setAnimalColor] = useState("");
  const [animalTypeError, setAnimalTypeError] = useState(false);
  const [animalNameError, setAnimalNameError] = useState(false);
  const [animalAgeError, setAnimalAgeError] = useState(false);
  const [animalSexError, setAnimalSexError] = useState(false);
  const [animalBreedError, setAnimalBreedError] = useState(false);
  const [animalColorError, setAnimalColorError] = useState(false);
  const animal_id = props.navigation.getParam("animalId");
  const selectedAnimalBio = ANIMALBIO.find((a) => a.id === animal_id);
  const deleteAnimalBio = async () => {
    ANIMALBIO.splice(animal_id - 1, 1);
    try {
      const data = JSON.stringify(ANIMALBIO);
      await AsyncStorage.setItem("AnimalBio", data);
      alert("Data successfully saved after deleting!");
      props.navigation.navigate({ routeName: "MainPage" });
    } catch (e) {
      alert("Failed to save data.");
    }
  };
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
  const animalSexHandler = (text) => {
    if (text === "") {
      setAnimalSexError(true);
    } else {
      setAnimalSexError(false);
    }
    setAnimalSex(text.replace("<", ""));
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
  const EditHandler = async () => {
    setIsEdit(false);
    if (
      animalType !== "" &&
      animalName !== "" &&
      animalAge !== "" &&
      animalSex !== "" &&
      animalBreed !== "" &&
      animalColor !== ""
    ) {
      ANIMALBIO[animal_id - 1].type = animalType;
      ANIMALBIO[animal_id - 1].name = animalName;
      ANIMALBIO[animal_id - 1].sex = animalSex;
      ANIMALBIO[animal_id - 1].age = animalAge;
      ANIMALBIO[animal_id - 1].breed = animalBreed;
      ANIMALBIO[animal_id - 1].color = animalColor;
      try {
        const data = JSON.stringify(ANIMALBIO);
        await AsyncStorage.setItem("AnimalBio", data);
        alert("Data successfully saved after updating!");
        props.navigation.navigate({ routeName: "MainPage" });
      } catch (e) {
        alert("Failed to save data.");
      }
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button
          title="Back To Animals Bio"
          onPress={() =>
            props.navigation.navigate({ routeName: "ViewAnimalBio" })
          }
          color={Colors.primary}
        />
      </View>
      <ScrollView style={styles.detailItem}>
        <View style={styles.servicesRow}>
          <Text style={styles.smalltext}>ID: {selectedAnimalBio.id}</Text>
          {isEdit ? (
            <View style={styles.servicesRow}>
              <Button
                title="Done"
                onPress={EditHandler}
                color={Colors.success}
              />
              <Button
                title="Cancel"
                onPress={() => setIsEdit(false)}
                color={Colors.danger}
              />
            </View>
          ) : (
            <Text style={styles.edit}>
              <Entypo
                name="edit"
                size={18}
                color="white"
                onPress={() => setIsEdit(true)}
              />
            </Text>
          )}
        </View>
        <KeyboardAvoidingView>
          <Text style={styles.smalltext}>
            Name:{" "}
            {isEdit ? (
              <View>
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
                  }}
                />
                {animalNameError ? (
                  <Text style={styles.danger}>Enter Valid Animal Name</Text>
                ) : null}
              </View>
            ) : (
              selectedAnimalBio.name
            )}
          </Text>
          <Text style={styles.smalltext}>
            Type:{" "}
            {isEdit ? (
              <View>
                <TextInput
                  placeholder="type"
                  blurOnSubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={animalType}
                  onChangeText={animalTypeHandler}
                  style={{
                    borderBottomColor: Colors.primary,
                    borderBottomWidth: 1,
                  }}
                />
                {animalTypeError ? (
                  <Text style={styles.danger}>Enter Valid Animal Type</Text>
                ) : null}
              </View>
            ) : (
              selectedAnimalBio.type
            )}
          </Text>
          <Text style={styles.smalltext}>
            Age:{" "}
            {isEdit ? (
              <View>
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
                  }}
                />
                {animalAgeError ? (
                  <Text style={styles.danger}>Enter Valid Animal Age</Text>
                ) : null}
              </View>
            ) : (
              selectedAnimalBio.age
            )}
          </Text>
          <Text style={styles.smalltext}>
            Sex:{" "}
            {isEdit ? (
              <View>
                <TextInput
                  placeholder="Female"
                  blurOnSubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={animalSex}
                  onChangeText={animalSexHandler}
                  style={{
                    borderBottomColor: Colors.primary,
                    borderBottomWidth: 1,
                  }}
                />
                {animalSexError ? (
                  <Text style={styles.danger}>Enter Valid Animal Sex</Text>
                ) : null}
              </View>
            ) : (
              selectedAnimalBio.sex
            )}
          </Text>
          <Text style={styles.smalltext}>
            Breed:{" "}
            {isEdit ? (
              <View>
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
                  }}
                />
                {animalBreedError ? (
                  <Text style={styles.danger}>Enter Valid Animal Breed</Text>
                ) : null}
              </View>
            ) : (
              selectedAnimalBio.breed
            )}
          </Text>
          <Text style={styles.smalltext}>
            Color:{" "}
            {isEdit ? (
              <View>
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
                  }}
                />
                {animalColorError ? (
                  <Text style={styles.danger}>Enter Valid Animal Color</Text>
                ) : null}
              </View>
            ) : (
              selectedAnimalBio.color
            )}
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
      <Button title="Delete" onPress={deleteAnimalBio} color={Colors.danger} />
    </View>
  );
};

AnimalBioDetails.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Animal Bio Details",
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
    paddingTop: 80,
    paddingHorizontal: 5,
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
    marginVertical: 5,
  },
  servicesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center",
  },
  danger: {
    color: Colors.danger,
    fontSize: 11,
  },
  receiptTile: {
    marginVertical: 20,
    backgroundColor: Colors.secondary,
    borderRadius: 5,
    padding: 5,
  },
  edit: {
    backgroundColor: Colors.success,
    padding: 5,
    borderRadius: 5,
  },
});

export default AnimalBioDetails;
