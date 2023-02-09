import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../Screen/Login/Login";
import Splash from "../Screen/Splash/Splash";
import SingUpScreen from "../Screen/Signup/Signup";
import HomeScreen from "../Screen/Home/HomeScreen";


const Stack = createNativeStackNavigator();


function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'HomeScreen'}>
        <Stack.Screen name={'SplashScreen'} component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name={'LoginScreen'} component={Login} options={{headerShown:false}}/>
        <Stack.Screen name={'SingUpScreen'} component={SingUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name={'HomeScreen'} component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )

}
export default MainContainer ;