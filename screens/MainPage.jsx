import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Colors from "../constants/colors";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const MainPage = (props) => {
  let TabComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TabComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <View style={styles.headingContainer}>
          <FontAwesome
            name="tasks"
            size={20}
            color="#424242"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.heading}>Select</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={10}
          style={{ flexDirection: "row" }}
        >
          <TabComponent
            activeOpacity={0.6}
            onPress={() =>
              props.navigation.navigate({
                routeName: "SelectAnimal",
              })
            }
          >
            <View style={styles.tab}>
              <FontAwesome5 name="receipt" size={24} color="white" />
              <Text style={styles.text}>Generate Receipt</Text>
            </View>
          </TabComponent>
          <TabComponent
            activeOpacity={0.6}
            onPress={() =>
              props.navigation.navigate({
                routeName: "ViewCustomers",
              })
            }
          >
            <View style={styles.tab}>
              <FontAwesome5 name="users" size={24} color="white" />
              <Text style={styles.text}>View Customers</Text>
            </View>
          </TabComponent>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={10}
          style={{ flexDirection: "row" }}
        >
          <TabComponent
            activeOpacity={0.6}
            onPress={() =>
              props.navigation.navigate({
                routeName: "ViewReceipts",
              })
            }
          >
            <View style={styles.tab}>
              <Fontisto name="preview" size={24} color="white" />
              <Text style={styles.text}>View Receipts</Text>
            </View>
          </TabComponent>
          <TabComponent
            activeOpacity={0.6}
            onPress={() =>
              props.navigation.navigate({
                routeName: "ViewAnimalBio",
              })
            }
          >
            <View style={styles.tab}>
              <MaterialIcons name="pets" size={24} color="white" />
              <Text style={styles.text}>View Animals</Text>
            </View>
          </TabComponent>
        </KeyboardAvoidingView>
        <View style={{flexDirection: 'row'}}>
        <Entypo name="edit" size={18} color={Colors.primary} />
        <Text
          style={styles.customize}
          onPress={() =>
            props.navigation.navigate({
              routeName: "AddAnimal",
            })
          }
        >
          Customize
        </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

MainPage.navigationOptions = {
  headerTitle: "Home",
  headerStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.secondary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    minWidth: 300,
    maxWidth: "90%",
    elevation: 2,
    padding: 30,
    borderRadius: 10,
    backgroundColor: "#f7f2f2",
  },
  tab: {
    margin: 10,
    backgroundColor: Colors.primary,
    width: Dimensions.get("window").width * 0.375,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 2,
  },
  text: {
    color: "white",
  },
  heading: {
    color: "#424242",
    fontSize: 20,
  },
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  customize: {
    color: Colors.primary,
    textAlign: "center",
    textDecorationLine: 'underline'
  },
});
export default MainPage;
