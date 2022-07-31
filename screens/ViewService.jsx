import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import PriceInput from "../components/PriceInput";
import Colors from "../constants/colors";
import { ANIMALS } from "../data/data";

const ViewService = props => {
  const selectedAnimal = props.navigation.getParam('selectedAnimal');
  const service =  props.navigation.getParam('service');
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState('');
  const titleHandler = (text) => {
    setTitle(text);
  }
  const titleEdit = async () => {
    if(title !== ''){
      ANIMALS[selectedAnimal.id - 1].services[service.id -1].title = title;
      try {
        const data = JSON.stringify(ANIMALS);
        await AsyncStorage.setItem('Animals', data);
        alert('Data successfully saved after updating!')
      } catch (e) {
        alert('Failed to save data.')
      }
    }
    setIsEdit(false);
  }
  return(
    <View style={styles.screen}>
        <Button title='Back To Animal' onPress={() => props.navigation.navigate({routeName: 'AnimalDetails'})} color={Colors.primary} />
        <View style={styles.servicesRow}>
          <Text style={styles.title}>Title: {isEdit ? 
        <View>
        <TextInput 
        placeholder='title' 
        blurOnSubmit autoCapitalize='none' 
        autoCorrect={false}
        value={title}
        onChangeText={titleHandler}
        style={{borderBottomColor:Colors.primary, borderBottomWidth: 1,}} />
        </View>
        : <Text>{service.title}</Text>}</Text>
          {isEdit ? <View style={styles.servicesRow}>
            <Button title="Done" onPress={titleEdit} color={Colors.primary} />
            <Button title="Cancel" onPress={() => setIsEdit(false)} color={Colors.primary} style={{marginLeft: 5}} />
            </View> : <Button title="Edit" onPress={() => setIsEdit(true)} color={Colors.primary} />}
        </View>
        <ScrollView>
        {service.mainCategory.map((m,indexM) => 
          <View key={indexM} style={styles.mainCategory}>
            <Text style={styles.mainCategoryText}>Type: {m.type}</Text>
            {m.subCategory.map((s,indexS) => 
              <View key={indexS} style={styles.servicesRow}>
                <Text>{s.type}</Text>
                <Text>{isEdit ? 
                <View>
                  <PriceInput subCategoryIndex={indexS} mainCategoryIndex={indexM} animal={ANIMALS[selectedAnimal.id - 1].services[service.id -1]} />
                </View> : <Text>Rs. {s.price}</Text>}</Text>
              </View>
            )}
          </View>
        )}
        </ScrollView>
    </View>
  )
}

ViewService.navigationOptions = {
  headerTitle: "View Service",
  headerStyle: {
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
  },
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.secondary,
    flex: 1,
    padding: 30,
    marginTop: 50
  },
  title: {
    fontSize: 24,
    textTransform: 'capitalize',
    marginBottom: 20 
  },
  mainCategory: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2
  },
  mainCategoryText: {
    fontWeight : "700",
    textTransform: 'capitalize',
  },
  input: {
    width: '90%',
  },
  servicesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: 'center'
  },
});

export default ViewService;