import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import Colors from "../constants/colors";

const GenerateReceipt = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
            <Button title='Back To Dashboard' onPress={() => props.navigation.navigate({routeName: 'MainPage'})} color={Colors.primary} />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}
GenerateReceipt.navigationOptions = {
  headerTitle: "Generate Receipt",
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
});
export default GenerateReceipt;