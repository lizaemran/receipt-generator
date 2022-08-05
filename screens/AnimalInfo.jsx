import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import AnimalInfoForm from "../components/AnimalInfoForm";
import Colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
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
  const [animalInfo, setAnimalInfo] = useState(initialValues);
  const [isEditAnimalArr, setIsEditAnimalArr] = useState([]);
  const animals = props.navigation.getParam("animals");
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
        {animals.length === animalInfo.length && (
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
        )}
      </View>

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
                      setIsEditAnimalArr((current) => current.filter((e) => e !== a))
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
                <Text style={styles.info}>Nick Name:</Text>
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
    fontSize: 11
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
