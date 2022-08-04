import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const AnimalInfoForm = (props) => {
  const [nickName, setName] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [colorError, setColorError] = useState("");
  const animal = props.animal;
  const animalInfo = props.animalInfo;
  const setAnimalInfo = props.setAnimalInfo;
  const index = props.index;
  const nameHandler = (text) => {
    if (text === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(text.replace("<", ""));
  };
  const ageHandler = (text) => {
    if (text === "") {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    setAge(text.replace("<", ""));
  };
  const colorHandler = (text) => {
    if (text === "") {
      setColor(true);
    } else {
      setColorError(false);
    }
    setColor(text.replace("<", ""));
  };
  const submitHandler = () => {
    if (nickName !== "" && color !== "" && age !== "") {
      if(animalInfo.length >= 1){
        let newArr = [...animalInfo];
        newArr[index] = {
          type: animal,
          name: nickName,
          age: age,
          color: color,
        }
        setAnimalInfo(newArr);
      }
      else{
        animalInfo[index].type = animal;
        animalInfo[index].name = nickName;
        animalInfo[index].age = age;
        animalInfo[index].color = color;
        setAnimalInfo([...animalInfo]);
      }
    }
    else{
      alert('Enter Valid Input');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        blurOnSubmit
        autoCapitalize="none"
        autoCorrect={false}
        value={nickName}
        onChangeText={nameHandler}
        style={{
          borderBottomColor: Colors.primary,
          borderBottomWidth: 1,
          padding: 10,
          marginVertical: 10,
        }}
      />
      {nameError ? <Text style={styles.danger}>Enter Valid Name</Text> : null}
      <TextInput
        placeholder="Age"
        blurOnSubmit
        autoCapitalize="none"
        autoCorrect={false}
        value={age}
        onChangeText={ageHandler}
        style={{
          borderBottomColor: Colors.primary,
          borderBottomWidth: 1,
          padding: 10,
          marginVertical: 10,
        }}
      />
      {ageError ? <Text style={styles.danger}>Enter Valid Age</Text> : null}
      <TextInput
        placeholder="Color"
        blurOnSubmit
        autoCapitalize="none"
        autoCorrect={false}
        value={color}
        onChangeText={colorHandler}
        style={{
          borderBottomColor: Colors.primary,
          borderBottomWidth: 1,
          padding: 10,
          marginVertical: 10,
        }}
      />
      {colorError ? <Text style={styles.danger}>Enter Valid Color</Text> : null}
      <Button
        title=" + Add"
        color={Colors.success}
        onPress={submitHandler}
        style={{ marginVertical: 10 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  danger: {
    color: Colors.danger,
  },
});
export default AnimalInfoForm;
