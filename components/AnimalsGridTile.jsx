import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button} from "react-native";
import Colors from "../constants/colors";
const AnimalsGridTile = props => {
    return (
        <View style={styles.gridItem}>
        <View style={{...styles.container,...{color : Colors.header}}}>
            <Text style={styles.text}>ID: {props.id}</Text>
            <Text >Name: {props.name}</Text>
            <Text >Services: {props?.services?.length}</Text>
        </View>
        <View style={styles.servicesRow}>
            <TouchableOpacity>
                <Button title='View' onPress={props.onSelect} color={Colors.primary} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Button title="Delete" onPress={props.onDelete} color={Colors.primary} style={styles.button} />
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 130,
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
    servicesRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: '100%',
        alignItems: 'center',
        paddingVertical: 5
      },
    button : {
        marginHorizontal: 10,
        width: '100%'
    }
});

export default AnimalsGridTile;
        
