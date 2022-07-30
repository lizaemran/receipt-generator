import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View , Text} from 'react-native';
import Colors from "../constants/colors";
import { ANIMALS } from '../data/data';

const SelectServices = props => {
  const [isSelected, setIsSelected] = useState(false);
  const animal =  props.navigation.getParam('animal');
  const customer =  props.navigation.getParam('customer');
  const animal_details = ANIMALS.find(a => a.name === animal);
  let services = [];
  const addServices = (s) => {
    s.quantity = 1;
    services.push(s);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button title='Back To Dashboard' onPress={() => props.navigation.navigate({routeName: 'MainPage'})} color={Colors.primary} />
      </View>
      <View style={styles.services}>
        <Text>Animal: {animal}</Text>
        <Text>Customer: {customer}</Text>
        {animal_details.services?.map((s) => 
          <View key={s.title} style={styles.servicesRow}>
            <View style={styles.servicesRow}>
              {isSelected ? <Text style={styles.select} onPress={() => setIsSelected(false)}>+</Text> : <Text style={styles.select} onPress={() => setIsSelected(true)}>-</Text>}
              <Text>{s.title}</Text>
            </View>
            <Button title='Add' color={Colors.primary} onPress={() => addServices(s)} />
          </View>
        )}
      </View>
      <View style={styles.button}>
        <Button title='Generate Receipt' onPress={() => props.navigation.navigate({routeName: 'GenerateReceipt',
          params: {
            customer: customer,
            animal: animal,
            services: services
        }})} color={Colors.primary} />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}
SelectServices.navigationOptions = {
  headerTitle: "Select Services",
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
  services: {
    margin: 15,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: 'white',
    padding: 10,
    borderColor: Colors.primary,
    borderWidth:  2,
    width: 320
  },
  servicesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: 'center'
  },
  select: {
    paddingHorizontal: 10,
    color: Colors.primary
  }
});
export default SelectServices;