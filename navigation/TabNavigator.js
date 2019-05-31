import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Icon
} from "react-native";
import {
   createDrawerNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator
} from "react-navigation";
import HomeScreen from '../screen/HomeScreen';
import Saved from '../screen/Saved';
import { Ionicons } from '@expo/vector-icons'; 








const AppNavigator = createBottomTabNavigator({
    
       home:{
           screen:HomeScreen,
            navigationOptions: () => ({
                title:"Home",
                showIcon:true,
                tabBarIcon:()=>{
                   <Ionicons 
                      name="md-home"
                      color="#333745"
                     />
                },
           
        })
                    
         },
       About:{
           screen:Saved,

        },
       
      

});


export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
          iron:{
             margin:20,
          },
});
