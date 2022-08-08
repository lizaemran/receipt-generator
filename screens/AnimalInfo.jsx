import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AnimalInfoForm from "../components/AnimalInfoForm";
import Colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { ANIMALBIO } from "../data/AnimalBio";
import { Ionicons, Feather } from "@expo/vector-icons";
const AnimalInfo = (props) => {
  const initialValues = [
    {
      type: "",
      name: "",
      age: "",
      color: "",
      sex: "",
      breed: "",
    },
  ];
  const [isNew, setIsNew] = useState(false);
  const [animalInfo, setAnimalInfo] = useState(initialValues);
  const [isEditAnimalArr, setIsEditAnimalArr] = useState([]);
  const [matchedAnimals, setMatchedAnimals] = useState([]);
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState(false);
  const animals = props.navigation.getParam("animals");
  useEffect(() => {
    if (animals.length > 0) {
      animals.forEach((element) =>
        ANIMALBIO.forEach((a) => {
          if (element.toLowerCase() === a.type.toLowerCase()) {
            let exists = matchedAnimals.filter((m) => m.id === a.id).length;
            if (exists === 0) setMatchedAnimals((current) => [...current, a]);
          }
        })
      );
    }
  }, []);
  const submitHandler = (a) => {
    if (animalInfo.length === 0) {
      let newArr = [...animalInfo];
      newArr[0] = {
        type: "",
        name: "",
        age: "",
        color: "",
        breed: "",
        sex: "",
      };
      setAnimalInfo(newArr);
    }
    if (animalInfo.length === 1 && animalInfo[0].type === "") {
      let newArr = [...animalInfo];
      newArr[0] = {
        type: a.type,
        name: a.name,
        age: a.age,
        color: a.color,
        breed: a.breed,
        sex: a.sex,
      };
      setAnimalInfo(newArr);
    } else if (animalInfo.length >= 1 && animalInfo[0].type !== "") {
      const exists =
        animalInfo
          .map((animal) => {
            if (
              animal.type === a.type &&
              animal.name === a.name &&
              animal.sex === a.sex &&
              animal.breed === a.breed &&
              animal.color === a.color &&
              animal.age === a.age
            ) {
              return true;
            }
          })
          .filter((e) => e === true).length > 0;
      if (!exists) {
        setAnimalInfo((current) => [...current, a]);
      } else {
        const index = animalInfo
          .map((animal, index) => {
            if (
              animal.type === a.type &&
              animal.name === a.name &&
              animal.sex === a.sex &&
              animal.breed === a.breed &&
              animal.color === a.color &&
              animal.age === a.age
            ) {
              return index;
            }
          })
          .filter((e) => e !== undefined);
        let temp = [...animalInfo];
        temp.splice(index[0], 1);
        setAnimalInfo([...temp]);
      }
    }
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
          title="Back to Animals"
          onPress={() =>
            props.navigation.navigate({ routeName: "SelectAnimal" })
          }
          color={Colors.primary}
        />
          <Button
            title="Next"
            onPress={() =>
              props.navigation.navigate({
                routeName: "SelectCustomer",
                params: {
                  animals: animalInfo,
                },
              })
            }
            color={Colors.primary}
          />
      </View>
      {isNew ? (
        <View>
          <Button
            title="Select From Animals"
            color={Colors.primary}
            onPress={() => setIsNew(false)}
          />
        </View>
      ) : (
        <View>
          <Button
            title=" + Add New"
            color={Colors.primary}
            onPress={() => setIsNew(true)}
          />
        </View>
      )}
      {isNew ? (
        <ScrollView>
          {animals.map((a, index) => (
            <View key={index}>
              <View style={styles.name}>
                <View style={styles.servicesRow}>
                  <Text style={styles.animal}>{a}</Text>
                  {isEditAnimalArr.includes(a) ? (
                    <Text
                      style={styles.editCancel}
                      onPress={() => {
                        setIsEditAnimalArr((current) =>
                          current.filter((e) => e !== a)
                        );
                      }}
                    >
                      X
                    </Text>
                  ) : (
                    <Text style={styles.edit}>
                      <Entypo
                        name="edit"
                        size={18}
                        color="white"
                        onPress={() =>
                          setIsEditAnimalArr((current) => [...current, a])
                        }
                      />
                    </Text>
                  )}
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.info}>Name:</Text>
                  <Text style={styles.info}>{animalInfo[index]?.name}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.info}>Age:</Text>
                  <Text style={styles.info}>{animalInfo[index]?.age}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.info}>Color:</Text>
                  <Text style={styles.info}>{animalInfo[index]?.color}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.info}>Breed:</Text>
                  <Text style={styles.info}>{animalInfo[index]?.breed}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.info}>Sex:</Text>
                  <Text style={styles.info}>{animalInfo[index]?.sex}</Text>
                </View>
              </View>
              {isEditAnimalArr.includes(a) ? (
                <AnimalInfoForm
                  animal={a}
                  animalInfo={animalInfo}
                  index={index}
                  setAnimalInfo={setAnimalInfo}
                />
              ) : null}
            </View>
          ))}
        </ScrollView>
      ) : (
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginTop: 10,
              fontWeight: "700",
            }}
          >
            Saved Animals
          </Text>
          <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderColor: Colors.primary,
              borderBottomWidth: 1,
              backgroundColor: 'white',
              borderRadius: 5,
              
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
                width: Dimensions.get("window").width * 0.85,
              }}
            />
            <Feather name="search" size={24} color="black" />
          </View>
          {searchError ? (
            <Text style={styles.danger}>Enter Valid Search</Text>
          ) : null}
        </View>
            {matchedAnimals.length > 0 ? (
              <View>
                {matchedAnimals.filter(matched => matched.name.includes(search)).map((a) => (
                  <TouchableOpacity key={a.id} onPress={() => submitHandler(a)}>
                    <View style={styles.name}>
                      {animalInfo
                        .map((animal) => {
                          if (
                            animal.type === a.type &&
                            animal.name === a.name &&
                            animal.sex === a.sex &&
                            animal.breed === a.breed &&
                            animal.color === a.color &&
                            animal.age === a.age
                          ) {
                            return true;
                          }
                        })
                        .filter((e) => e === true).length > 0 ? (
                        <Ionicons
                          name="checkmark-sharp"
                          size={24}
                          color={Colors.success}
                        />
                      ) : null}
                      <View style={styles.infoRow}>
                        <Text style={styles.info}>Name</Text>
                        <Text style={styles.info}>{a.name}</Text>
                      </View>
                      <View style={styles.infoRow}>
                        <Text style={styles.info}>Age</Text>
                        <Text style={styles.info}>{a.age}</Text>
                      </View>
                      <View style={styles.infoRow}>
                        <Text style={styles.info}>Sex</Text>
                        <Text style={styles.info}>{a.sex}</Text>
                      </View>
                      <View style={styles.infoRow}>
                        <Text style={styles.info}>Breed</Text>
                        <Text style={styles.info}>{a.breed}</Text>
                      </View>
                      <View style={styles.infoRow}>
                        <Text style={styles.info}>Color</Text>
                        <Text style={styles.info}>{a.color}</Text>
                      </View>
                      <View style={styles.infoRow}>
                        <Text style={styles.info}>Type</Text>
                        <Text style={styles.info}>{a.type}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
        </ScrollView>
      )}
    </View>
  );
};

AnimalInfo.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Add Animal Info",
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
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center",
    borderTopColor: Colors.primary,
    borderTopWidth: 1,
  },
  danger: {
    color: Colors.danger,
    fontSize: 11,
  },
  name: {
    marginVertical: 10,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    backgroundColor: Colors.card,
    padding: 10,
    borderRadius: 5,
  },
  info: {
    textTransform: "capitalize",
  },
  animal: {
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "700",
  },
  edit: {
    backgroundColor: Colors.success,
    padding: 5,
    borderRadius: 5,
  },
  editCancel: {
    backgroundColor: Colors.danger,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 12,
    color: "#fff",
    paddingHorizontal: 10,
  },
});

export default AnimalInfo;
