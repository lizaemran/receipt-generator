import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, TextInput, Alert, FlatList, Text } from 'react-native';
import Colors from "../constants/colors";
import { ANIMALS } from '../data/data';
import AnimalsGridTile from '../components/AnimalsGridTile';
import Animal from '../modals/Animal';
import AsyncStorage from '@react-native-async-storage/async-storage'

const AddAnimal = props => {
  const [animalsData, setAnimalsData] = useState([]);
  useEffect(() => {
    const getData = async () => {
    try {
      const animals = await AsyncStorage.getItem('Animals')
  
      if (animals !== null) {
        setAnimalsData(animals);
      }
    } catch (e) {
      alert('Failed to load animals data.')
    }
  }
    getData();
  },[])
  const [animal, setAnimal] = useState('');
  const [animalError, setAnimalError] = useState('');
  const animalHandler = (text) => {
    if(text === ''){
      setAnimalError(true);
    }else{
      setAnimalError(false);
    }
    setAnimal(text.replace('<', ''));
  }
  const addAnimal = async () => {
    if(animal === ''){
      Alert.alert('Invalid Input', 'Please enter a valid animal name', [{text: 'Okay', style: 'destructive'}]);
    }
    else{
      ANIMALS.push(new Animal(ANIMALS.length + 1, animal, []));
        try {
          const data = JSON.stringify(ANIMALS.length + 1, animal, []);
          await AsyncStorage.setItem('Animals', data);
          alert('Data successfully saved!')
        } catch (e) {
          alert('Failed to save data.')
        }
      Alert.alert('Affirmation', 'Animal added successfully', [{text: 'Okay', style: 'destructive'}]);
      setAnimal('');
    }
  }
  const renderGridItem = itemData => {
    return <AnimalsGridTile 
    id={itemData.item.id} 
    name={itemData.item.name}
    services={itemData.item.services}
    onSelect={() => props.navigation.navigate({
        routeName: 'AnimalDetails',
        params: {
            animalId: itemData.item.id,
        }
      })}
       />;
};
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
            <Button title='Back To Dashboard' onPress={() => props.navigation.navigate({routeName: 'MainPage'})} color={Colors.primary} />
      </View>
      <View style={styles.input}>
      <TextInput 
        placeholder='Cat' 
        blurOnSubmit autoCapitalize='none' 
        autoCorrect={false}
        value={animal}
        onChangeText={animalHandler}
        style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
        {animalError ? <Text style={styles.danger}>Enter Valid Animal Name</Text> : null}
      </View>
      <View style={styles.Add}>
            <Button title=' + Add Animal' onPress={addAnimal} color={Colors.primary} />
      </View>
      {animalsData?.length > 0 ? (<FlatList
        keyExtractor={(item, index) => item.id}
        numColumns={0} 
        data={ANIMALS} 
        renderItem={renderGridItem} />) : (
        <View style={styles.noAnimals}>
            <Text style={styles.text}>No Animals Added Yet</Text>
        </View>
        )}
      <StatusBar style='auto' />
    </View>
  )
}
AddAnimal.navigationOptions = {
  headerTitle: "Add Animal",
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
    padding: 10
  },
  input: {
    width: '90%',
  },
  noAnimals: {
    flex:1,
  },
  button: {
    marginTop: 90
  }
});
export default AddAnimal;