import React, { useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PriceInput from "../components/PriceInput";
import Colors from "../constants/colors";
import { ANIMALS } from "../data/data";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ViewService = (props) => {
  const selectedAnimal = props.navigation.getParam("selectedAnimal");
  const service = props.navigation.getParam("service");
  const [isEdit, setIsEdit] = useState(false);
  const [isAddMain, setIsAddMain] = useState(false);
  const [title, setTitle] = useState("");
  const [main, setMain] = useState('');
  const [mainError, setMainError] = useState(false);
  const [sub, setSub] = useState('');
  const [subError, setSubError] = useState(false);
  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState(false);
  const [isAddSub, setIsAddSub] = useState(false);
  const [typeSub, setTypeSub] = useState('');
  const [typeSubError, setTypeSubError] = useState(false);
  const [priceSub, setPriceSub] = useState('');
  const [priceSubError, setPriceSubError] = useState(false);
  const [mainID, setMainID] = useState('');
  const titleHandler = (text) => {
    setTitle(text);
  };
  const titleEdit = async () => {
    if (title !== "") {
      ANIMALS[selectedAnimal.id - 1].services[service.id - 1].title = title;
      try {
        const data = JSON.stringify(ANIMALS);
        await AsyncStorage.setItem("Animals", data);
        alert("Data successfully saved after updating!");
      } catch (e) {
        alert("Failed to save data.");
      }
    }
    setIsEdit(false);
  };
  const mainHandler = (text) => {
    if(text === ''){
      setMainError(true);
    }else{
      setMainError(false);
    }
    setMain(text.replace('<', ''));
  }
  const subHandler = (text) => {
    if(text === ''){
      setSubError(true);
    }else{
      setSubError(false);
    }
    setSub(text.replace('<', ''));
  }
  const priceHandler = (text) => {
    if(text === ''){
      setPriceError(true);
    }else{
      setPriceError(false);
    }
    setPrice(text.replace('<', ''));
  }
  const typeSubHandler = (text) => {
    if(text === ''){
      setTypeSubError(true);
    }else{
      setTypeSubError(false);
    }
    setTypeSub(text.replace('<', ''));
  }
  const priceSubHandler = (text) => {
    if(text === ''){
      setPriceSubError(true);
    }else{
      setPriceSubError(false);
    }
    setPriceSub(text.replace('<', ''));
  }
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
  const addCategory = async () => {
    if(main !== '' && sub !== '' && price > 0){
      ANIMALS[selectedAnimal.id - 1].services[service.id - 1].mainCategory.push({
        id : `${selectedAnimal.name}-${selectedAnimal.id}-${makeid(1)}`,
        type : main,
        subCategory: []
      });
      let index = ANIMALS[selectedAnimal.id - 1].services[service.id - 1].mainCategory.length;
      ANIMALS[selectedAnimal.id-1].services[service.id - 1].mainCategory[index-1].subCategory.push({
        id: `${selectedAnimal.name}-${selectedAnimal.mainCategory[index-1].type}-${selectedAnimal.id}-${makeid(1)}`,
        type : sub,
        price: price,
        quantity: 1,
        discount: 0
      });
      try {
        const data = JSON.stringify(ANIMALS);
        await AsyncStorage.setItem('Animals', data);
        alert('Data successfully saved!')
      } catch (e) {
        alert('Failed to save data.')
      }
    Alert.alert('Affirmation', 'Category added successfully', [{text: 'Okay', style: 'destructive'}]);
    setMain('');
    setSub('');
    setPrice('');
    setIsAddMain(false);
    }
  }
  const addSubHandler = async () => {
    let indexArray = ANIMALS[selectedAnimal.id - 1].services[service.id - 1].mainCategory.map(m => {return m.id === mainID })
    const indexM = indexArray.indexOf(true);
    console.log(indexM);
    ANIMALS[selectedAnimal.id-1].services[service.id - 1].mainCategory[indexM]?.subCategory.push({
      id: `${selectedAnimal.name}-${selectedAnimal.mainCategory[indexM].type}-${selectedAnimal.id}-${makeid(1)}`,
      type : typeSub,
      price: priceSub,
      quantity: 1,
      discount: 0
    });
    try {
      const data = JSON.stringify(ANIMALS);
      await AsyncStorage.setItem('Animals', data);
      alert('Data successfully saved!')
    } catch (e) {
      alert('Failed to save data.')
    }
  Alert.alert('Affirmation', 'Sub Category added successfully', [{text: 'Okay', style: 'destructive'}]);
  setTypeSub('');
  setPriceSub('');
  setIsAddSub(false);
  }
  return (
    <View style={styles.screen}>
      {isAddSub ? <View>
            <Button title="Cancel" color={Colors.danger} onPress={() => setIsAddSub(false)} />
            <TextInput 
            placeholder='type' 
            blurOnSubmit autoCapitalize='none' 
            autoCorrect={false}
            value={typeSub}
            onChangeText={typeSubHandler}
            style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
            {typeSubError ? <Text style={styles.danger}>Enter Valid Sub Category Type</Text> : null}
            <TextInput 
            placeholder='1000' 
            blurOnSubmit autoCapitalize='none' 
            autoCorrect={false}
            value={priceSub}
            onChangeText={priceSubHandler}
            style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
            {priceSubError ? <Text style={styles.danger}>Enter Valid Price</Text> : null}
            <Button title="Done" color={Colors.success} onPress={addSubHandler} />
          </View> : <ScrollView>
      <Button
        title="Back To Animal"
        onPress={() =>
          props.navigation.navigate({ routeName: "AnimalDetails" })
        }
        color={Colors.primary}
      />
      <View style={styles.servicesRow}>
          <Text style={styles.title}>
          Title:{" "}
          {isEdit ? (
            <View>
              <TextInput
                placeholder="title"
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                value={title}
                onChangeText={titleHandler}
                style={{
                  borderBottomColor: Colors.primary,
                  borderBottomWidth: 1,
                }}
              />
            </View>
          ) : (
            <Text>{service.title}</Text>
          )}
        </Text>
        {isEdit ? (
          <View style={styles.servicesRow}>
            <Button title="Done" onPress={titleEdit} color={Colors.success} />
            <Button
              title="Cancel"
              onPress={() => setIsEdit(false)}
              color={Colors.danger}
              style={{ marginLeft: 5 }}
            />
          </View>
        ) : (
          <Button
            title="Edit"
            onPress={() => setIsEdit(true)}
            color={Colors.primary}
          />
        )}
      </View>
      {isAddMain ? (
        <View>
          <TextInput 
            placeholder='Full-cut' 
            blurOnSubmit autoCapitalize='none' 
            autoCorrect={false}
            value={main}
            onChangeText={mainHandler}
            style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
            {mainError ? <Text style={styles.danger}>Enter Valid Main Category</Text> : null}
            <TextInput 
            placeholder='Single Coat' 
            blurOnSubmit autoCapitalize='none' 
            autoCorrect={false}
            value={sub}
            onChangeText={subHandler}
            style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
            {subError ? <Text style={styles.danger}>Enter Valid Sub Category</Text> : null}
            <TextInput 
            placeholder='1000' 
            blurOnSubmit autoCapitalize='none' 
            autoCorrect={false}
            value={price}
            onChangeText={priceHandler}
            style={{borderBottomColor:Colors.primary, borderBottomWidth: 1, padding: 10, marginVertical:10 }} />
            {priceError ? <Text style={styles.danger}>Enter Valid Price</Text> : null}
        </View>
      ) : (
        <ScrollView>
          {service.mainCategory.map((m, indexM) => (
            <View key={indexM} style={styles.mainCategory}>
              <View style={styles.servicesRow}>
                <Text style={styles.mainCategoryText}>Type: {m.type}</Text>
                  <Button title="+" color={Colors.success} onPress={() => {setIsAddSub(true); setMainID(m.id)}} />
              </View>
              {m.subCategory.map((s, indexS) => (
                <View key={indexS} style={styles.servicesRow}>
                  <Text>{s.type}</Text>
                  <Text>
                    {isEdit ? (
                      <View>
                        <PriceInput
                          subCategoryIndex={indexS}
                          mainCategoryIndex={indexM}
                          animal={
                            ANIMALS[selectedAnimal.id - 1].services[
                              service.id - 1
                            ]
                          }
                        />
                      </View>
                    ) : (
                      <Text>Rs. {s.price}</Text>
                    )}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      )}
      {isAddMain ? (
        <View style={styles.servicesRow}>
          <Button title="Done" color={Colors.success} onPress={addCategory} />
          <Button
            title="Cancel"
            color={Colors.danger}
            onPress={() => setIsAddMain(false)}
          />
        </View>
      ) : (
        <Button
          title=" + Add New Category"
          color={Colors.success}
          onPress={() => setIsAddMain(true)}
        />
      )}
      </ScrollView>}
    </View>
  );
};

ViewService.navigationOptions = {
  headerTitle: "View Service",
  headerStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.secondary,
    flex: 1,
    padding: 30,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    textTransform: "capitalize",
    marginBottom: 20,
  },
  mainCategory: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
  },
  mainCategoryText: {
    fontWeight: "700",
    textTransform: "capitalize",
  },
  input: {
    width: "90%",
  },
  servicesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
  },
  danger: {
    color: Colors.danger
  }
});

export default ViewService;
