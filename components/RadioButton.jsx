import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const RadioButton = (props) => {
  const PROP = props.PROP;
  const sex = props.sex;
  const setSex = props.setSex;
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {PROP.map((res) => {
        return (
          <View key={res.key} style={styles.container}>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                setSex(res.key);
              }}
            >
              {sex === res.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
            <Text style={styles.radioText}>{res.text}</Text>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  radioText: {
    marginRight: 35,
    marginLeft: 5,
    color: "#000",
  },
  radioCircle: {
    height: 25,
    width: 25,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: Colors.primary,
  }
});
export default RadioButton;
