import React from "react";
import { TouchableOpacity, View, Text, StyleSheet} from "react-native";
import Colors from "../constants/colors";
const AnimalsGridTile = props => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
        <View style={{...styles.container,...{color : Colors.header}}}>
            <Text style={styles.text}>ID: {props.id}</Text>
            <Text >Name: {props.name}</Text>
            <Text >Services: {props?.services?.length}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 90,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: Colors.primary,
        borderWidth:  2, 
        width: 320,
    },
    container: {
        justifyContent: 'flex-start',
        width: '90%',
    },
    text: {
        marginVertical: 5
    },
});

export default AnimalsGridTile;
        
