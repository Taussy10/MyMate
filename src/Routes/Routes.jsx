import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home';
import Splash from '../Screens/Splash';
const stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='Splash' component={Splash} />
    </stack.Navigator>
  )
}

export default Routes

const styles = StyleSheet.create({})