import React, { useState } from "react";
import { Text, View, Button , StyleSheet, Dimensions, ScrollView } from 'react-native';
import AnimalInfoForm from "../components/AnimalInfoForm";
import Colors from '../constants/colors';
const AnimalInfo = props => {
  const initialValues = [{
    type: '',
    name: '',
    age: '',
    color: ''
  }]
  const [animalInfo, setAnimalInfo] = useState(initialValues);
  const animals = props.navigation.getParam("animals");
  return(
    <View style={styles.screen}>
      <View style={styles.servicesRow}>
      <Button
          title="Back to Animals"
          onPress={() =>
            props.navigation.navigate({ routeName: "SelectAnimal" })
          }
          color={Colors.primary}
        />
         {(animals.length === animalInfo.length) && <Button
          title="Next"
          onPress={() =>
            props.navigation.navigate({ routeName: "SelectCustomer" ,
            params: {
              animals: animalInfo,
            },
          })
          }
          color={Colors.primary}
        />}
      </View>
      
      <ScrollView>
        {animals.map((a, index) => 
            <View key={index}>
              <View style={styles.name}>
                <Text style={styles.info}>{a}</Text>
                <Text style={styles.info}>Nick Name: {animalInfo[index]?.name}</Text>
                <Text style={styles.info}>Age: {animalInfo[index]?.age}</Text>
                <Text style={styles.info}>Color: {animalInfo[index]?.color}</Text>
              </View>
              <AnimalInfoForm animal={a} animalInfo={animalInfo} index={index} setAnimalInfo={setAnimalInfo} />
            </View>
          )}
        </ScrollView>
       
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
 },
 name: {
  marginVertical: 10,
  borderBottomColor: Colors.primary,
  borderBottomWidth: 2,
  backgroundColor: Colors.primary,
  padding: 10,
  fontSize: 18,
},
info: {
  textAlign: "center",
  textTransform: "capitalize",
}
});

export default AnimalInfo;