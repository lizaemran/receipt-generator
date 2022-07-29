import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View , 
  Image, 
  Dimensions, 
  Platform
} from 'react-native';
import  Colors from '../constants/colors';
const Header = props => {
    return (
      <View style={{
       ...styles.headeBase,
       ...Platform.select({
         ios : styles.headerIOS, 
         android: styles.headerAndroid,
         
         })}}>
          {/* <Text style={styles.headerTitle}>{props.title}</Text> */}
          <Image source={require('../assets/logo.jpg')} style={styles.tinyLogo} />
            <Text style={styles.text}>Receipt Generator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headeBase : {
      width: '100%',
      height: 50,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
        // backgroundColor: Platform.OS === 'android' ? Colors.primary : 'black',
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  headerIOS: {
    backgroundColor: 'black',
  },
  headerTitle: {
        color:'white',
        fontSize:18,
        fontWeight:'bold',
  },
  tinyLogo: {
    width: Dimensions.get('window').width * 0.13,
    height: Dimensions.get('window').width * 0.13,
  },
  text: {
      color:'white',
      fontSize:20,
      marginVertical: 10,
      paddingLeft: 10
  },

});

export default Header;