import React from "react";
import { Text, View, Button , StyleSheet, Dimensions, ScrollView } from 'react-native';
import Colors from '../constants/colors';
import { ANIMALS } from "../data/data";
const AnimalInfo = props => {
  const customer = props.navigation.getParam("customer");
  const receipt = props.navigation.getParam("receipt");
  const animals = props.navigation.getParam("animals");
  const animal_details = animals.map((animal) =>
  ANIMALS.find((a) => a.name === animal)
);
console.log(receipt)
  return(
    <View style={styles.screen}>
        <Text>Animal: {animal_details.map((a) => a.name + " ")}</Text>
        <Text>Customer: {customer}</Text>
        <Button
          title="Back to Edit Quantity"
          onPress={() =>
            props.navigation.navigate({ routeName: "EditReceipt" })
          }
          color={Colors.primary}
        />
    </View>
  )
}

AnimalInfo.navigationOptions = (navigationData) => {
  return {
      headerTitle: 'Add Animal Info',
      
  }
}

const styles = StyleSheet.create({
 detailItem: {
     marginVertical: 5,
     borderRadius: 10,
     elevation: 2,
     backgroundColor: 'white',
     padding: 10,
     borderColor: Colors.primary,
     borderWidth:  2,
 },
 screen: {
     backgroundColor:Colors.secondary,
     flex:1,
     paddingVertical: 90,
     paddingHorizontal: 10
 },
 button: {
     marginVertical: 10,
     width: Dimensions.get('window').width * 0.9,    
     alignItems:'center',
     justifyContent:'center',
 },
 text : {
     fontSize: 20,
     fontWeight: 'bold',
     color: Colors.primary,
 },
 smalltext : {
     fontSize: 16,
     color: Colors.primary,
     marginVertical: 5
 },
 servicesRow: {
   flexDirection: "row",
   justifyContent: "space-between",
   paddingVertical: 5,
   alignItems: 'center'
 },
 danger: {
   color: Colors.danger
 }
});

export default AnimalInfo;