import React, { useState } from 'react';
import { Text, View, Button , StyleSheet, Dimensions, TextInput, Alert, ScrollView } from 'react-native';
import Colors from '../constants/colors';
import { ANIMALS } from '../data/data';
import AsyncStorage from '@react-native-async-storage/async-storage'
const AnimalDetails = props => {
  const [isAddService, isSetAddService] = useState(false);
  const [service, setService] = useState('');
  const [serviceError, setServiceError] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [serviceTypeError, setServiceTypeError] = useState(false);
  const [serviceSubType, setServiceSubType] = useState('');
  const [serviceSubTypeError, setServiceSubTypeError] = useState(false);
  const [servicePrice, setServicePrice] = useState('');
  const [servicePriceError, setServicePriceError] = useState(false);
  const animal_id =  props.navigation.getParam('animalId');
  const selectedAnimal = ANIMALS.find(a => a.id === animal_id);
  const serviceHandler = (text) => {
    if(text === ''){
      setServiceError(true);
    }else{
      setServiceError(false);
    }
    setService(text.replace('<', ''));
  }
  const serviceTypeHandler = (text) => {
    if(text === 0){
      setServiceTypeError(true);
    }else{
      setServiceTypeError(false);
    }
    setServiceType(text.replace('<', 0));
  }
  const serviceSubTypeHandler = (text) => {
    if(text === 0){
      setServiceSubTypeError(true);
    }else{
      setServiceSubTypeError(false);
    }
    setServiceSubType(text.replace('<', 0));
  }
  const servicePriceHandler = (text) => {
    if(text === 0){
      setServicePriceError(true);
    }else{
      setServicePriceError(false);
    }
    setServicePrice(text.replace('<', 0));
  }
  const addServices = async () => {
    if(service === '' && servicePrice === 0 && serviceSubType === '' && serviceType){
      Alert.alert('Invalid Input', 'Please enter a valid services details', [{text: 'Okay', style: 'destructive'}]);
    }
    else{
      ANIMALS[animal_id-1].services.push({
        title: service,
        mainCategory: [{
          type: serviceType,
          subCategory: [{
            type: serviceSubType,
            price: Number(servicePrice)
          }]
        }]
      });
      console.log(ANIMALS);
      try {
        const data = JSON.stringify(ANIMALS);
        await AsyncStorage.setItem('Animals', data);
        alert('Data successfully saved!')
      } catch (e) {
        alert('Failed to save data.')
      }
      Alert.alert('Affirmation', 'Service added successfully', [{text: 'Okay', style: 'destructive'}])
      isSetAddService(false);
    }
  }
  return (
    <View style={styles.screen}>
       <View style={styles.button}>
            <Button title='Back To Animals' onPress={() => props.navigation.navigate({routeName: 'AddAnimal'})} color={Colors.primary} />
      </View>
      {!isAddService &&
      <ScrollView style={styles.detailItem}>
      <Text style={styles.smalltext}>ID: {selectedAnimal.id}</Text>
        <Text style={styles.smalltext}>Name: {selectedAnimal.name}</Text>
        <Text style={styles.smalltext}>Services: </Text>
        {selectedAnimal?.services?.length > 0 ? selectedAnimal?.services?.map((s, index) => 
        <View key={s.title} style={styles.serviceRow}>
          <Text  style={styles.services}>
            {index + 1}. {s?.title}
          </Text>
          <Button title='View' color={Colors.primary} onPress={() => props.navigation.navigate({routeName: 'ViewService', params : {
            service : s,
            selectedAnimal : selectedAnimal
          }})} />
        </View>) : <Text>No Services Added Yet</Text>}
        </ScrollView>}
        <View style={styles.Add}>
            {isAddService ? <Button title='X' onPress={() => isSetAddService(false)} color={Colors.primary} /> : 
            <Button title='+ Add New' onPress={() => isSetAddService(true)} color={Colors.primary} />}
      </View>
      {isAddService && <View style={{width: '90%' }}>
        <TextInput 
        placeholder='Trimming' 
        blurOnSubmit autoCapitalize='none' 
        autoCorrect={false}
        value={service}
        onChangeText={serviceHandler}
        style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
        {serviceError ? <Text style={styles.danger}>Enter Valid Service Name</Text> : null}
        <TextInput 
        placeholder='Full-cut' 
        blurOnSubmit autoCapitalize='none' 
        autoCorrect={false}
        value={serviceType}
        onChangeText={serviceTypeHandler}
        style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
        {serviceTypeError ? <Text style={styles.danger}>Enter Valid Service Name</Text> : null}
        <TextInput 
        placeholder='Single' 
        blurOnSubmit autoCapitalize='none' 
        autoCorrect={false}
        value={serviceSubType}
        onChangeText={serviceSubTypeHandler}
        style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
        {serviceSubTypeError ? <Text style={styles.danger}>Enter Valid Service Name</Text> : null}
        <TextInput 
        placeholder='1000' 
        blurOnSubmit autoCapitalize='none' 
        autoCorrect={false}
        value={servicePrice}
        onChangeText={servicePriceHandler}
        style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
        {servicePriceError ? <Text style={styles.danger}>Enter Valid Service Price</Text> : null}
        <View style={styles.AddService}>
            <Button title=' + Add Service' onPress={addServices} color={Colors.primary} />
      </View>
        </View>}

    </View>
  ); 
}

AnimalDetails.navigationOptions = (navigationData) => {
     return {
         headerTitle: 'Animal Details',
         
     }
 }

const styles = StyleSheet.create({
    detailItem: {
        borderRadius: 10,
        elevation: 2,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderColor: Colors.primary,
        borderWidth:  2,
        width: '100%'
    
    },
    screen: {
        backgroundColor:Colors.secondary,
        flex:1,
        padding: 10,
        marginTop: 50
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
    serviceRow:{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 5,
    },
    services: {
      textTransform: 'capitalize'
    },
    Add: {
      fontSize: 24,
      marginTop: 5
    }
});

export default AnimalDetails;