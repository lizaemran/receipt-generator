import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import Colors from "../constants/colors";
import { ANIMALS } from '../data/data';

const SelectAnimal = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
            <Button title='Back To Dashboard' onPress={() => props.navigation.navigate({routeName: 'MainPage'})} color={Colors.primary} />
      </View>
      <View>
        {ANIMALS.map((a) => 
          <Text style={styles.name} key={a.id} onPress={() => props.navigation.navigate({
            routeName: 'SelectCustomer',
            params: {
                animal: a.name,
            }
          })}>
            {a.name}
          </Text>
        )}
      </View>
      <StatusBar style='auto' />
    </View>
  )
}
SelectAnimal.navigationOptions = {
  headerTitle: "Select Animal",
  headerStyle: {
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
  },
  
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.secondary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginVertical: 10,
    width: 200,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    textAlign: 'center',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(59, 114, 237,0.5)',
    padding: 10,
    fontSize: 18
  }
  
});

export default SelectAnimal;