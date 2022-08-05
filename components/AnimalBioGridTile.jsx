import React from "react";
import { TouchableOpacity, View, Text, StyleSheet} from "react-native";
import Colors from "../constants/colors";
const AnimalBioGridTile = props => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
        <View style={{...styles.container,...{color : Colors.header}}}>
            <Text style={styles.text}>ID: {props.id}</Text>
            <Text style={styles.text}>Type: {props.type}</Text>
            <Text style={styles.text}>Name: {props.name}</Text>
            <Text style={styles.text}>Sex: {props.sex}</Text>
            <Text style={styles.text}>Breed: {props.breed}</Text>
            <Text style={styles.text}>Color: {props.color}</Text>
            <Text style={styles.text}>Age: {props.age}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: Colors.primary,
        borderWidth:  1, 
    },
    container: {
        justifyContent: 'flex-start',
        width: '90%',
    },
    text: {
        marginVertical: 5
    },
});

export default AnimalBioGridTile;
        
