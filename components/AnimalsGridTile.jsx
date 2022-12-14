import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button, Dimensions} from "react-native";
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
                <Button title='View' onPress={props.onChoose} color={Colors.primary} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Button title="Delete" onPress={props.onDelete} color={Colors.danger} style={styles.button} />
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
        borderWidth:  1, 
        width: Dimensions.get('window').width*0.90,
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
        
