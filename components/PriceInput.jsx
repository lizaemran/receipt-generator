import React, { useState } from "react";
import { TextInput, View } from "react-native";
import Colors from "../constants/colors";

const PriceInput = props => {
  const [price, setPrice] = useState('');
  const animal = props.animal;
  const mainCategoryIndex = props.mainCategoryIndex;
  const subCategoryIndex = props.subCategoryIndex;
  const handleChange = async (text) => {
    if(text !== ''){
      setPrice(text);
      animal.mainCategory[mainCategoryIndex].subCategory[subCategoryIndex].price = Number(text);
    }
  }
  return(
    <View>
      <TextInput 
        placeholder='price' 
        blurOnSubmit autoCapitalize='none' 
        autoCorrect={false}
        value={price}
        onChangeText={handleChange}
        style={{borderBottomColor:Colors.primary, borderBottomWidth: 1,}} />
    </View>
  )
}

export default PriceInput;