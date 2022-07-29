import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainPage from '../screens/MainPage';
import SelectAnimal from '../screens/SelectAnimal';
import SelectCustomer from '../screens/SelectCustomer';
import GenerateReceipt from '../screens/GenerateReceipt';
import ViewCustomers from '../screens/ViewCustomers';
import Colors from '../constants/colors';
import { Image } from 'react-native';


const Navigator = createStackNavigator({
  MainPage : {
        screen : MainPage,
        // navigationOptions : {
        //     header : null
        // },
    },
    SelectAnimal : {
        screen : SelectAnimal,
        // navigationOptions : {
        //     header : null
        // },
    },
    SelectCustomer : {
        screen: SelectCustomer,
        // navigationOptions : {
        //     header : null
        // },
    },
    GenerateReceipt : {
        screen : GenerateReceipt,
        
    },
    ViewCustomers : {
      screen : ViewCustomers,
      
  },
},{
    mode : 'modal',
    defaultNavigationOptions: {
        headerTintColor: Colors.headerText,
        headerTitleStyle: {
          textAlign: "center",
          marginTop: 50,
          fontWeight: 'bold',
          fontSize: 28
        },
        headerStyle: {
          elevation: 2,
        },
        headerLeft: (() => {}),
        headerBackground: () => (
          <Image
            source={require("../assets/bg.png")}
            style={{
              width: "100%",
              height: 150,
              
            }}
          />
        ),
        
    }
});

export default createAppContainer(Navigator);